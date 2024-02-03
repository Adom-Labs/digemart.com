// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/**
 * @title CustomerSupport
 * @dev A simplified customer support contract with ticketing and agent management.
 */
contract CustomerSupport {
    enum TicketStatus {
        Open,
        InProgress,
        Resolved,
        Closed
    }

    struct MerchantResponse {
        uint256 id;
        uint256 relatedTicketId;
        string response;
        uint256 votesFor;
        uint256 votesAgainst;
        bool isExecuted;
    }

    struct Ticket {
        uint256 id;
        address user;
        string issue;
        TicketStatus status;
        address assignedAgent;
        uint256 creationTime;
        uint256 lastUpdatedTime;
        uint256 startTime;
        uint256 resolutionTime;
        bool isRated;
        uint256 rating;
        string feedback;
        address merchant;
        string merchantResponse;
    }

    struct User {
        string name;
        string email;
    }

    mapping(uint256 => Ticket) public tickets;
    mapping(address => User) public users;
    mapping(address => bool) public agents;
    mapping(address => bool) public merchants;
    uint256 public ticketCounter;
    uint256 public userCounter;

    modifier onlyAgent() {
        require(agents[msg.sender], "Only agents can perform this action");
        _;
    }

    modifier onlyMerchant() {
        require(
            merchants[msg.sender],
            "Only merchants can perform this action"
        );
        _;
    }

    event TicketCreated(uint256 ticketId);
    event TicketAssigned(uint256 ticketId, address agentId);
    event TicketStatusChanged(uint256 ticketId, TicketStatus status);
    event TicketRated(uint256 ticketId, uint256 rating);
    event MerchantResponded(uint256 ticketId, string response);

    /**
     * @dev Constructor initializes the contract.
     */
    constructor() {
        addUser(msg.sender, "Admin", "admin@example.com");
    }

    /**
     * @dev Add a user to the system.
     * @param _address User's Ethereum address.
     * @param _name User's name.
     * @param _email User's email.
     */
    function addUser(
        address _address,
        string memory _name,
        string memory _email
    ) public {
        users[_address] = User(_name, _email);
        userCounter++;
    }

    /**
     * @dev Add an agent to the system.
     * @param agentAddress Agent's Ethereum address.
     */
    function addAgent(address agentAddress) external {
        agents[agentAddress] = true;
    }

    function createTicket(string memory _issue) public {
        uint256 newTicketId = ticketCounter;
        tickets[newTicketId] = Ticket(
            newTicketId,
            msg.sender,
            _issue,
            TicketStatus.Open,
            address(0),
            block.timestamp,
            block.timestamp,
            0,
            0,
            false,
            0,
            "",
            address(0),
            ""
        );
        emit TicketCreated(newTicketId);
        ticketCounter++;
    }

    /**
     * @dev Assign a ticket to an agent.
     * @param _ticketId ID of the ticket to be assigned.
     * @param _agent Address of the agent to be assigned.
     */
    function assignTicket(uint256 _ticketId, address _agent) external {
        require(_ticketId < ticketCounter, "Invalid ticket ID");
        tickets[_ticketId].assignedAgent = _agent;
        tickets[_ticketId].status = TicketStatus.InProgress;
        tickets[_ticketId].startTime = block.timestamp;
        emit TicketAssigned(_ticketId, _agent);
        emit TicketStatusChanged(_ticketId, TicketStatus.InProgress);
    }

    /**
     * @dev Resolve a ticket by an assigned agent.
     * @param _ticketId ID of the ticket to be resolved.
     */
    function resolveTicket(uint256 _ticketId) external onlyAgent {
        require(
            tickets[_ticketId].assignedAgent == msg.sender,
            "Only assigned agent can resolve"
        );
        require(
            tickets[_ticketId].status == TicketStatus.InProgress,
            "Ticket not in progress"
        );
        tickets[_ticketId].status = TicketStatus.Resolved;
    }

    /**
     * @dev Close a resolved ticket.
     * @param _ticketId ID of the ticket to be closed.
     */
    function closeTicket(uint256 _ticketId) external {
        require(
            tickets[_ticketId].status == TicketStatus.Resolved,
            "Ticket not resolved"
        );
        tickets[_ticketId].status = TicketStatus.Closed;
    }

    /**
     * @dev Change the status of a ticket.
     * @param _ticketId ID of the ticket to be modified.
     * @param _status New status to be set.
     */
    function changeTicketStatus(
        uint256 _ticketId,
        TicketStatus _status
    ) external {
        require(_ticketId < ticketCounter, "Invalid ticket ID");
        tickets[_ticketId].status = _status;
        tickets[_ticketId].lastUpdatedTime = block.timestamp;
        if (
            _status == TicketStatus.Resolved || _status == TicketStatus.Closed
        ) {
            tickets[_ticketId].resolutionTime = block.timestamp;
        }
        emit TicketStatusChanged(_ticketId, _status);
    }

    /**
     * @dev Rate a closed ticket and provide feedback.
     * @param _ticketId ID of the ticket to be rated.
     * @param _rating Rating value between 1 and 5.
     * @param _feedback Feedback provided by the user.
     */
    function rateTicket(
        uint256 _ticketId,
        uint256 _rating,
        string memory _feedback
    ) external {
        require(_ticketId < ticketCounter, "Invalid ticket ID");
        require(
            tickets[_ticketId].status == TicketStatus.Closed,
            "Ticket must be closed"
        );
        require(!tickets[_ticketId].isRated, "Ticket already rated");

        require(_rating >= 1 && _rating <= 5, "Invalid rating value");
        tickets[_ticketId].rating = _rating;
        tickets[_ticketId].feedback = _feedback;
        tickets[_ticketId].isRated = true;

        emit TicketRated(_ticketId, _rating);
    }

    /**
     * @dev Allow a merchant to respond to a ticket.
     * @param _ticketId ID of the ticket to be responded to.
     * @param _response Merchant's response to the ticket.
     */
    function respondToTicket(
        uint256 _ticketId,
        string memory _response
    ) external onlyMerchant {
        require(_ticketId < ticketCounter, "Invalid ticket ID");
        require(
            tickets[_ticketId].status != TicketStatus.Closed,
            "Ticket is closed"
        );

        tickets[_ticketId].merchant = msg.sender;
        tickets[_ticketId].merchantResponse = _response;

        emit MerchantResponded(_ticketId, _response);
    }

    function getTicketRating(
        uint256 _ticketId
    ) external view returns (uint256, string memory) {
        require(_ticketId < ticketCounter, "Invalid ticket ID");
        require(
            tickets[_ticketId].status == TicketStatus.Closed,
            "Ticket must be closed"
        );
        require(tickets[_ticketId].isRated, "Ticket not rated yet");

        return (tickets[_ticketId].rating, tickets[_ticketId].feedback);
    }

    function getTicketTimeInfo(
        uint256 _ticketId
    ) external view returns (uint256, uint256) {
        require(_ticketId < ticketCounter, "Invalid ticket ID");
        return (
            tickets[_ticketId].startTime,
            tickets[_ticketId].resolutionTime
        );
    }
}
