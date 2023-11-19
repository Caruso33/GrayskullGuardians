// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import {EAS} from "../../eas/EAS.sol";
import {NO_EXPIRATION_TIME, EMPTY_UID} from "../../eas/Common.sol";
import {IEAS, AttestationRequest, AttestationRequestData} from "../../eas/IEAS.sol";

interface IInbox {
    function depositEth() external payable returns (uint256);

    function createRetryableTicket(
        address destAddr,
        uint256 arbTxCallValue,
        uint256 maxSubmissionCost,
        address submissionRefundAddress,
        address valueRefundAddress,
        uint256 maxGas,
        uint256 gasPriceBid,
        bytes calldata data
    ) external payable returns (uint256);
}

interface IL2SmoothiePool {
    function addToPool(
        bytes memory worldId,
        address withdrawalAddress
    ) external payable;
}

contract SmoothiePool {
    EAS public immutable eas;
    IInbox public constant inbox =
        IInbox(0x6BEbC4925716945D46F0Ec336D5C2564F419682C);

    uint256 private _totalDenomUnits;
    uint private _totalParticipants;
    uint public currentEpoch;
    address public daoMultiSigAddress;
    address public l2SmoothiePool;

    uint256 public payoutFreezePeriod = 7 days;
    uint256 public payoutEthThreshold = 0.1 ether;

    struct Participant {
        bytes worldId;
        address withdrawalAddress; // the noCheat contract address in this case
        address walletAddress; // the wallet address of the validator
        uint256 joinedEpoch;
        //uint256 denomUnits;
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
        address walletAddress,
        bytes32 attestationUid
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

    function updateL2Target(address _l2Target) public {
        l2SmoothiePool = _l2Target;
    }

    function onEpoch() external {
        // uint256 unslashedParticipants = 0;

        // for (uint256 i = 0; i < participants.length; i++) {
        //     bytes memory worldId = participants[i];
        //     Participant memory participant = worldIdToParticipant[worldId];

        //     if (!participant.isSlashed) {
        //         participant.denomUnits += 1;
        //         worldIdToParticipant[worldId] = participant;

        //         unslashedParticipants += 1;
        //     }
        // }
        _totalDenomUnits += _totalParticipants;
        currentEpoch++;
    }

    function addToPool(
        bytes memory worldId,
        address withdrawalAddress
    ) external returns (uint) {
        Participant memory participant = worldIdToParticipant[worldId];

        if (participant.withdrawalAddress != address(0)) {
            revert AlreadyInPool();
        }

        address[] memory attestationChallengers;
        worldIdToParticipant[worldId] = Participant(
            worldId,
            withdrawalAddress,
            msg.sender,
            currentEpoch,
            attestationChallengers,
            false,
            0
        );
        participants.push(worldId);
        _totalParticipants++;

        uint256 maxGas = 64915;
        uint256 gasPriceBid = 100000000;
        uint256 maxSubmissionCost = 24886;
        uint deposit = 9088100024886;
        bytes memory data = abi.encodeWithSelector(
            IL2SmoothiePool.addToPool.selector,
            worldId,
            withdrawalAddress
        );
        uint callValue = address(this).balance - deposit;
        uint256 ticketID = inbox.createRetryableTicket{
            value: address(this).balance
        }(
            l2SmoothiePool,
            callValue,
            maxSubmissionCost,
            l2SmoothiePool,
            l2SmoothiePool,
            maxGas,
            gasPriceBid,
            data
        );

        emit AddedToPool(worldId, withdrawalAddress);
        return (ticketID);
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

        uint participantDenomUnits = participant.joinedEpoch - currentEpoch;
        uint256 participantShare = _totalDenomUnits / participantDenomUnits;

        if (address(this).balance / participantShare < payoutEthThreshold) {
            revert EthPayoutThresholdNotReached();
        }

        participant.requestPayoutTimestamp = block.timestamp;
        worldIdToParticipant[worldId] = participant;

        bytes memory data = abi.encode(
            worldId,
            participant.withdrawalAddress,
            participant.walletAddress
        );

        bytes memory schema = bytes(
            "string worldId,address withdrawalAddress,address walletAddress"
        );

        bytes32 attestationUid = eas.attest(
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
            participant.walletAddress,
            attestationUid
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

        //uint256 unslashedParticipants = getUnslashedParticipants();

        attestationOwnerParticipant.attestationChallengers[
            attestationOwnerParticipant.attestationChallengers.length
        ] = challengerParticipant.walletAddress;

        if (
            attestationOwnerParticipant.attestationChallengers.length >
            (_totalParticipants / 2)
        ) {
            uint attestationOwnerParticipantDenomUnits = attestationOwnerParticipant
                    .joinedEpoch - currentEpoch;
            uint256 attestationOwnerShare = _totalDenomUnits /
                attestationOwnerParticipantDenomUnits;

            attestationOwnerParticipant.isSlashed = true;
            _totalDenomUnits - attestationOwnerParticipantDenomUnits;
            attestationOwnerParticipant.joinedEpoch = currentEpoch;

            payable(address(0x0)).transfer(
                address(this).balance / attestationOwnerShare
            ); // burn share
        }
    }

    function payoutRewardsAfterInitialization(bytes memory worldId) external {
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

        uint participantDenomUnits = participant.joinedEpoch - currentEpoch;
        participant.joinedEpoch == currentEpoch;
        uint256 attestationOwnerShare = _totalDenomUnits /
            participantDenomUnits;

        participant.requestPayoutTimestamp = 0;
        address[] memory attestationChallengers;
        participant.attestationChallengers = attestationChallengers;

        _totalDenomUnits -= attestationOwnerShare;
        participant.joinedEpoch = currentEpoch;

        worldIdToParticipant[worldId] = participant;

        payable(address(participant.walletAddress)).transfer(
            address(this).balance / attestationOwnerShare
        );
    }

    // function getUnslashedParticipants() public view returns (uint256) {
    //     uint256 unslashedParticipants = 0;
    //     for (uint256 i = 0; i < participants.length; i++) {
    //         bytes memory worldId = participants[i];
    //         Participant memory participant = worldIdToParticipant[worldId];

    //         if (!participant.isSlashed) {
    //             unslashedParticipants += 1;
    //         }
    //     }

    //     return unslashedParticipants;
    // }

    // implement a fallback function to receive ether
    receive() external payable {}
}
