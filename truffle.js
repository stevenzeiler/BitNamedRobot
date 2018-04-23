module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: process.env.GANACHE_HOST || "127.0.0.1",
      port: process.env.GANACHE_PORT || 8545,
      network_id: "*" // Match any network id
    }
  }
};
