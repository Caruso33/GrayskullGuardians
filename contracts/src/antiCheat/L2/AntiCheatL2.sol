// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


contract AntiCheatL2 {
    address public l1Target;
    mapping(address => uint) public startTime;
    uint160 internal constant OFFSET = uint160(0x1111000000000000000000000000000000001111);

    event L2ToL1TxCreated(uint256 indexed withdrawalId);

    constructor(address _l1Target) {
        l1Target = _l1Target;
    }

    function updateL1Target(address _l1Target) public {
        l1Target = _l1Target;
    }

    function setAddress(address user) public payable {
        require(
            msg.sender == applyL1ToL2Alias(l1Target),
            "Greeting only updateable by L1"
        );
        if(startTime[user] == 0) startTime[user] = block.timestamp;
    }

    /// @notice Utility function that converts the address in the L1 that submitted a tx to
    /// the inbox to the msg.sender viewed in the L2
    /// @param l1Address the address in the L1 that triggered the tx to L2
    /// @return l2Address L2 address as viewed in msg.sender
    function applyL1ToL2Alias(address l1Address) internal pure returns (address l2Address) {
        unchecked {
            l2Address = address(uint160(l1Address) + OFFSET);
        }
    }

    function getStartTime(address user) public view returns(uint){
        return startTime[user];
    }
}
