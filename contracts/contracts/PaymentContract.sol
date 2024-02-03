// SPDX-License-Identifier: MIT
pragma experimental ABIEncoderV2;
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./TransferHelper.sol";
import "./interfaces/IUniswapV2Router02.sol";

/**
 * @title PaymentContract
 * @dev Smart contract for handling payments using various tokens and interacting with Uniswap.
 */
contract PaymentContract is Ownable {
    uint public slippage;
    address public router;
    address public stableCoin;

    // Struct to store order details
    struct OrderDetail {
        string order_id;
        uint256 order_amount;
        address user;
    }

    struct Vendor {
        string name;
        mapping(string => uint256) balance;
    }

    // Mapping to store order details by user address
    mapping(address => OrderDetail[]) public order_details;

    // Mapping to store order details by order ID
    mapping(string => OrderDetail) public order;

    mapping(string => Vendor) public vendors;

    // Events
    event PaymentSuccessful(uint amount, address token, address receiver);
    event SlippageUpdated(uint previousSlippage, uint newSlippage);
    event RouterUpdated(address previousRouter, address newRouter);
    event StableCoinUpdated(address previousStableCoin, address newStableCoin);
    event TradeSuccessful(
        uint256 amount,
        string from,
        address traderAddress,
        string transactionId,
        string tradeId,
        string stableCoinSymbol
    );

    /**
     * @dev Fallback function to accept ETH transactions.
     */
    receive() external payable {}

    /**
     * @dev Fallback function to accept ETH transactions.
     */
    fallback() external payable {}

    /**
     * @dev Constructor to initialize the contract with a Uniswap router and stable coin address.
     * @param _router Address of the Uniswap router.
     * @param _stableCoin Address of the stable coin to be used for payments.
     */
    constructor(address _router, address _stableCoin) {
        stableCoin = _stableCoin;
        router = _router;
    }

    /**
     * @dev Function to handle payment for an order.
     * @param _amount Total cost of the order.
     * @param _token Token to use for payment.
     * @param _orderId Order unique identifier.
     */
    function payForOrder(
        uint _amount,
        address _token,
        string memory _orderId
    ) public payable {
        address[] memory _path;
        _path = new address[](2);
        _path[0] = _token;
        _path[1] = stableCoin;
        uint256 _tokenAmount;

        uint256 _checkedTokenAmount = _token == address(0)
            ? msg.value
            : _amount;

        OrderDetail memory _order_details = OrderDetail({
            order_id: _orderId,
            order_amount: _checkedTokenAmount,
            user: msg.sender
        });

        if (_token != stableCoin && _token != address(0)) {
            // Get the amount of token to swap
            _tokenAmount = requiredTokenAmount(_checkedTokenAmount, _token);

            TransferHelper.safeTransferFrom(
                _token,
                msg.sender,
                address(this),
                _tokenAmount
            );

            // Swap to stableCoin
            _swap(_tokenAmount, _checkedTokenAmount, _path, address(this));
        } else if (_token == stableCoin) {
            TransferHelper.safeTransferFrom(
                _token,
                msg.sender,
                address(this),
                _amount
            );
        } else {
            _path[0] = IUniswapV2Router02(router).WETH();
            _tokenAmount = requiredTokenAmount(
                _checkedTokenAmount,
                IUniswapV2Router02(router).WETH()
            );
            require(msg.value >= _tokenAmount, "Insufficient amount!");
            IUniswapV2Router02(router).swapETHForExactTokens{
                value: _tokenAmount
            }(_checkedTokenAmount, _path, address(this), block.timestamp);
        }

        order[_orderId] = _order_details;
        order_details[msg.sender].push(_order_details);
        emit PaymentSuccessful(_checkedTokenAmount, msg.sender, address(this));
    }

    /**
     * @dev Function to calculate the required token amount for a given payment amount.
     * @param _amount Payment amount in stable coin.
     * @param _token Token used for payment.
     * @return _tokenAmount Required token amount.
     */
    function requiredTokenAmount(
        uint _amount,
        address _token
    ) public view returns (uint _tokenAmount) {
        address[] memory _path;
        _path = new address[](2);
        _path[0] = _token;
        _path[1] = stableCoin;
        if (_token == address(0)) {
            _path[0] = IUniswapV2Router02(router).WETH();
        }
        uint256[] memory _tokenAmounts = IUniswapV2Router02(router)
            .getAmountsIn(_amount, _path);
        _tokenAmount = _tokenAmounts[0] + ((_tokenAmounts[0] * slippage) / 100);
    }

    /**
     * @dev Function to update the stable coin address.
     * @param _stableCoin New stable coin address.
     */
    function updateStableCoin(address _stableCoin) public onlyOwner {
        address prevStableCoin = stableCoin;
        stableCoin = _stableCoin;
        emit StableCoinUpdated(prevStableCoin, stableCoin);
    }

    /**
     * @dev Function to update the Uniswap router address.
     * @param _router New Uniswap router address.
     */
    function updateRouter(address _router) public onlyOwner {
        address prevRouter = router;
        router = _router;
        emit RouterUpdated(prevRouter, router);
    }

    /**
     * @dev Function to update the slippage percentage.
     * @param _slippage New slippage percentage.
     */
    function updateSlippage(uint _slippage) public onlyOwner {
        uint prevSlippage = slippage;
        slippage = _slippage;
        emit SlippageUpdated(prevSlippage, slippage);
    }

    /**
     * @dev Function to retrieve ETH from the contract to a specified address.
     * @param _amount Amount of ETH to retrieve.
     * @param _to Receiver address.
     */
    function retrieveEth(uint256 _amount, address _to) external onlyOwner {
        uint256 _ethAmount = _amount * 1e18;
        (bool success, ) = payable(_to).call{value: _ethAmount}("");
        require(success, "Unsuccessful call");
    }

    /**
     * @dev Function to retrieve tokens from the contract to a specified address.
     * @param _token Token address.
     * @param _to Receiver address.
     * @param _amount Amount of tokens to retrieve.
     */
    function retrieveToken(
        address _token,
        address _to,
        uint256 _amount
    ) external onlyOwner {
        TransferHelper.safeTransferFrom(_token, address(this), _to, _amount);
    }

    /**
     * @dev Function to send tokens to a trader's address.
     * @param _amount Amount of tokens to send.
     * @param _from Vendor's name.
     * @param _traderAddress Trader's address to receive the tokens.
     * @param _transactionId Unique identifier for the transaction.
     * @param _tradeId Unique identifier for the trade.
     * @param _stableCoinSymbol Symbol of the stable coin being sent.
     */
    function sendToken(
        uint256 _amount,
        string memory _from,
        address _traderAddress,
        string memory _transactionId,
        string memory _tradeId,
        string memory _stableCoinSymbol
    ) public onlyOwner {
        require(
            _amount <= vendors[_from].balance[_stableCoinSymbol],
            "Not enough balance!"
        );
        vendors[_from].balance[_stableCoinSymbol] -= _amount;
        TransferHelper.safeTransfer(stableCoin, _traderAddress, _amount);
        emit TradeSuccessful(
            _amount,
            _from,
            _traderAddress,
            _transactionId,
            _tradeId,
            _stableCoinSymbol
        );
    }

    /**
     * @dev Function to get the balance of a vendor in a specific stable coin.
     * @param _vendorId Identifier of the vendor.
     * @param _stableCoinSymbol Symbol of the stable coin.
     * @return uint256 Balance of the vendor in the specified stable coin.
     */
    function getVendorBalance(
        string memory _vendorId,
        string memory _stableCoinSymbol
    ) public view returns (uint256) {
        return vendors[_vendorId].balance[_stableCoinSymbol];
    }

    /**
     * @dev Function to get user orders.
     * @param _user User address.
     * @return OrderDetail[] Array of user orders.
     */
    function getUserOrders(
        address _user
    ) public view returns (OrderDetail[] memory) {
        return order_details[_user];
    }

    /**
     * @dev Function to get order details by order ID.
     * @param _orderId Order ID.
     * @return OrderDetail Order details.
     */
    function getOrder(
        string memory _orderId
    ) public view returns (OrderDetail memory) {
        return order[_orderId];
    }

    // Internal functions

    /**
     * @dev Internal function to execute the token swap on Uniswap.
     * @param _tokenAmount Amount of tokens to swap.
     * @param _amount Amount of stable coin needed.
     * @param _path Path for the token swap.
     * @param _receiver Address to receive the swapped tokens.
     * @return _amountOut Amount of tokens received.
     */
    function _swap(
        uint _tokenAmount,
        uint _amount,
        address[] memory _path,
        address _receiver
    ) internal returns (uint[] memory _amountOut) {
        // Approve the router to swap token.
        TransferHelper.safeApprove(_path[0], router, _tokenAmount);
        _amountOut = IUniswapV2Router02(router).swapTokensForExactTokens(
            _amount,
            _tokenAmount,
            _path,
            _receiver,
            block.timestamp
        );
    }
}
