//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IDigemartProduct {
    function safeMint(address to, string calldata uri) external;

    function burn(uint256 tokenId) external;
}
