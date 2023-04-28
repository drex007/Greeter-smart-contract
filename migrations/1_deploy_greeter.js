const GreeterContract = artifacts.require('Greeter');

module.exports = function (deployer) {
    console.log('migrating contracts ===========>');
    deployer.deploy(GreeterContract);
}