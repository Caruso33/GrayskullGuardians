// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

interface IInbox {
    function depositEth(address destAddr) external payable returns (uint256);

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

    // function to bridge the ETH to Arbitrum
    function bridgeToArbitrum() public payable {
        // Send the entire contract balance to the user's l2 withdrawal smart contract with anti cheat enabled
        // Inbox.depositEth{value: address(this).balance}(userBridgeAddress);

        uint256 maxGas = 100000000;
        uint256 gasPriceBid = 100000000;
        uint256 maxSubmissionCost = 100000000;
        bytes memory emptyBytes;
        uint256 arbTxCallValue = address(this).balance;

        Inbox.createRetryableTicket{value: arbTxCallValue}(
            userBridgeAddress,
            arbTxCallValue - maxGas - gasPriceBid - maxSubmissionCost - 1000,
            maxSubmissionCost,
            userBridgeAddress, // Refund excess fees to msg.sender
            userBridgeAddress, // Refund value to msg.sender
            maxGas,
            gasPriceBid,
            emptyBytes
        );
    }

    // implement a fallback function to receive ether
    receive() external payable {}
}
