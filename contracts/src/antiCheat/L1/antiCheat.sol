// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

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

contract AntiCheat {
    // The address of the Arbitrum inbox contract
    IInbox public constant Inbox =
        IInbox(0x6BEbC4925716945D46F0Ec336D5C2564F419682C);

    // The address of the user who is allowed to withdraw
    address public userBridgeAddress;

    constructor(address _userBridgeAddress) {
        // Set the user's withdrawal address
        userBridgeAddress = _userBridgeAddress;
    }

    // function to bridge the ETH to Arbitrum #1
    function bridgeToArbitrum() public payable {
        // Send the entire contract balance to the user's l2 withdrawal smart contract with anti cheat enabled
        Inbox.depositEth{value: address(this).balance}();
    }

    // function to bridge the ETH to Arbitrum #2
    function bringToArbitrumAntiCheat(
        uint256 maxSubmissionCost,
        uint256 maxGas,
        uint256 gasPriceBid,
        uint256 arbTxCallValue
    ) public payable {
        // Send the entire contract balance to the user's l2 withdrawal smart contract with anti cheat enabled
        Inbox.createRetryableTicket{value: address(this).balance}(
            userBridgeAddress,
            arbTxCallValue,
            maxSubmissionCost,
            userBridgeAddress,
            userBridgeAddress,
            maxGas,
            gasPriceBid,
            new bytes(0)
        );
    }

    // implement a fallback function to receive ether
    receive() external payable {}
}
