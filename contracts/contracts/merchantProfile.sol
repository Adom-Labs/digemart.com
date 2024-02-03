// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title MerchantStore
 * @dev A smart contract for an NFT merchant store business profile.
 */
contract MerchantStore is ERC721, Ownable {
    using SafeMath for uint256;

    // Base URI for metadata
    string private _baseTokenURI;

    // Event emitted when metadata URI is updated
    event BaseTokenURIUpdated(string indexed newBaseTokenURI);

    // Event emitted when an NFT is minted
    event NFTMinted(uint256 indexed tokenId, address indexed owner);

    /**
     * @dev Constructor to initialize the contract with a name, symbol, and base token URI.
     * @param _name The name of the ERC721 token.
     * @param _symbol The symbol of the ERC721 token.
     * @param baseTokenURI The base URI for metadata.
     */
    constructor(string memory _name, string memory _symbol, string memory baseTokenURI) ERC721(_name, _symbol) {
        _baseTokenURI = baseTokenURI;
    }

    /**
     * @dev Set the base URI for metadata.
     * @param newBaseTokenURI The new base URI for metadata.
     */
    function setBaseTokenURI(string memory newBaseTokenURI) external onlyOwner {
        _baseTokenURI = newBaseTokenURI;
        emit BaseTokenURIUpdated(newBaseTokenURI);
    }

    /**
     * @dev Mint a new NFT.
     * @param to The address to which the NFT will be minted.
     * @param tokenURI The URI for the metadata of the minted NFT.
     */
    function mintNFT(address to, string memory tokenURI) external onlyOwner {
        uint256 tokenId = totalSupply().add(1);
        _mint(to, tokenId);
        _setTokenURI(tokenId, tokenURI);
        emit NFTMinted(tokenId, to);
    }

    /**
     * @dev Get the base URI for metadata.
     * @return The base URI for metadata.
     */
    function baseTokenURI() public view returns (string memory) {
        return _baseTokenURI;
    }

    /**
     * @dev Override the standard token URI function to include the base URI.
     * @return The base URI for a given token ID.
     */
    function _baseURI() internal view override returns (string memory) {
        return _baseTokenURI;
    }
}
