// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import {Script, console2} from "forge-std/Script.sol";

import "../src/antiCheat/L1/antiCheatFactory.sol";

contract DeployFactoryGoerliScript is Script {
    AntiCheatFactory antiCheatFactory;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        // run with goerli RPC
        antiCheatFactory = new AntiCheatFactory(
            address(0x11cA3127182f7583EfC416a8771BD4d11Fae4334),
            "app_staging_5a3767eb5edf300e988f7d1252ee2f08",
            "verfiy"
        );

        vm.stopBroadcast();
    }
}
