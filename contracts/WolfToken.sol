pragma solidity <=0.6.0;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";
import "../node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "../node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol";



contract WolfToken is Ownable, ERC20, ERC20Detailed {
    using SafeMath for uint;

    event Minted(address sender, uint amount);
    event Burned(address sender, uint amount);
    
    constructor (
        string memory _name,
        string memory _symbol,
        uint8 _decimals,
        uint _initialSupply
    ) public ERC20Detailed(_name, _symbol, _decimals) {
        _mint(msg.sender, _initialSupply);
    }
}