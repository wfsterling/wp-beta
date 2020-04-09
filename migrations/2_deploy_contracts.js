var Jobs = artifacts.require("./Jobs.sol");

const NAME = "WolfPack Token";
const SYMBOL = "WPT";
const DECIMALS = 2;
const INITIAL_SUPPLY = 20000;

module.exports = function(deployer) {
  deployer.deploy(Jobs, NAME, SYMBOL, DECIMALS, INITIAL_SUPPLY);
};