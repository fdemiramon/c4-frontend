import { GamepadIcon, Trophy, Coins } from "lucide-react";
import { GameEvent } from "../../types/contract";
import { Game } from "../../types/contract";
interface BoardHeaderProps {
  gameState: Game | null;
  gameEvent: GameEvent | null;
}

export function BoardHeader({ gameState, gameEvent }: BoardHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-indigo-700 to-indigo-600 p-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold flex items-center gap-2 text-white">
          <GamepadIcon className="w-5 h-5" />
          Board #{gameState?.boardIndex}
        </h2>
        <span className="text-white font-medium">
          Game #{gameState?.gameIndex ?? "N/A"}
        </span>
      </div>
      <div className="flex items-center gap-3 bg-indigo-500/30 p-2.5 rounded-lg">
        <Trophy size={18} className="text-yellow-300" />
        <span className="text-sm font-medium text-white">
          Prize pool for winners:{" "}
        </span>
        {gameEvent && (
          <span className="text-sm font-medium text-indigo-200 ml-auto">
            {gameState
              ? (
                  gameState.numberOfPlays *
                  Math.pow(2, gameState.boardIndex) *
                  0.001
                )
                  .toFixed(3)
                  .replace(/\B(?=(\d{4})+(?!\d))/g, ",")
              : "N/A"}{" "}
            ETH
          </span>
        )}
      </div>

      <div className="flex items-center gap-3 bg-indigo-500/30 p-2.5 rounded-lg">
        <Coins size={18} className="text-yellow-300" />
        <span className="text-sm font-medium text-white">
          Contribution per play:{" "}
        </span>
        {gameEvent && (
          <span className="text-sm font-medium text-indigo-200 ml-auto">
            {gameState
              ? (Math.pow(2, gameState.boardIndex) * 0.001)
                  .toFixed(3)
                  .replace(/\B(?=(\d{4})+(?!\d))/g, ",")
              : "N/A"}{" "}
            ETH
          </span>
        )}
      </div>
    </div>
  );
}
