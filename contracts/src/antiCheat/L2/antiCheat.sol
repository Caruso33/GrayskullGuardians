// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import {SmoothiePool} from "../../smPool/smoothiePool.sol";

contract AntiCheat {
    // The address of the user who is allowed to withdraw
    SmoothiePool public immutable pool;
    bytes public worldId;
    address public immutable validatorWalletAddress;

    constructor(
        address _pool,
        bytes memory _worldId,
        address _validatorWalletAddress
    ) {
        worldId = _worldId;
        // Set the user's withdrawal address
        validatorWalletAddress = _validatorWalletAddress;

        pool = SmoothiePool(_pool);
        pool.addToPool(worldId, _validatorWalletAddress);
    }

    // function to bridge the ETH to Arbitrum
    function initiateWithdraw() public {
        // implement anti cheat logic here

        pool.initiateRewardsCreateAttestation(worldId);
        // Send the entire contract balance to the user's l2 withdrawal smart contract with anti cheat enabled
        // payable(userWalletAddress).transfer(address(this).balance);
    }

    // implement a fallback function to receive ether
    receive() external payable {}
}
