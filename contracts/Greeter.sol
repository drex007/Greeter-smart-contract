// SPDX-License-Identifier: MIT
// 1. Pragma
// pragma solidity ^0.8.8;

pragma solidity >=0.7.0;
import "@openzeppelin/contracts/access/Ownable.sol";

contract Greeter is Ownable{ // Allow our greeter contract to inherit from OWnable contract from openzeeplin
     string public _greeting = "Hello world";
     address private _owner;
     constructor ()  {
        _owner = msg.sender;
     }
    // modifier onlyOwner(){
    //     require(
    //         msg.sender == _owner,
    //         "Ownable: caller is not the owner"
    //     );_;
    // }

function setGreeting(string calldata greeting) external { // added a modifier to be called befpre
_greeting = greeting;

}

function greet() external view returns (string memory){
    return _greeting;
}
// function owner() public view returns(address){
//     return _owner;
// }
}