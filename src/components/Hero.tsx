import { Trophy, Coins, Users } from "lucide-react";
import { CURRENT_NETWORK } from "../providers/Web3Provider";

export function Hero() {
  return (
    <section className="hero-gradient text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-6">Welcome to Connect4 Arena</h2>
          <p className="text-xl text-indigo-200 max-w-2xl mx-auto">
            Enter the blockchain-powered gaming arena where strategy meets
            rewards. Compete, win, and earn in this next-generation Connect4
            experience!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="glass-effect rounded-xl p-6 text-center">
            <div className="bg-indigo-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy size={32} className="text-yellow-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Win Rewards</h3>
            <p className="text-indigo-200">
              Compete for ETH prizes in every game. Winners share the jackpot!
            </p>
          </div>

          <div className="glass-effect rounded-xl p-6 text-center">
            <div className="bg-indigo-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Coins size={32} className="text-green-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Dynamic Stakes</h3>
            <p className="text-indigo-200">
              Choose your preferred stake level across multiple game boards
            </p>
          </div>

          <div className="glass-effect rounded-xl p-6 text-center">
            <div className="bg-indigo-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users size={32} className="text-blue-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Global Competition</h3>
            <p className="text-indigo-200">
              Play against opponents from around the world
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-indigo-200">
            Connected to {CURRENT_NETWORK.name}
          </p>
        </div>
      </div>
    </section>
  );
}
