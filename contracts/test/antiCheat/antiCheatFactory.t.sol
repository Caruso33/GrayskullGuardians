// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import "forge-std/Test.sol";
import {IWorldID} from "../../src/antiCheat/interfaces/IWorldID.sol";
import {AntiCheatFactory} from "../../src/antiCheat/L1/antiCheatFactory.sol";

contract AntiCheatFactoryTest is Test {
    AntiCheatFactory public antiCheatFactory;

    function setUp() public {
        address _worldId = 0x11cA3127182f7583EfC416a8771BD4d11Fae4334;
        string memory _appId = "app_staging_306e82d3dd3e7d2b42eb41105bfe4ad3";
        string memory _actionId = "onchain";

        antiCheatFactory = new AntiCheatFactory(_worldId, _appId, _actionId);
    }

    function testVerifyAndDeployAntiCheat() public {
        address signal = 0x131CF758d9EF6bcA88928442DC715c8Fdc113952;
        uint256 root = 0x03937852f985472a5f6f386557a73cdc267363a9b5d2f297d4cd70e8f3d3ba86;
        uint256 nullifierHash = 0x20ac86738fb92062b8a369a838ac4c2306a19e6aae57c1382acb00c590ea95d3;
        uint256[8] memory proof = [
            8189152779670996921519763650285954915374120909377966184431831676538110390212,
            9747066045760897521823307401876295301443857179422625933861466282712941485014,
            14373011309387155406441307361133836661327745170225317582142186151358854345977,
            8185269446127540923776458823850480768300820439489111259628083735448469707789,
            6022966142455081168665116404612892824820962223518507398905593669814497174368,
            3294701041840932994084129041646249371216845119754945758603858104138506509818,
            16217735940912823678776122819509459466704309689171453030180096838455372193427,
            5732347028832082998723219983799387458757122091903515826771035144126540102480
        ];
        address userBridgeAddress = 0xFAA2dD8849482d8f08895A34Fe5Ff25A5D98222a;

        address expectedAntiCheatAddress;

        // Call the method being tested
        expectedAntiCheatAddress = antiCheatFactory.verifyAndDeployAntiCheat(
            signal,
            root,
            nullifierHash,
            proof,
            userBridgeAddress
        );

        // Perform assertions to verify the expected behavior
        assert(expectedAntiCheatAddress != address(0));
        // assertEq(
        //     AntiCheat(expectedAntiCheatAddress).userBridgeAddress(),
        //     userBridgeAddress,
        //     "AntiCheat contract should have the correct userBridgeAddress"
        // );
    }
}
