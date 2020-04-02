pragma solidity >=0.4.21 <0.6.0;

import './WolfToken.sol';
import './Migrations.sol';

contract Jobs is WolfToken {
    struct Employer {
        // uint index;
        address account;
        uint[] gigs;
        bytes32 metadata;
        uint balance;
    }

    struct Worker {
        // uint index;
        address account;
        uint[] gigs;
        bytes32 metadata;
        uint balance;
    }

    struct Gig {
        uint idx;
        uint hourlyWage;
        bytes32 metadata;
        State state;
        address employer;
        address workerApproved;
        address[] workersApplied;
        uint start;
        uint stop;
        uint maxDuration; // in hours
    }

    enum State { Open, Progress, Done }

    mapping(address => Employer) public employers;
    mapping(address => Worker) public workers;
    Gig[] public gigs;

    event NewEmployer(address account, bytes32 metadata);
    event NewWorker(address account, bytes32 metadata);
    event NewGig(address employer, bytes32 metadata);

    event WorkerApplied(address worker, uint idx);
    event WorkerApproved(address worker, uint idx);
    event WorkDone(address worker, uint idx);

    // event MintedWolfToken(address account, uint amount);
    event RedeemedWolfToken(address account, uint amount);

    constructor (
        string memory _name,
        string memory _symbol,
        uint8 _decimals,
        uint _initialSupply
    ) public WolfToken(_name, _symbol, _decimals, _initialSupply) {

    }

    modifier onlyWorker() {
        require(workers[msg.sender].account != address(0));
        _;
    }

    modifier onlyEmployer() {
        require(employers[msg.sender].account != address(0));
        _;
    }

    function registerEmployer(bytes32 metadata, address employer) onlyOwner public returns (address) {
        Employer memory e;
        e.account = employer;
        e.metadata = metadata;
        employers[employer] = e;
        _mint(employer, 10);

        emit NewEmployer(msg.sender, metadata);
        return employers[employer].account;
    }

    function getEmployer(address employer) public returns (address) {
        // require(employers[employer].account != address(0));
        return employers[employer].account;
    }

    function registerWorker(bytes32 metadata, address worker) onlyOwner public {
        Worker memory w;
        w.account = worker;
        w.metadata = metadata;
        workers[worker] = w;

        emit NewWorker(worker, metadata);
    }

    function getWorker(address worker) public returns (bytes32) {
        require(employers[worker].account != address(0));
        return employers[worker].metadata;
    }

    function registerGig(uint wage, bytes32 metadata, uint maxDuration) onlyEmployer public {
        Gig memory g;
        uint idx = gigs.length;

        g.hourlyWage = wage;
        g.metadata = metadata;
        g.state = State.Open;
        g.employer = msg.sender;
        g.idx = idx;
        g.maxDuration = maxDuration;
        gigs.push(g);


        employers[msg.sender].gigs.push(idx);

        emit NewGig(msg.sender, metadata);
    }

    function approveWorker(uint gigId, address worker) onlyEmployer public {
        gigs[gigId].workerApproved = worker;
        gigs[gigId].state = State.Progress;
        gigs[gigId].start = now * 1 hours;

        emit WorkerApproved(worker, gigId);
    }

    function applyOnGig(uint gigId) onlyWorker public {
        gigs[gigId].workersApplied.push(msg.sender);
        workers[msg.sender].gigs.push(gigId);

        emit WorkerApplied(msg.sender, gigId);
    }

    function stopWork(uint gigId) public {
        address employer = gigs[gigId].employer;
        address worker = gigs[gigId].workerApproved;

        require(msg.sender == employer || msg.sender == worker);
        gigs[gigId].state = State.Done;
        gigs[gigId].stop = now * 1 hours;
        uint duration = gigs[gigId].stop - gigs[gigId].start;
        uint expectedHours = gigs[gigId].maxDuration;

        _transfer(employer, worker, duration * gigs[gigId].hourlyWage);
        workers[worker].balance = workers[worker].balance + duration * gigs[gigId].hourlyWage;

        emit WorkDone(worker, gigId);
    }

    function redeemToken(uint amount) onlyWorker public {
        require(workers[msg.sender].balance >= amount, "Insufficient Funds");
       
        _burn(msg.sender, amount);
        workers[msg.sender].balance = workers[msg.sender].balance - amount;
        emit RedeemedWolfToken(msg.sender, amount);
    }

}