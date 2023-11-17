// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "./antiCheat.sol";

contract AntiCheatFactory {
    event AntiCheatCreated(address indexed contractAddress, address userAddress);

    function deployAntiCheatL2(
        address userWalletAddress
    ) public returns (address) {
        // deploy the anti cheat contract on Arbitrum L2
        AntiCheat antiCheat = new AntiCheat(userWalletAddress);

        emit AntiCheatCreated(address(antiCheat), msg.sender);

        return (address(antiCheat));
    }
}
