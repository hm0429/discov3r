//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "./ITreasure.sol";

contract TreasureBox is Ownable, ERC721, ERC721Enumerable, AccessControl, ITreasure {

    // should be Discov3r contract
    bytes32 public constant MAIN_CONTRACT_ROLE = keccak256("MAIN_CONTRACT_ROLE");
    
    mapping(uint256 => Treasure) public treasures;

    constructor(address main) ERC721("TreasureBox", "TBX") {
        _setupRole(MAIN_CONTRACT_ROLE, main);
    }

    function mint(Treasure memory treasure)
        external
    {
        require(hasRole(MAIN_CONTRACT_ROLE, msg.sender), "Caller is not a Discov3r");
        uint256 tokenId = totalSupply();
        _mint(msg.sender, tokenId);
        treasures[tokenId] = treasure;
    }

    function getTreasure(uint256 tokenId) 
        external
        view
        returns(Treasure memory)
    {
        return treasures[tokenId];
    }

    function didDiscover(uint256 tokenId) 
        external
    {
        require(hasRole(MAIN_CONTRACT_ROLE, msg.sender), "Caller is not a Discov3r");
        treasures[tokenId].isDiscovered = true;
    }

    function exists(uint256 tokenId) 
        external
        view
        returns(bool)
    {
        return _exists(tokenId);
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function withdraw()
        external
        onlyOwner 
    {
        payable(owner()).transfer(address(this).balance);
    }

    receive() external payable {}
}