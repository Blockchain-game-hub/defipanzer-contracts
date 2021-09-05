const DefiPanzer = artifacts.require('DefiPanzer');

module.exports = function (deployer) {
    deployer.deploy(DefiPanzer, "DEFI PANZER", "DEP", 18);
}
