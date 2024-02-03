import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"
import verify from "../helper-functions"
import { networkConfig, developmentChains } from "../helper-hardhat-config"
import { ethers } from "hardhat"

const deployCustomerSupport: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  // @ts-ignore
  const { getNamedAccounts, deployments, network } = hre
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()
  log("----------------------------------------------------")

  log("Testnet Network detected: Deploying Customer Support Contract...")
  const customerSupport = await deploy("CustomerSupport", {
    from: deployer,
    log: true,
    args: [],
    waitConfirmations: networkConfig[network.name].blockConfirmations || 1,
  })
  log(`✅ Customer Support Contract Deployed at ${customerSupport.address}`)
  log("")
  log("Deployed Contract address detected: Verifying Customer Support Contract...")
  if (
    (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) ||
    process.env.POLYGONSCAN_API_KEY
  ) {
    await verify(customerSupport.address, [])
  }

  const customerSupportContract = await ethers.getContractAt(
    "CustomerSupport",
    customerSupport.address
  )
  const timeLock = await ethers.getContract("TimeLock")
  const transferTx = await customerSupportContract.transferOwnership(timeLock.address)
  await transferTx.wait(1)
}

export default deployCustomerSupport
deployCustomerSupport.tags = ["all", "customerSupport"]
