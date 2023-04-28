// SPDX-License-Identifier: MIT
// 1. Pragma
// pragma solidity ^0.8.8;

pragma solidity ^0.8.0;

contract Greeter {
     string public _greeting = "Hello world";
     address private _owner;
     constructor ()  {
        _owner = msg.sender;
     }


function setGreeting(string calldata greeting) external {
_greeting = greeting;

}

function greet() external view returns (string memory){
    return _greeting;
}
function owner() public view returns(address){
    return _owner;
}
}