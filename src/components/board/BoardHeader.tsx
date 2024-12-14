import { GamepadIcon, Trophy, Coins, Palette } from "lucide-react";
import { Game } from "../../types/contract";
import { getCellStyle } from "../../utils/cellStyles";
interface BoardHeaderProps {
  gameState: Game | null;
}

export function BoardHeader({ gameState }: BoardHeaderProps) {
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
      <div className="flex items-center gap-3 bg-indigo-500/30 p-1.5 rounded-lg m-2.5">
        <Trophy size={18} className="text-white" />
        <span className="text-sm font-medium text-white">
          Prize pool for winners:{" "}
        </span>
        {
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
        }
      </div>

      <div className="flex items-center gap-3 bg-indigo-500/30 p-1.5 rounded-lg m-2.5">
        <Coins size={18} className="text-white" />
        <span className="text-sm font-medium text-white">
          Contribution per play:{" "}
        </span>
        {
          <span className="text-sm font-medium text-indigo-200 ml-auto">
            {gameState
              ? (Math.pow(2, gameState.boardIndex) * 0.001)
                  .toFixed(3)
                  .replace(/\B(?=(\d{4})+(?!\d))/g, ",")
              : "N/A"}{" "}
            ETH
          </span>
        }
      </div>

      <div className="flex items-center gap-3 bg-indigo-500/30 p-1.5 rounded-lg m-2.5 mb-0">
        <Palette size={18} className="text-white" />
        <span className="text-sm font-medium text-white">Next color: </span>

        <span className="text-sm font-medium text-indigo-200 ml-auto">
          <div className="relative">
            <div
              className={`w-5 h-5 rounded-full border-2
                
          ${getCellStyle(gameState?.numberOfPlays % 2 == 0)}
          
        `}
            />
          </div>
        </span>
      </div>
    </div>
  );
}
