import { Board } from "./Board.tsx";
import { useWeb3 } from "../providers/Web3Provider";

export function Boards() {
  const { isWalletConnected, isNetworkSupported } = useWeb3();

  if (!isWalletConnected) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center p-8 glass-effect rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Connect Your Wallet</h2>
          <p className="text-indigo-200">
            Please connect your wallet to view and interact with the game boards.
          </p>
        </div>
      </div>
    );
  }

  if (!isNetworkSupported) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center p-8 glass-effect rounded-xl border-2 border-red-500/50">
          <h2 className="text-2xl font-bold mb-4">Unsupported Network</h2>
          <p className="text-indigo-200">
            Please switch to either Sepolia or Remote Anvil network to continue.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 9 }, (_, i) => (
          <Board key={i} boardIndex={i} />
        ))}
      </div>
    </div>
  );
}