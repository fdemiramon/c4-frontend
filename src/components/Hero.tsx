import { CURRENT_NETWORK } from "./../config/provider";

export function Hero() {
  return (
    <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to Connect4 Arena</h2>
        <p className="text-xl mb-8">
          Enter the Connect4 Arena and compete for the jackpot by putting your
          strategic skills to the test!
        </p>
        <div className="max-w-2xl mx-auto p-6 bg-white/10 rounded-lg backdrop-blur-sm">
          <p className="text-lg">
            Join the game by adding ETH to the jackpot. Win the jackpot if one
            of your discs is part of the winning sequence.
          </p>

          <p className="text-sm text-gray-600 mt-1">
            Connected to {CURRENT_NETWORK.name}
          </p>
        </div>
      </div>
    </section>
  );
}
