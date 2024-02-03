//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

interface IPaymentContract {
    event PaymentSuccessful(uint amount, address token, address receiver);
    event SlippageUpdated(uint previousSlippage, uint newSlippage);
    event RouterUpdated(address previousRouter, address newRouter);
    event stableCoinUpdated(address previousStableCoin, address newStableCoin);

    function slippage() external view returns (uint);
    function router() external view returns (address);
    function stableCoin() external view returns (address);
    function makePayment(uint _amount, address _token, address _receiver, address _payer) payable external;
    function requiredTokenAmount(uint _amount, address _token) external view returns(uint _tokenAmount);
    function updateStableCoin(address _stableCoin) external;
    function updateRouter(address _router) external;
    function updateSlippage(uint _slippage) external;
}