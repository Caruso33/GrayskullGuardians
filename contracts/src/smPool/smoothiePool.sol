// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import {EAS} from "../eas/EAS.sol";
import {NO_EXPIRATION_TIME, EMPTY_UID} from "../eas/Common.sol";
import {IEAS, AttestationRequest, AttestationRequestData} from "../eas/IEAS.sol";

contract SmoothiePool {
    EAS public immutable eas;

    address daoMultiSigAddress;
    uint256 totalDenomUnits;

    uint256 payoutFreezePeriod = 7 days;
    uint256 payoutEthThreshold = 0.1 ether;

    struct Participant {
        bytes worldId;
        address validatorWithdrawalAddress; // the noCheat Contract address in this case
        address validatorWalletAddress; // the wallet address of the validator
        uint256 joinedTimestamp;
        uint256 denomUnits;
        address[] attestationChallengers;
        bool isSlashed;
        uint256 requestPayoutTimestamp;
    }

    mapping(bytes => Participant) public worldIdToParticipant;
    bytes[] public participants;

    event AddedToPool(bytes worldId, address validatorWithdrawalAddress);
    event RewardAttestationCreated(
        bytes worldId,
        address validatorWithdrawalAddress,
        address validatorWalletAddress
    );

    error AlreadyInPool();
    error ParticipantIsSlashed();
    error AlreadyRequestingPayout();
    error ParticipantNotFound();
    error AlreadyRequestingChallenged();
    error NoRequestForPayout();
    error NotReachedPayoutTimestamp();
    error EthPayoutThreshouldNotReached();

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
        address validatorWithdrawalAddress
    ) external {
        Participant memory participant = worldIdToParticipant[worldId];

        if (participant.validatorWithdrawalAddress != address(0)) {
            revert AlreadyInPool();
        }

        address[] memory attestationChallengers;
        worldIdToParticipant[worldId] = Participant(
            worldId,
            validatorWithdrawalAddress,
            msg.sender,
            block.timestamp,
            0,
            attestationChallengers,
            false,
            0
        );
        participants.push(worldId);

        emit AddedToPool(worldId, validatorWithdrawalAddress);
    }

    function initiateRewardsCreateAttestation(bytes memory worldId) external {
        Participant memory participant = worldIdToParticipant[worldId];

        if (participant.validatorWithdrawalAddress == address(0)) {
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
            revert EthPayoutThreshouldNotReached();
        }

        participant.requestPayoutTimestamp = block.timestamp;
        worldIdToParticipant[worldId] = participant;

        bytes memory data = abi.encode(
            worldId,
            participant.validatorWithdrawalAddress,
            participant.validatorWalletAddress,
            block.timestamp
        );

        bytes memory schema = bytes(
            "bytes worldId,address validatorWithdrawalAddress,address validatorWalletAddress,uint64 timestamp"
        );

        eas.attest(
            AttestationRequest({
                schema: bytes32(schema),
                data: AttestationRequestData({
                    recipient: address(0), // No recipient
                    expirationTime: NO_EXPIRATION_TIME, // No expiration time
                    revocable: true,
                    refUID: EMPTY_UID, // No references UI
                    data: data, // Encode a single uint256 as a parameter to the schema
                    value: 0 // No value/ETH
                })
            })
        );

        emit RewardAttestationCreated(
            worldId,
            participant.validatorWithdrawalAddress,
            participant.validatorWalletAddress
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

        if (challengerParticipant.validatorWalletAddress == address(0)) {
            revert ParticipantNotFound();
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
                challengerParticipant.validatorWalletAddress
            ) {
                revert AlreadyRequestingChallenged();
            }
        }

        // TODO: Authentiverify the challenger
        attestationOwnerParticipant.attestationChallengers[
            attestationOwnerParticipant.attestationChallengers.length
        ] = challengerParticipant.validatorWalletAddress;

        uint256 unslashedParticipants = getUnslashedParticipants();

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

    function payoutParticipant(bytes memory worldId) internal {
        Participant memory participant = worldIdToParticipant[worldId];

        if (participant.validatorWithdrawalAddress == address(0)) {
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

        payable(address(participant.validatorWalletAddress)).transfer(
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
