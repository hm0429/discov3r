//SPDX-License-Identifier: None
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Base64.sol";

contract ERC721Token is ERC721, Ownable, ERC721Enumerable {
    using Strings for uint256;

    mapping(uint256 => string) public strings;

    constructor() ERC721("String", "STR") {
    }

    function tokenImage(uint256 tokenId) 
        internal
        view
        returns (string memory)
    {

        bytes memory data = abi.encodePacked(
            '<svg xmlns="http://www.w3.org/2000/svg"><text x="50%" y="50%" text-anchor="middle" dominant-baseline="central">',
            strings[tokenId],
            '</text></svg>'
        );

        return string(
            abi.encodePacked(
                "data:image/svg+xml;base64,",
                Base64.encode(data)
            )
        );
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override
        returns (string memory)
    {
        require(_exists(tokenId));
        bytes memory data = abi.encodePacked(
            '{',
                '"name": "', strings[tokenId], '",',
                '"image": "', tokenImage(tokenId), '"',
            '}'
        );

        return string(
            abi.encodePacked(
                "data:application/json;base64,",
                Base64.encode(data)
            )
        );
    }

    function mint(string memory str)
        public
    {
        bytes32 hash = keccak256(bytes(str));
        uint256 tokenId = uint256(hash);
        require(!_exists(tokenId));
        _mint(msg.sender, tokenId);
        strings[tokenId] = str;
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
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function withdraw() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }

    receive() external payable {}
}