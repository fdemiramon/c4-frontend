import { http, createConfig } from "wagmi";
import { chains } from "./chains";

// Create a wagmi config
export const config = createConfig({
  chains: chains,
  transports: {
    [chains.anvil.id]: http(chains.anvil.rpcUrls.default.http[0]),
    [chains.sepolia.id]: http(chains.sepolia.rpcUrls.default.http[0]),
  },
  ssr: false,
});
