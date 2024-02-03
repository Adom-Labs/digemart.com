export interface NetworkConfigItem {
  //ethUsdPriceFeed?: string
  blockConfirmations?: number
  name?: string
  priceFeedRouter?: string
  ROUTER?: string
  TUSD?: string
}

export interface NetworkConfigInfo {
  [key: string]: NetworkConfigItem
}

export const networkConfig: NetworkConfigInfo = {
  localhost: {},
  hardhat: {},
  sepolia: {
    blockConfirmations: 6,
  },
  goerli: {
    blockConfirmations: 6,
  },
  optimism_Goerli: {
    blockConfirmations: 6,
  },
  avalanche_Fuji: {
    blockConfirmations: 6,
  },
  //71
  conflux_eSpace: {
    blockConfirmations: 6,
    name: "conflux_eSpace",
    priceFeedRouter: "0x49C0BCce51a8B28f92d008394F06d5B259657F33",
    ROUTER: "0x873789aaf553fd0b4252d0d2b72c6331c47aff2e",
    TUSD: "0x7d682e65efc5c13bf4e394b8f376c48e6bae0355",
  },
  //80001
  mumbai: {
    blockConfirmations: 6,
    // name: "mumbai",
    // priceFeedRouter: "0x6d5544ca5b35bf2e7a78ace4E7B8d191fe5C9FAb",
    // ROUTER: "0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff",
    // TUSD: "0x84E4F0745B7CFbd19aE0Ec6935388b3c6B2227a6",
  },
}

// const mumbai = {
//   MUMBAI_ROUTER: "0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff",
// }

const confluxEspace = {
  ROUTER: "0x873789aaf553fd0b4252d0d2b72c6331c47aff2e",
  ETH: "0xcd71270f82f319e0498ff98af8269c3f0d547c65",
  USDT: "0x7d682e65efc5c13bf4e394b8f376c48e6bae0355",
  ZERO: "0x0000000000000000000000000000000000000000",
  currentPaymentContract: "0xf67eD31beb8c1F9b7b477fA6889e1d9790B5A069",
}

export const developmentChains: string[] = ["hardhat", "localhost"]
export const proposalsFile: string = "proposals.json"

// Governor Values
export const QUORUM_PERCENTAGE: number = 4 // Need 4% of voters to pass
export const MIN_DELAY: number = 3600 // 1 hour - after a vote passes, you have 1 hour before you can enact
export const VOTING_PERIOD: number = 5 // blocks
export const VOTING_DELAY: number = 1 // 1 Block - How many blocks till a proposal vote becomes active
export const ADDRESS_ZERO: string = "0x0000000000000000000000000000000000000000"

export const NEW_STORE_VALUE: number = 77
export const FUNC: string = "store"
export const PROPOSAL_DESCRIPTION: string = "Proposal #1 77 in the Box!"

export const ROUTER: string = "0x554472a2720E5E7D5D3C817529aBA05EEd5F82D8" //Mumbai = 0x70499c328e1e2a3c41108bd3730f6670a44595d1
export const LINK: string = "0x0b9d5D9136855f6FEc3c0993feE6E9CE8a297846" //Mumbai = 0x326C977E6efc84E512bB9C30f76E30c160eD06FB
export const NAME: string = "Merchant Store"
export const SYMBOL: string = "MNTST";
export const MERCHANTSTORE: string = "ipfs://merchantstore.xyz"