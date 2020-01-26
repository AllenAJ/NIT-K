require('babel-register');
require('babel-polyfill');

module.exports = {
  networks: {
    development: {
      host: "https://testnetv3.matic.network",
      port: 8545,
      network_id: "*" // Match any network id
    },
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
