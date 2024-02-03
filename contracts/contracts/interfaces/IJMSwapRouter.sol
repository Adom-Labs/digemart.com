// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

interface IJMSwapRouter {
    function factory() external pure returns (address);
    function WBASE() external pure returns (address);

    function swapTokensForExactTokens(
        uint amountOut,
        uint amountInMax,
        address[] calldata path,
        bytes32[] memory taxes,
        address to,
        uint deadline
    ) external returns (uint[] memory amounts);
    function swapBaseForExactTokens(uint amountOut, address[] calldata path, bytes32[] memory taxes, address to, uint deadline)
        external
        payable
        returns (uint[] memory amounts);
    function getAmountsIn(uint amountOut, address[] calldata path) external view returns (uint[] memory amounts);
}