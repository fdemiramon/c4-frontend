import { RainbowKitProvider, getDefaultConfig } from '@rainbow-me/rainbowkit';
import { WagmiProvider, useConfig } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@rainbow-me/rainbowkit/styles.css';
import { SUPPORTED_NETWORKS } from '../config/networks';
import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const config = getDefaultConfig({
  appName: 'Connect4 Arena',
  projectId: 'connect4-arena',
  chains: Object.values(SUPPORTED_NETWORKS),
  ssr: false,
});

const queryClient = new QueryClient();

interface Web3ContextType {
  isWalletConnected: boolean;
  isNetworkSupported: boolean;
}

const Web3Context = createContext<Web3ContextType>({
  isWalletConnected: false,
  isNetworkSupported: false,
});

export const useWeb3 = () => useContext(Web3Context);

function Web3StateProvider({ children }: { children: React.ReactNode }) {
  const wagmiConfig = useConfig();
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [isNetworkSupported, setIsNetworkSupported] = useState(false);

  useEffect(() => {
    const unsubscribe = wagmiConfig.subscribe(
      (state) => state.status === 'connected',
      (isConnected) => {
        setIsWalletConnected(isConnected);
      }
    );

    return () => unsubscribe();
  }, [wagmiConfig]);

  useEffect(() => {
    const unsubscribe = wagmiConfig.subscribe(
      (state) => state.chainId,
      (chainId) => {
        const isSupported = Object.values(SUPPORTED_NETWORKS).some(
          (network) => network.id === chainId
        );
        setIsNetworkSupported(isSupported);

        if (chainId && !isSupported) {
          toast.error(
            'Unsupported network detected. Please switch to Sepolia or Remote Anvil.'
          );
        }
      }
    );

    return () => unsubscribe();
  }, [wagmiConfig]);

  return (
    <Web3Context.Provider value={{ isWalletConnected, isNetworkSupported }}>
      {children}
    </Web3Context.Provider>
  );
}

export function Web3Provider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <Web3StateProvider>{children}</Web3StateProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}