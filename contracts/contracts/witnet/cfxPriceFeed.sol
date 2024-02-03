// File witnet-solidity-bridge/contracts/interfaces/IWitnetPriceFeed.sol@v0.5.7

// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;
pragma experimental ABIEncoderV2;

/// @title The Witnet Price Feed basic interface.
/// @dev Guides implementation of active price feed polling contracts.
/// @author The Witnet Foundation.

interface IWitnetPriceFeed {
    /// Signals that a new price update request is being posted to the Witnet Request Board
    event PriceFeeding(address indexed from, uint256 queryId, uint256 extraFee);

    /// Estimates minimum fee amount in native currency to be paid when
    /// requesting a new price update.
    /// @dev Actual fee depends on the gas price of the `requestUpdate()` transaction.
    /// @param _gasPrice Gas price expected to be paid when calling `requestUpdate()`
    function estimateUpdateFee(
        uint256 _gasPrice
    ) external view returns (uint256);

    /// Returns result of the last valid price update request successfully solved by the Witnet oracle.
    function lastPrice() external view returns (int256);

    /// Returns the EVM-timestamp when last valid price was reported back from the Witnet oracle.
    function lastTimestamp() external view returns (uint256);

    /// Returns tuple containing last valid price and timestamp, as well as status code of latest update
    /// request that got posted to the Witnet Request Board.
    /// @return _lastPrice Last valid price reported back from the Witnet oracle.
    /// @return _lastTimestamp EVM-timestamp of the last valid price.
    /// @return _lastDrTxHash Hash of the Witnet Data Request that solved the last valid price.
    /// @return _latestUpdateStatus Status code of the latest update request.
    function lastValue()
        external
        view
        returns (
            int _lastPrice,
            uint _lastTimestamp,
            bytes32 _lastDrTxHash,
            uint _latestUpdateStatus
        );

    /// Returns identifier of the latest update request posted to the Witnet Request Board.
    function latestQueryId() external view returns (uint256);

    /// Returns hash of the Witnet Data Request that solved the latest update request.
    /// @dev Returning 0 while the latest update request remains unsolved.
    function latestUpdateDrTxHash() external view returns (bytes32);

    /// Returns error message of latest update request posted to the Witnet Request Board.
    /// @dev Returning empty string if the latest update request remains unsolved, or
    /// @dev if it was succesfully solved with no errors.
    function latestUpdateErrorMessage() external view returns (string memory);

    /// Returns status code of latest update request posted to the Witnet Request Board:
    /// @dev Status codes:
    /// @dev   - 200: update request was succesfully solved with no errors
    /// @dev   - 400: update request was solved with errors
    /// @dev   - 404: update request was not solved yet
    function latestUpdateStatus() external view returns (uint256);

    /// Returns `true` if latest update request posted to the Witnet Request Board
    /// has not been solved yet by the Witnet oracle.
    function pendingUpdate() external view returns (bool);

    /// Posts a new price update request to the Witnet Request Board. Requires payment of a fee
    /// that depends on the value of `tx.gasprice`. See `estimateUpdateFee(uint256)`.
    /// @dev If previous update request was not solved yet, calling this method again allows
    /// @dev upgrading the update fee if called with a higher `tx.gasprice` value.
    function requestUpdate() external payable;

    /// Tells whether this contract implements the interface defined by `interfaceId`.
    /// @dev See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]
    /// @dev to learn more about how these ids are created.
    function supportsInterface(bytes4) external view returns (bool);
}

// File ado-contracts/contracts/interfaces/IERC2362.sol@v1.0.0

/**
 * @dev EIP2362 Interface for pull oracles
 * https://github.com/adoracles/EIPs/blob/erc-2362/EIPS/eip-2362.md
 */
interface IERC2362 {
    /**
     * @dev Exposed function pertaining to EIP standards
     * @param _id bytes32 ID of the query
     * @return int,uint,uint returns the value, timestamp, and status code of query
     */
    function valueFor(
        bytes32 _id
    ) external view returns (int256, uint256, uint256);
}

// File witnet-solidity-bridge/contracts/interfaces/IERC165.sol@v0.5.7

/**
 * @dev Interface of the ERC165 standard, as defined in the
 * https://eips.ethereum.org/EIPS/eip-165[EIP].
 *
 * Implementers can declare support of contract interfaces, which can then be
 * queried by others ({ERC165Checker}).
 *
 * For an implementation, see {ERC165}.
 */
interface IERC165 {
    /**
     * @dev Returns true if this contract implements the interface defined by
     * `interfaceId`. See the corresponding
     * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]
     * to learn more about how these ids are created.
     *
     * This function call must use less than 30 000 gas.
     */
    function supportsInterface(bytes4 interfaceId) external view returns (bool);
}

// File witnet-solidity-bridge/contracts/interfaces/IWitnetPriceRouter.sol@v0.5.7

/// @title The Witnet Price Router basic interface.
/// @dev Guides implementation of price feeds aggregation contracts.
/// @author The Witnet Foundation.
abstract contract IWitnetPriceRouter is IERC2362 {
    /// Emitted everytime a currency pair is attached to a new price feed contract
    /// @dev See https://github.com/adoracles/ADOIPs/blob/main/adoip-0010.md
    /// @dev to learn how these ids are created.
    event CurrencyPairSet(bytes32 indexed erc2362ID, IERC165 pricefeed);

    /// Helper pure function: returns hash of the provided ERC2362-compliant currency pair caption (aka ID).
    function currencyPairId(
        string memory
    ) external pure virtual returns (bytes32);

    /// Returns the ERC-165-compliant price feed contract currently serving
    /// updates on the given currency pair.
    function getPriceFeed(
        bytes32 _erc2362id
    ) external view virtual returns (IERC165);

    /// Returns human-readable ERC2362-based caption of the currency pair being
    /// served by the given price feed contract address.
    /// @dev Should fail if the given price feed contract address is not currently
    /// @dev registered in the router.
    function getPriceFeedCaption(
        IERC165
    ) external view virtual returns (string memory);

    /// Returns human-readable caption of the ERC2362-based currency pair identifier, if known.
    function lookupERC2362ID(
        bytes32 _erc2362id
    ) external view virtual returns (string memory);

    /// Register a price feed contract that will serve updates for the given currency pair.
    /// @dev Setting zero address to a currency pair implies that it will not be served any longer.
    /// @dev Otherwise, should fail if the price feed contract does not support the `IWitnetPriceFeed` interface,
    /// @dev or if given price feed is already serving another currency pair (within this WitnetPriceRouter instance).
    function setPriceFeed(
        IERC165 _pricefeed,
        uint256 _decimals,
        string calldata _base,
        string calldata _quote
    ) external virtual;

    /// Returns list of known currency pairs IDs.
    function supportedCurrencyPairs()
        external
        view
        virtual
        returns (bytes32[] memory);

    /// Returns `true` if given pair is currently being served by a compliant price feed contract.
    function supportsCurrencyPair(
        bytes32 _erc2362id
    ) external view virtual returns (bool);

    /// Returns `true` if given price feed contract is currently serving updates to any known currency pair.
    function supportsPriceFeed(
        IERC165 _priceFeed
    ) external view virtual returns (bool);
}

// File contracts/witnet/cfxPriceFeed.sol

contract ConfluxPriceFeed {
    IWitnetPriceRouter public immutable witnetPriceRouter;
    IWitnetPriceFeed public UsdtPrice;

    //IWitnetPriceFeed public polygonUsdtPrice;

    constructor(IWitnetPriceRouter _router) {
        witnetPriceRouter = _router;
        updateUsdtPriceFeed();
    }

    /// Returns the BTC / USD price (6 decimals), ultimately provided by the Witnet oracle.
    function get_BtcUsdPrice() public view returns (int256 _price) {
        //ConfluxPriceFeed: 0x24beead4
        (_price, , ) = witnetPriceRouter.valueFor(bytes4(0x24beead4));
    }

    /// Returns the ETH / USD price (6 decimals), ultimately provided by the Witnet oracle.
    function get_EthUsdPrice() public view returns (int256 _price) {
        //ConfluxPriceFeed: 0x3d15f701
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
            bytes4(0x65784185)
        );
        if (address(_newPriceFeed) != address(0)) {
            UsdtPrice = IWitnetPriceFeed(address(_newPriceFeed));
        }
    }

    /// Returns the -usdt_6 price (6 decimals), ultimately provided by the Witnet oracle, and
    /// the timestamps at which the price was reported back from the Witnet oracle's sidechain
    /// to Conflux Alfajores.
    function getUsdtPrice()
        public
        view
        returns (int256 _lastPrice, uint256 _lastTimestamp)
    {
        (_lastPrice, _lastTimestamp, , ) = UsdtPrice.lastValue();
    }
}
