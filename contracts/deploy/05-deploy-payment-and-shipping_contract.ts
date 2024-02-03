import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import verify from "../helper-functions";
import { networkConfig, developmentChains } from "../helper-hardhat-config";
import { ethers } from "hardhat";

const deployPaymentContract: DeployFunction = async function (
  hre: HardhatRuntimeEnvironment
) {
  // @ts-ignore
  const { getNamedAccounts, deployments, network } = hre;
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  log("----------------------------------------------------");
  log("Testnet Network detected: Deploying Payment Contract...");
  const paymentContract = await deploy("PaymentContract", {
    from: deployer,
    log: true,
    args: [
      networkConfig[network.name].ROUTER,
      networkConfig[network.name].TUSD,
    ],
    waitConfirmations: networkConfig[network.name].blockConfirmations || 1,
  });
  log(`✅ Payment Contract deployed at ${paymentContract.address}`);
  log("");
  log("Deployed Contract address detected: Verifying Payment Contract...");
  if (
    (!developmentChains.includes(network.name) &&
      process.env.ETHERSCAN_API_KEY) ||
    process.env.POLYGONSCAN_API_KEY
  ) {
    await verify(paymentContract.address, [
      networkConfig[network.name].ROUTER,
      networkConfig[network.name].TUSD,
    ]);
  }
  log("");
  log("----------------------------------------------------");
  log("Testnet Network detected: Deploying Shipping and Tracking...");
  const shippingContract = await deploy("ShippingContract", {
    from: deployer,
    log: true,
    args: [paymentContract.address],
    waitConfirmations: networkConfig[network.name].blockConfirmations || 1,
  });
  log(
    `✅ Shipping and Tracking Contract Deployed at ${shippingContract.address}`
  );
  log("");
  log(
    "Deployed Contract address detected: Verifying Shipping and Tracking Contract..."
  );
  if (
    (!developmentChains.includes(network.name) &&
      process.env.ETHERSCAN_API_KEY) ||
    process.env.POLYGONSCAN_API_KEY
  ) {
    await verify(shippingContract.address, [paymentContract.address]);
  }
};

export default deployPaymentContract;
deployPaymentContract.tags = ["all", "paymentContract", "shippingContract"];
