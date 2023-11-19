// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import {Script, console2} from "forge-std/Script.sol";

import "../src/smPool/L2/smoothiePool.sol";

contract DeployFactoryGoerliScript is Script {
    SmoothiePool smoothiePool;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        // run with arbitrum goerli RPC
        smoothiePool = new SmoothiePool(
            address(0x63b9F0DFa2a6a3604Fb301b376Dc3a5b133EDd3a), //EAS
            address(0x0) // Multisig
        );

        vm.stopBroadcast();
    }
}
