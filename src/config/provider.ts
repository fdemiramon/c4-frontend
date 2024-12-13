import { ethers } from "ethers";
import { NETWORK_CONFIG } from "./networks";

// Get network from environment variable
const networkName = import.meta.env.VITE_NETWORK || "local";
export const CURRENT_NETWORK =
  NETWORK_CONFIG[networkName as keyof typeof NETWORK_CONFIG];

if (!CURRENT_NETWORK) {
  throw new Error(`Invalid network: ${networkName}`);
}

export function createProvider() {
  return new ethers.JsonRpcProvider(CURRENT_NETWORK.rpcUrl);
}
