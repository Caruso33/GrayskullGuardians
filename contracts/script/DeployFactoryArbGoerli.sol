// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import {Script, console2} from "forge-std/Script.sol";

import "../src/antiCheat/L2/antiCheatFactory.sol";

contract DeployFactoryGoerliScript is Script {
    AntiCheatFactory antiCheatFactory;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        // run with arbitrum goerli RPC
        antiCheatFactory = new AntiCheatFactory();

        vm.stopBroadcast();
    }
}
