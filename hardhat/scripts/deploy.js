const { ethers } = require("hardhat");
require("dotenv").config({ path:".env" });
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants");

async function main() {
  const whitelistContract = WHITELIST_CONTRACT_ADDRESS;
  const metadataURL = METADATA_URL;

  const cryptoDevsContract = await ethers.getContractFactory("CryptoDevs");
  const deployedCryptoDevContract = await cryptoDevsContract.deploy(metadataURL, whitelistContract);
  console.log(
    "Crypto Devs Contract address:",
    deployedCryptoDevContract.address
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
