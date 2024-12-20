import { type Chain } from "viem";
const anvil = {
  id: 31337,
  name: "Remote Anvil",
  nativeCurrency: {
    decimals: 18,
    name: "Ethereum",
    symbol: "ETH",
  },
  rpcUrls: {
    default: { http: ["https://anvil.idm.io:443"] },
  },
} as const satisfies Chain;

const sepolia = {
  id: 11155111,
  name: "Sepolia",
  nativeCurrency: {
    decimals: 18,
    name: "Sepolia Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    default: { http: ["https://rpc.sepolia.org"] },
  },
} as const satisfies Chain;

const chains = [anvil, sepolia];

export default chains;
