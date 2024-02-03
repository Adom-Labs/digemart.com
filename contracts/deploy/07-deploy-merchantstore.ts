import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { verify } from "../helper-functions";
import {
  networkConfig,
  developmentChains,
  NAME,
  SYMBOL,
  MERCHANTSTORE,
} from "../helper-hardhat-config";
import { ethers } from "hardhat";

const deployMerchantStore: DeployFunction = async function (
  hre: HardhatRuntimeEnvironment
) {
  // @ts-ignore
  const { getNamedAccounts, deployments, network } = hre;
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  log("Testnet Network detected: Deploying MerchantStore...");
  const merchantStore = await deploy("MerchantStore", {
    from: deployer,
    log: true,
    args: [NAME, SYMBOL, MERCHANTSTORE],
    waitConfirmations: networkConfig[network.name].blockConfirmations || 1,
  });
  log(`✅ MerchantStore Contract deployed at ${merchantStore.address}`);
  log("");
  log(
    "Deployed Contract address detected: Verifying MerchantStore Contract..."
  );
  if (
    (!developmentChains.includes(hre.network.name) &&
      process.env.ETHERSCAN_API_KEY) ||
    process.env.POLYGONSCAN_API_KEY
  ) {
    await verify(merchantStore.address, [NAME, SYMBOL, MERCHANTSTORE]);
  }
};

deployMerchantStore.tags = ["all", "merchantStore"];

export default deployMerchantStore;
