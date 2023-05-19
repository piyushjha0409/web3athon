require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const MAINNET_URL = process.env.XINFIN_NETWORK_URL
const TESTNET_URL = process.env.APOTHEM_NETWORK_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY

module.exports = {
  solidity: "0.8.18",
  networks:{
    xinfin:{
     url: MAINNET_URL,
    accounts: [PRIVATE_KEY]
    },
    apothem:{
      url: TESTNET_URL,
      accounts: [PRIVATE_KEY]
    }
  }
};
