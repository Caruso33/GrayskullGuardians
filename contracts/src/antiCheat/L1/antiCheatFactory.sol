// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import {ByteHasher} from "../helpers/ByteHasher.sol";
import {IWorldID} from "../interfaces/IWorldID.sol";
import "./antiCheat.sol";

contract AntiCheatFactory {
    using ByteHasher for bytes;

    event AntiCheatCreated(
        address indexed contractAddress,
        address userAddress
    );

    /// @notice Thrown when attempting to reuse a nullifier
    error InvalidNullifier();

    /// @dev The World ID instance that will be used for verifying proofs
    IWorldID internal immutable worldId;

    /// @dev The contract's external nullifier hash
    uint256 internal immutable externalNullifier;

    /// @dev The World ID group ID (always 1)
    uint256 internal immutable groupId = 1;

    /// @dev Whether a nullifier hash has been used already. Used to guarantee an action is only performed once by a single person
    mapping(uint256 => bool) internal nullifierHashes;

    /// @param _worldId The WorldID instance that will verify the proofs
    /// @param _appId The World ID app ID
    /// @param _actionId The World ID action ID
    constructor(
        IWorldID _worldId,
        string memory _appId,
        string memory _actionId
    ) {
        worldId = _worldId;
        externalNullifier = abi
            .encodePacked(abi.encodePacked(_appId).hashToField(), _actionId)
            .hashToField();
    }

    /// @param signal An arbitrary input from the user that cannot be tampered with. In this case, it is the user's wallet address.
    /// @param root The root (returned by the IDKit widget).
    /// @param nullifierHash The nullifier hash for this proof, preventing double signaling (returned by the IDKit widget).
    /// @param proof The zero-knowledge proof that demonstrates the claimer is registered with World ID (returned by the IDKit widget).
    function verifyAndDeployAntiCheat(
        // address signal,
        // uint256 root,
        // uint256 nullifierHash,
        // uint256[8] calldata proof,
        address userBridgeAddress
    ) public returns (address) {
        // First, we make sure this person hasn't done this before
        // if (nullifierHashes[nullifierHash]) revert InvalidNullifier();

        // // We now verify the provided proof is valid and the user is verified by World ID
        // worldId.verifyProof(
        //     root,
        //     groupId, // set to "1" in the constructor
        //     abi.encodePacked(signal).hashToField(),
        //     nullifierHash,
        //     externalNullifier,
        //     proof
        // );

        // // We now record the user has done this, so they can't do it again (sybil-resistance)
        // nullifierHashes[nullifierHash] = true;

        // Finally, execute your logic here, knowing the user is verified
        AntiCheat antiCheat = new AntiCheat(userBridgeAddress);

        emit AntiCheatCreated(address(antiCheat), msg.sender);

        return (address(antiCheat));
    }
}
