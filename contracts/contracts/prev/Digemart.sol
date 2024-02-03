//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./interfaces/IDigemartProduct.sol";
import "./interfaces/IPaymentContract.sol";
import "./TransferHelper.sol";

contract DigeMart {
    //using Converter for uint256;

    //STATE VARIABLES
    uint256 public signUpFee;
    uint256 private purchaseId;
    uint256 private productId;
    address public DigemartProduct;
    address public owner;
    address public paymentContract;

    //MAPPING
    mapping(address => Merchant) private merchants;
    mapping(address => User) private users;

    Order[] private orders;
    Product[] private products;
    Merchant[] private allMerchants;
    User[] private allUsers;

    //EVENTS
    event newMerchant(string name, address wallet);
    event newUser(string name, address wallet);
    event newOrder(
        uint256 purchaseId,
        address buyer,
        uint256 amount,
        uint256[] productIds
    );
    event newProduct(uint256 productId, string url, uint256 price);
    event newSignUpFee(uint256 signUpFee);
    event newOwner(address owner);
    event newDigemartProduct(address DigemartProduct);
    event cancelledOrder(uint256 purchaseId);
    event completedOrder(uint256 purchaseId);
    event Withdraw(address merchant, uint256 amount);

    //MODIFIERS
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    modifier onlyMerchant() {
        require(
            bytes(merchants[msg.sender].name).length > 0,
            "Only merchants can call this function"
        );
        _;
    }

    modifier onlyUser() {
        require(
            bytes(users[msg.sender].name).length > 0,
            "Only registered users can call this function"
        );
        _;
    }

    modifier notEmptyString(string memory _string) {
        require(bytes(_string).length != 0, "Function params cannot be empty");
        _;
    }

    modifier notAddressZero(address _address) {
        require(_address != address(0), "Address cannot be address 0");
        _;
    }

    modifier isAvailable(Product memory _product) {
        require(_product.isBought == false, "This product has been bought");
        _;
    }

    modifier orderNotCompleted(uint256 _purchaseId) {
        require(
            !(orders[_purchaseId].isCompleted &&
                orders[_purchaseId].isCancelled),
            "Order already completed"
        );
        _;
    }

    //STRUCTS
    struct Merchant {
        string name;
        address wallet;
        uint256[] products;
        uint256[] orders;
    }

    struct Product {
        uint256 productId;
        string url;
        uint256 price;
        address merchant;
        string category;
        string description;
        bool isBought;
    }

    struct Order {
        uint256 purchaseId;
        uint256[] productIds;
        address[] merchants;
        address buyer;
        uint256 totalPrice;
        bool isCompleted;
        bool isCancelled;
    }

    struct User {
        string name;
        address wallet;
        uint256[] orders;
    }

    //CONSTRUCTOR
    constructor(address _paymentContract) {
        owner = msg.sender;
        paymentContract = _paymentContract;
    }

    //FUNCTIONS

    /*
     *   Registering as a Seller by Paying a fixed fee of 5 ETH for using this platform.
     *   @string memory _name => Input name used as a Merchant
     */
    function registerMerchant(
        string memory _name
    ) public payable notEmptyString(_name) {
        require(
            bytes(merchants[msg.sender].name).length == 0,
            "You are Already Registered"
        );
        require(msg.value <= signUpFee, "Insufficent funds to pay signUp fee");

        (bool success, ) = payable(owner).call{value: msg.value}("");
        require(success, "Transfer failed");

        merchants[msg.sender].name = _name;
        merchants[msg.sender].wallet = msg.sender;
        allMerchants.push(merchants[msg.sender]);

        emit newMerchant(_name, msg.sender);
    }

    /*
     *   Register User Account
     *   @string memory _name =>  name
     */
    function registerUser(string memory _name) public notEmptyString(_name) {
        users[msg.sender].name = _name;
        users[msg.sender].wallet = msg.sender;
        allUsers.push(users[msg.sender]);

        emit newUser(_name, msg.sender);
    }

    /*
     *  Listing of Product with details
     *   @string memory _url => specify the productId
     *   @string memory _category => Category/Type of Product
     *   @string memory _description => What is the product for.
     *   @uint _price => Price of Product
     */
    function listProduct(
        string memory _url,
        string memory _category,
        string memory _description,
        uint256 _price
    )
        public
        onlyMerchant
        notEmptyString(_url)
        notEmptyString(_category)
        notEmptyString(_description)
    {
        Product memory _product = Product(
            productId,
            _url,
            _price,
            msg.sender,
            _category,
            _description,
            false
        );

        products.push(_product);
        merchants[msg.sender].products.push(productId);

        emit newProduct(productId, _url, _price);
        productId++;
    }

    /*
     *   Buying a Product
     *   @string memory _productIds => specify productId
     *   @address _token => address of the ERC20 token user wants to pay with, should be address 0 if paying with ether
     */
    function buyProduct(
        uint256[] memory _productIds,
        string memory uri,
        address _token
    ) public payable onlyUser {
        uint256 _totalPrice;
        address[] memory _merchants = new address[](_productIds.length);
        for (uint256 i = 0; i < _productIds.length; i++) {
            uint256 _productId = _productIds[i];
            uint256 _price = products[_productId].price;
            address _merchant = products[_productId].merchant;

            _merchants[i] = _merchant;
            _totalPrice += _price;

            require(_price > 0, "Invalid product");
            require(
                products[_productId].isBought == false,
                "Product already bought"
            );
            merchants[_merchant].orders.push(_productId);
            products[_productId].isBought = true;
        }

        Order memory _order = Order({
            purchaseId: purchaseId,
            productIds: _productIds,
            merchants: _merchants,
            buyer: msg.sender,
            totalPrice: _totalPrice,
            isCompleted: false,
            isCancelled: false
        });

        users[msg.sender].orders.push(purchaseId);
        orders.push(_order);

        // User needs to allow the payment contract to spend their token

        IPaymentContract(paymentContract).makePayment(
            _totalPrice,
            _token,
            address(this),
            msg.sender
        );

        if (address(IDigemartProduct(DigemartProduct)) != address(0)) {
            IDigemartProduct(DigemartProduct).safeMint(
                msg.sender,
                //We still need a mechanism for a proper uri
                //purchaseId
                uri
            );
        }

        purchaseId++;
        emit newOrder(purchaseId, msg.sender, _totalPrice, _productIds);
    }

    //SETTERS

    /*
     *   Set Digemart Product address
     *   @address _digemartProduct =>  address
     */
    function setDigemartProduct(
        address _digemartProduct
    ) public onlyOwner notAddressZero(_digemartProduct) {
        DigemartProduct = _digemartProduct;
        emit newDigemartProduct(_digemartProduct);
    }

    /*
     *   SetMerchant Signup fee
     *   @uint _signUpFee => uint
     */
    function setSignUpFee(uint256 _signUpFee) public onlyOwner {
        signUpFee = _signUpFee;
        emit newSignUpFee(_signUpFee);
    }

    /*
     *   Setting Merchant Signup fee
     *   @uint _signUpFee => uint
     */
    function setOwner(address _owner) public onlyOwner notAddressZero(_owner) {
        owner = _owner;
        emit newOwner(_owner);
    }

    // GETTERS

    function getProducts() public view returns (Product[] memory) {
        return products;
    }

    function getProduct(
        uint256 _productId
    ) public view returns (Product memory) {
        return products[_productId];
    }

    function getMerchants() public view returns (Merchant[] memory) {
        return allMerchants;
    }

    function getMerchant(
        address _merchant
    ) public view returns (Merchant memory) {
        return merchants[_merchant];
    }

    function getUsers() public view returns (User[] memory) {
        return allUsers;
    }

    function getUser(address _user) public view returns (User memory) {
        return users[_user];
    }

    function getMerchantProducts(
        address _merchant
    ) public view returns (Product[] memory) {
        uint256 _totalProducts = merchants[_merchant].products.length;
        Product[] memory _products = new Product[](_totalProducts);
        for (uint256 i = 0; i < _totalProducts; i++) {
            uint256 _purchaseId = merchants[_merchant].products[i];
            _products[i] = products[_purchaseId];
        }
        return _products;
    }

    function getMerchantOrders(
        address _merchant
    ) public view returns (Order[] memory) {
        uint256 _totalOrders = merchants[_merchant].orders.length;
        Order[] memory _merchantOrders = new Order[](_totalOrders);
        for (uint256 i = 0; i < _totalOrders; i++) {
            uint256 _purchaseId = merchants[_merchant].orders[i];
            _merchantOrders[i] = orders[_purchaseId];
        }
        return _merchantOrders;
    }

    function getUserOrders(address _user) public view returns (Order[] memory) {
        uint256 _totalOrders = users[_user].orders.length;
        Order[] memory _userOrders = new Order[](_totalOrders);
        for (uint256 i = 0; i < _totalOrders; i++) {
            uint256 _purchaseId = users[_user].orders[i];
            _userOrders[i] = orders[_purchaseId];
        }
        return _userOrders;
    }

    function getOrder(uint256 _purchaseId) public view returns (Order memory) {
        return orders[_purchaseId];
    }
}
