// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const { ethers } = require("hardhat");
const hre = require("hardhat");


async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());



  // We get the contract to deploy
  const NFT = await hre.ethers.getContractFactory("EarnestroiNFT");
  const nft = await NFT.deploy(); 

  /// DEPLOYING MARKETPLACE CONTRACT
  const MarketplaceNFT= await hre.ethers.getContractFactory("EarnestroiMarketPlace");
  const Mnft = await MarketplaceNFT.deploy(10); 

  // await NFT.deployed();

  console.log("NFT Contract deployed to:", nft.address);


  console.log("MarketPlace contract deploy  to:",Mnft.address)


  saveFrontendFiles(nft , "EarnestroiNFT");
  saveFrontendFiles(Mnft , "EarnestroiMarketPlace");
}



function saveFrontendFiles(contract, name) {
  const fs = require("fs");
  const contractsDir = __dirname + "/contractsData";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + `/${name}-address.json`,
    JSON.stringify({ address: contract.address }, undefined, 2)
  );

  const contractArtifact = artifacts.readArtifactSync(name);

  fs.writeFileSync(
    contractsDir + `/${name}.json`,
    JSON.stringify(contractArtifact, null, 2)
  );
}




// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
