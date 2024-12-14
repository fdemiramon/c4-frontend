import { GamepadIcon, Trophy } from "lucide-react";
import { GameEvent } from "../../types/contract";

interface BoardHeaderProps {
  boardIndex: number;
  gameIndex?: number;
  gameEvent: GameEvent | null;
}

export function BoardHeader({
  boardIndex,
  gameIndex,
  gameEvent,
}: BoardHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-indigo-700 to-indigo-600 p-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold flex items-center gap-2 text-white">
          <GamepadIcon className="w-5 h-5" />
          Board #{boardIndex}
        </h2>
        <span className="text-white font-medium">
          Game #{gameIndex ?? "N/A"}
        </span>
      </div>
      <div className="flex items-center gap-3 bg-indigo-500/30 p-2.5 rounded-lg">
        <Trophy size={18} className="text-yellow-300" />
        <span className="text-sm font-medium text-white">
          Jackpot: 1.0344 ETH
        </span>
        {gameEvent && (
          <span className="text-sm font-medium text-indigo-200 ml-auto">
            {gameEvent.name}
          </span>
        )}
      </div>
    </div>
  );
}
