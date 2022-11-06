//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

interface ITreasure {

    enum TreasureType {
        Default,
        ERC20,
        ERC721
    }

    struct Treasure {
        address creator;
        string name;
        string image;
        string latitude;
        string longitude;
        bytes32 keyHash;
        TreasureType treasureType;
        address tokenAddress;       // ERC20, ERC721
        uint256 amount;             // Default, ERC20
        uint256 tokenId;            // ERC721
        bool isDiscovered;
    }

}