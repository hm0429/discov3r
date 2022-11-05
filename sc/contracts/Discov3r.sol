//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./ITreasure.sol";
import "./TreasureBox.sol";
import "./IMidpoint.sol";

contract Discov3r is Ownable, ITreasure {
    // TreasureBox contract
    TreasureBox public treasureBox;

    // Midpoint
    address constant startpointAddress = 0x47a4905D4C2Eabd58abBDFEcBaeB07F1A29b660c;
    uint64 constant midpointID = 386;

    constructor() {
    }

    function setTreasureBoxContract(address _address) 
        external
        onlyOwner
    {
        treasureBox = TreasureBox(payable(_address));
    }

    function createDefaultTreasure(
        string memory name,
        string memory latitude,
        string memory longitude,
        bytes32 keyHash
    )
        public
        payable 
    {
         Treasure memory treasure = Treasure(
            msg.sender,             // address creator;
            name,                   // string name;
            latitude,               // string latitude;
            longitude,              // string longitude;
            keyHash,                // bytes32 keyHash;
            TreasureType.Default,   // TreasureType treasureType;
            address(0x0),           // address tokenAddress;
            msg.value,              // uint256 amount;
            0,                      // uint256 tokenId;
            false                   // bool isDiscovered;
        );
        treasureBox.mint(treasure);
    }

    function discover(uint256 treasureId, string memory key) 
        external
    {
        require(treasureBox.exists(treasureId));
        Treasure memory treasure = treasureBox.getTreasure(treasureId);
        require(!treasure.isDiscovered);
        require(treasure.keyHash == keccak256(bytes(key)));

        treasureBox.didDiscover(treasureId);
        
        if (treasure.treasureType == TreasureType.Default) {
            payable(msg.sender).transfer(treasure.amount);
        }

        treasureBox.transferFrom(address(this), msg.sender, treasureId);
    }

    function unlockTreasureBox(
        uint256 treasureId, 
        string memory uuid,
        string memory signature
    ) 
        external
    {
        require(treasureBox.exists(treasureId));
        require(treasureBox.ownerOf(treasureId) == msg.sender);
        bytes memory args = abi.encodePacked(signature, bytes1(0x00), uuid, bytes1(0x00));
        IMidpoint(startpointAddress).callMidpoint(midpointID, args);
    }
}
