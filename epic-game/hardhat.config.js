require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: '0.8.17',
  networks: {
    goerli: {
      url: 'https://lively-tiniest-friday.ethereum-goerli.discover.quiknode.pro/91d3466b97c85cd6a691c39e68d48139af61503e/',
      accounts: ['73642c1dc2553ea968f07335c6a38d6f9ed738879be657bd39d2adbcb1c0095b'],
    },
  },
};