import { Chain } from "wagmi";

export const SUPPORTED_NETWORKS = {
  anvil: {
    id: 31337,
    name: "Remote Anvil",
    network: "anvil",
    nativeCurrency: {
      decimals: 18,
      name: "Ethereum",
      symbol: "ETH",
    },
    rpcUrls: {
      default: { http: ["https://anvil.idm.io:443"] },
      public: { http: ["https://anvil.idm.io:443"] },
    },
  } as const satisfies Chain,
  sepolia: {
    id: 11155111,
    name: "Sepolia",
    network: "sepolia",
    nativeCurrency: {
      decimals: 18,
      name: "Sepolia Ether",
      symbol: "ETH",
    },
    rpcUrls: {
      default: { http: ["https://rpc.sepolia.org"] },
      public: { http: ["https://rpc.sepolia.org"] },
    },
  } as const satisfies Chain,
} as const;

export type SupportedNetwork = keyof typeof SUPPORTED_NETWORKS;