import { GamepadIcon, Trophy } from "lucide-react";
import { useGameEvents } from "../hooks/useGameEvents";
import { useGameInitialState } from "../hooks/useGameInitialState";
import { useEffect, useState } from "react";
import { Game } from "../types/contract";
import { BoardGrid } from "./BoardGrid";
import { useGameState } from "../context/GameStateContext";

interface BoardProps {
  boardIndex: number;
}

export function Board({ boardIndex }: BoardProps) {
  const { gameEvent, isLoading } = useGameEvents(boardIndex);
  const [hasNewEvent, setHasNewEvent] = useState(false);
  const [gameState] = useGameInitialState<Game>(boardIndex);
  const { loading, error } = useGameState();
  const [lastPlayedColumn, setLastPlayedColumn] = useState<number | null>(null);

  useEffect(() => {
    if (gameEvent) {
      setHasNewEvent(true);
      if (gameEvent.name === "GamePlayed") {
        setLastPlayedColumn(parseInt(gameEvent.data.column.toString()));
      }
      const timer = setTimeout(() => {
        setHasNewEvent(false);
        setLastPlayedColumn(null);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [gameEvent]);

  if (error) {
    return (
      <div className="bg-white rounded-lg p-4 border-2 border-red-500">
        <p className="text-red-500">Error loading board: {error.message}</p>
      </div>
    );
  }

  if (isLoading || loading) {
    return (
      <div className="bg-white rounded-lg p-4">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-64 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (!gameState) {
    return (
      <div className="bg-white rounded-lg p-4 border-2 border-yellow-500">
        <p className="text-yellow-500">
          No game data available for Board #{boardIndex}
        </p>
      </div>
    );
  }

  return (
    <div
      className={`bg-white rounded-t-lg overflow-hidden border-2 ${
        hasNewEvent ? "border-green-500" : "border-gray-200"
      } transition-colors duration-300`}
    >
      <div className="bg-indigo-600 p-4 rounded-t-lg text-white">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <GamepadIcon className="w-5 h-5" />
            Board #{boardIndex}
          </h2>
          <span className="font-semibold">
            Game #{gameState?.gameIndex ?? "N/A"}
          </span>
        </div>
        <div className="flex items-center gap-2 bg-indigo-500/30 p-2">
          <Trophy size={16} className="text-yellow-300" />
          <span className="text-sm font-medium">Jackpot: 1.0344 ETH</span>
          <span className="text-sm font-medium">
            {`LATEST EVENT: ${gameEvent?.name ?? "None"}`}
          </span>
        </div>
      </div>
      <div className="space-y-4">
        <div className="bg-white rounded-lg shadow p-4">
          <BoardGrid
            key={gameState?.numberOfPlays}
            gameState={gameState}
            lastPlayedColumn={lastPlayedColumn}
          />
        </div>
      </div>
    </div>
  );
}
