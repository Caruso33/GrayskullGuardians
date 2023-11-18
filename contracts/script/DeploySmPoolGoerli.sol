// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import {Script, console2} from "forge-std/Script.sol";

import "../src/smPool/L1/smoothiePool.sol";

contract DeployFactoryGoerliScript is Script {
    SmoothiePool smoothiePool;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        // run with goerli RPC
         smoothiePool = new SmoothiePool(
            address(0x0),
            address(0x0)
        );

        vm.stopBroadcast();
    }
}
