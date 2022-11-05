//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

interface IMidpoint {
    function callMidpoint(uint64 midpointId, bytes calldata _data) external returns(uint256 requestId);
}
