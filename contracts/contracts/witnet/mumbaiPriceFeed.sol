// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

import "witnet-solidity-bridge/contracts/interfaces/IWitnetPriceRouter.sol";
import "witnet-solidity-bridge/contracts/interfaces/IWitnetPriceFeed.sol";

contract PolygonPriceFeed {
    IWitnetPriceRouter public immutable witnetPriceRouter;
    IWitnetPriceFeed public UsdtPrice;

    //IWitnetPriceFeed public polygonUsdtPrice;

    constructor(IWitnetPriceRouter _router) {
        witnetPriceRouter = _router;
        updateUsdtPriceFeed();
    }

    /// Returns the BTC / USD price (6 decimals), ultimately provided by the Witnet oracle.
    function get_BtcUsdPrice() public view returns (int256 _price) {
        (_price, , ) = witnetPriceRouter.valueFor(bytes4(0x24beead4));
    }

    /// Returns the ETH / USD price (6 decimals), ultimately provided by the Witnet oracle.
    function get_EthUsdPrice() public view returns (int256 _price) {
        (_price, , ) = witnetPriceRouter.valueFor(bytes4(0x3d15f701));
    }

    /// Returns the BTC / ETH price (6 decimals), derived from the ETH/USD and
    /// the BTC/USD pairs that were ultimately provided by the Witnet oracle.
    function get_BtcEthPrice() public view returns (int256 _price) {
        return (1000000 * get_BtcUsdPrice()) / get_EthUsdPrice();
    }

    /// Detects if the WitnetPriceRouter is now pointing to a different IWitnetPriceFeed implementation:
    function updateUsdtPriceFeed() public {
        IERC165 _newPriceFeed = witnetPriceRouter.getPriceFeed(
            bytes4(0x2063a4c9)
        );
        if (address(_newPriceFeed) != address(0)) {
            UsdtPrice = IWitnetPriceFeed(address(_newPriceFeed));
        }
    }

    /// Returns the -usdt_6 price (6 decimals), ultimately provided by the Witnet oracle, and
    /// the timestamps at which the price was reported back from the Witnet oracle's sidechain
    /// to polygon Alfajores.
    function getUsdtPrice()
        public
        view
        returns (int256 _lastPrice, uint256 _lastTimestamp)
    {
        (_lastPrice, _lastTimestamp, , ) = UsdtPrice.lastValue();
    }
}
