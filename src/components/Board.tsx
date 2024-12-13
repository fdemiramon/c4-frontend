import { GamepadIcon, Trophy } from "lucide-react";
import { useContractEvents } from "./../hooks/useContractEvents";
import { useGameInitialState } from "./../hooks/useGameInitialState";
import { useEffect, useState } from "react";
import { Game, GameEvent } from "../types/contract";
import { BoardGrid } from "./BoardGrid";

interface BoardProps {
  boardIndex: number;
}

export function Board(boardArguments: BoardProps) {
  const { gameEvent } = useContractEvents(boardArguments.boardIndex)<GameEvent>;
  const [hasNewEvent, setHasNewEvent] = useState(false);
  const [gameState, setGameState] = useGameInitialState<Game>(
    boardArguments.boardIndex
  );

  useEffect(() => {
    if (gameEvent) {
      setHasNewEvent(true);
      const timer = setTimeout(() => {
        setHasNewEvent(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [gameEvent]);

  return (
    <div
      className={`bg-white rounded-t-lg overflow-hidden border-2 border-${
        hasNewEvent ? "green" : "white"
      }-500`}
    >
      <div className={`bg-indigo-600 p-4 rounded-t-lg text-white`}>
        <div className="flex justify-between items-center mb-2">
          <span className="font-semibold">
            <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <GamepadIcon
                className={`w-5 h-5 ${gameEvent?.boardIndex ?? "text-red"}`}
              />
              Board #{gameEvent?.boardIndex ?? "Error fetching"}
            </h2>
          </span>
          <span className="font-semibold">Game #{gameEvent?.gameIndex}</span>
        </div>
        <div className="flex items-center gap-2 bg-indigo-500/30 p-2">
          <Trophy size={16} className="text-yellow-300" />
          <span className="text-sm font-medium">Jackpot: 1.0344 ETH</span>
          <span className="text-sm font-medium">
            LATEST EVENTS: {gameEvent?.name}
          </span>
        </div>
      </div>
      <div className="space-y-4">
        <div className="bg-white rounded-lg shadow p-4">
          <BoardGrid gameState={gameState} />
        </div>
      </div>
    </div>
  );
}
