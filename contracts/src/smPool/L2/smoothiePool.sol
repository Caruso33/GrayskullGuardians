// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import {EAS} from "../../eas/EAS.sol";
import {NO_EXPIRATION_TIME, EMPTY_UID} from "../../eas/Common.sol";
import {IEAS, AttestationRequest, AttestationRequestData} from "../../eas/IEAS.sol";

contract SmoothiePool {
    EAS public immutable eas;

    address daoMultiSigAddress;
    uint256 totalDenomUnits;

    uint256 payoutFreezePeriod = 7 days;
    uint256 payoutEthThreshold = 0.1 ether;

    struct Participant {
        bytes worldId;
        address withdrawalAddress; // the noCheat contract address in this case
        address walletAddress; // the wallet address of the validator
        uint256 joinedTimestamp;
        uint256 denomUnits;
        address[] attestationChallengers;
        bool isSlashed;
        uint256 requestPayoutTimestamp;
    }

    mapping(bytes => Participant) public worldIdToParticipant;
    bytes[] public participants;

    event AddedToPool(bytes worldId, address withdrawalAddress);
    event RewardAttestationCreated(
        bytes worldId,
        address withdrawalAddress,
        address walletAddress
    );

    error AlreadyInPool();
    error ParticipantIsSlashed();
    error AlreadyRequestingPayout();
    error ParticipantNotFound();
    error ChallengerMustBeParticipant();
    error AlreadyRequestingChallenged();
    error NoRequestForPayout();
    error NotReachedPayoutTimestamp();
    error EthPayoutThresholdNotReached();

    constructor(address _eas, address _daoMultiSigAddress) {
        eas = EAS(_eas);
        daoMultiSigAddress = _daoMultiSigAddress;
    }

    function onEpoch() external {
        uint256 unslashedParticipants = 0;

        for (uint256 i = 0; i < participants.length; i++) {
            bytes memory worldId = participants[i];
            Participant memory participant = worldIdToParticipant[worldId];

            if (!participant.isSlashed) {
                participant.denomUnits += 1;
                worldIdToParticipant[worldId] = participant;

                unslashedParticipants += 1;
            }
        }

        totalDenomUnits += unslashedParticipants;
    }

    function addToPool(
        bytes memory worldId,
        address withdrawalAddress
    ) external {
        Participant memory participant = worldIdToParticipant[worldId];

        if (participant.withdrawalAddress != address(0)) {
            revert AlreadyInPool();
        }

        address[] memory attestationChallengers;
        worldIdToParticipant[worldId] = Participant(
            worldId,
            withdrawalAddress,
            msg.sender,
            block.timestamp,
            0,
            attestationChallengers,
            false,
            0
        );
        participants.push(worldId);

        emit AddedToPool(worldId, withdrawalAddress);
    }

    function initiateRewardsCreateAttestation(bytes memory worldId) external {
        Participant memory participant = worldIdToParticipant[worldId];

        if (participant.withdrawalAddress == address(0)) {
            revert ParticipantNotFound();
        }

        if (participant.isSlashed) {
            revert ParticipantIsSlashed();
        }

        if (participant.requestPayoutTimestamp != 0) {
            revert AlreadyRequestingPayout();
        }

        uint256 participantShare = totalDenomUnits / participant.denomUnits;

        if (address(this).balance / participantShare < payoutEthThreshold) {
            revert EthPayoutThresholdNotReached();
        }

        participant.requestPayoutTimestamp = block.timestamp;
        worldIdToParticipant[worldId] = participant;

        bytes memory data = abi.encode(
            worldId,
            participant.withdrawalAddress,
            participant.walletAddress,
            block.timestamp
        );

        bytes memory schema = bytes(
            "bytes worldId,address withdrawalAddress,address walletAddress"
        );

        eas.attest(
            AttestationRequest({
                schema: bytes32(schema),
                data: AttestationRequestData({
                    recipient: address(0), // No recipient
                    expirationTime: NO_EXPIRATION_TIME, // No expiration time
                    revocable: true,
                    refUID: EMPTY_UID, // No references UI
                    data: data,
                    value: 0 // No value/ETH
                })
            })
        );

        emit RewardAttestationCreated(
            worldId,
            participant.withdrawalAddress,
            participant.walletAddress
        );
    }

    function challengeAttestation(
        bytes memory challengerWorldId,
        bytes memory attestationOwnerWorldId
    ) external {
        Participant memory attestationOwnerParticipant = worldIdToParticipant[
            attestationOwnerWorldId
        ];

        Participant memory challengerParticipant = worldIdToParticipant[
            challengerWorldId
        ];

        if (challengerParticipant.walletAddress == address(0)) {
            revert ParticipantNotFound();
        }

        if (challengerParticipant.walletAddress != msg.sender) {
            revert ChallengerMustBeParticipant();
        }

        if (challengerParticipant.isSlashed) {
            revert ParticipantIsSlashed();
        }

        for (
            uint256 i = 0;
            i < attestationOwnerParticipant.attestationChallengers.length;
            i++
        ) {
            if (
                attestationOwnerParticipant.attestationChallengers[i] ==
                challengerParticipant.walletAddress
            ) {
                revert AlreadyRequestingChallenged();
            }
        }

        uint256 unslashedParticipants = getUnslashedParticipants();

        attestationOwnerParticipant.attestationChallengers[
            attestationOwnerParticipant.attestationChallengers.length
        ] = challengerParticipant.walletAddress;

        if (
            attestationOwnerParticipant.attestationChallengers.length >
            (unslashedParticipants / 2)
        ) {
            uint256 attestationOwnerShare = totalDenomUnits /
                attestationOwnerParticipant.denomUnits;

            payable(address(0x0)).transfer(
                address(this).balance / attestationOwnerShare
            ); // burn share

            attestationOwnerParticipant.isSlashed = true;
            totalDenomUnits - attestationOwnerParticipant.denomUnits;
            attestationOwnerParticipant.denomUnits = 0;
        }
    }

    function payoutRewardsAfterInitialization(bytes memory worldId) internal {
        Participant memory participant = worldIdToParticipant[worldId];

        if (participant.withdrawalAddress == address(0)) {
            revert ParticipantNotFound();
        }

        if (participant.isSlashed) {
            revert ParticipantIsSlashed();
        }

        if (participant.requestPayoutTimestamp == 0) {
            revert NoRequestForPayout();
        }

        if (participant.requestPayoutTimestamp > block.timestamp) {
            revert NotReachedPayoutTimestamp();
        }

        uint256 attestationOwnerShare = totalDenomUnits /
            participant.denomUnits;

        participant.requestPayoutTimestamp = 0;
        address[] memory attestationChallengers;
        participant.attestationChallengers = attestationChallengers;

        totalDenomUnits -= attestationOwnerShare;
        participant.denomUnits = 0;

        worldIdToParticipant[worldId] = participant;

        payable(address(participant.walletAddress)).transfer(
            address(this).balance / attestationOwnerShare
        );
    }

    function getUnslashedParticipants() public view returns (uint256) {
        uint256 unslashedParticipants = 0;
        for (uint256 i = 0; i < participants.length; i++) {
            bytes memory worldId = participants[i];
            Participant memory participant = worldIdToParticipant[worldId];

            if (!participant.isSlashed) {
                unslashedParticipants += 1;
            }
        }

        return unslashedParticipants;
    }
}
