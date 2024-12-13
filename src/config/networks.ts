export const NETWORK_CONFIG = {
  mainnet: {
    name: "Ethereum Mainnet",
    rpcUrl: "https://eth-mainnet.g.alchemy.com/v2/your-api-key",
  },
  sepolia: {
    name: "Sepolia Testnet",
    rpcUrl: "https://eth-sepolia.g.alchemy.com/v2/your-api-key",
  },
  local: {
    name: "Local anvil",
    rpcUrl: "http://localhost:8545",
  },
  dev: {
    name: "Remote anvil",
    rpcUrl: "https://anvil.idm.io",
  },
} as const;
