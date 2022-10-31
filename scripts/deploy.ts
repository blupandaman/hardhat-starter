import { ethers, network } from "hardhat";
import { developmentChains, networkConfig } from "../helper-hardhat-config";
import { verify } from "../utils/verify";

// Replace [ contract ] with contract name
// Replace [ Contract ] with contract name

const main = async () => {
  const [deployer] = await ethers.getSigners();

  // Deploy contract
  const contract = await (await ethers.getContractFactory("Contract")).deploy(); 

  await contract.deployed(); 

  console.log(`Contract deployed to ${contract.address}`);
  
  // Verify contract if not on dev chain
  if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
    await contract.deployTransaction.wait(networkConfig[network.name].blockConfirmations);

    await verify(contract.address, []);
  }
} 

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
