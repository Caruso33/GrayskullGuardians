// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

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

interface IAntiCheatL2 {
    function setAddress(address user) external payable;
}

contract AntiCheatL1{
    address public l2Target;
    IInbox public inbox;

    event RetryableTicketCreated(uint256 indexed ticketId);

    constructor(
        // string memory _greeting,
        address _l2Target,
        address _inbox //0x6BEbC4925716945D46F0Ec336D5C2564F419682C
    ) {
        l2Target = _l2Target;
        inbox = IInbox(_inbox);
    }

    function updateL2Target(address _l2Target) public {
        l2Target = _l2Target;
    }

    function setGreetingInL2(
        address user
    ) public payable returns (uint256) {
        uint256 maxGas = 64915;
        uint256 gasPriceBid = 100000000;
        uint256 maxSubmissionCost = 24886;
        uint deposit = 9088100024886;
        bytes memory data = abi.encodeWithSelector(IAntiCheatL2.setAddress.selector, user);
        uint callValue = address(this).balance - deposit;
        uint256 ticketID = inbox.createRetryableTicket{ value: address(this).balance }(
            l2Target,
            callValue,
            maxSubmissionCost,
            l2Target,
            l2Target,
            maxGas,
            gasPriceBid,
            data
        );

        emit RetryableTicketCreated(ticketID);
        return ticketID;
    }

    //function getMoney() public payable {}

    receive() external payable {}
}
