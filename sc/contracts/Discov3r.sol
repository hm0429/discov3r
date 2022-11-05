//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "./ITreasure.sol";
import "./TreasureBox.sol";
import "./IMidpoint.sol";

contract Discov3r is Ownable, ITreasure {
    using ECDSA for bytes32;

    address public signer = 0xa24CBE6d7a590E61e0271621f7A998308E469136;
    mapping(address => bool) public verified;

    // TreasureBox contract
    TreasureBox public treasureBox;

    // Midpoint
    address constant startpointAddress = 0x47a4905D4C2Eabd58abBDFEcBaeB07F1A29b660c;
    uint64 constant midpointID = 386;

    modifier onlyVerifiedAccount()
    {
        require(verified[msg.sender]);
        _;
    }

    constructor() {
    }

    // signature by discov3r signer is needed to create an account
    function createAccount(bytes memory signature)
        external
    {
        bytes32 hash = keccak256(abi.encodePacked(msg.sender)).toEthSignedMessageHash();
        require(signer == hash.recover(signature));
        verified[msg.sender] = true;
    }

    function setTreasureBoxContract(address _address) 
        external
        onlyOwner
    {
        treasureBox = TreasureBox(payable(_address));
    }

    function createTreasure(
        string memory name,
        string memory latitude,
        string memory longitude,
        bytes32 keyHash
    )
        public
        payable
        onlyVerifiedAccount
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
        string memory uuid
    ) 
        external
    {
        require(treasureBox.exists(treasureId));
        require(treasureBox.ownerOf(treasureId) == msg.sender);
        bytes memory args = abi.encodePacked(uuid, bytes1(0x00));
        IMidpoint(startpointAddress).callMidpoint(midpointID, args);
    }
}
