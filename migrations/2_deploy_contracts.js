const SocialNetwork = artifacts.require("SocialNetwork");

module.exports = function(deployer) {
  deployer.deploy(SocialNetwork
    );
};

// this is a migration file. It puts our smart contract on the blockchain