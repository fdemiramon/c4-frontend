import { useGameEvents } from "../hooks/useGameEvents";
import { useGameInitialState } from "../hooks/useGameInitialState";
import { useEffect, useState } from "react";
import { Game } from "../types/contract";
import { BoardGrid } from "./grid/BoardGrid";
import { useGameState } from "../context/GameStateContext";
import { BoardHeader } from "./board/BoardHeader";
import { BoardError } from "./board/BoardError";
import { BoardLoading } from "./board/BoardLoading";
import { BoardContainer } from "./board/BoardContainer";

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
      <BoardError
        message={`Error loading board: ${error.message}`}
        type="error"
      />
    );
  }

  if (isLoading || loading) {
    return <BoardLoading />;
  }

  if (!gameState) {
    return (
      <BoardError
        message={`No game data available for Board #${boardIndex}`}
        type="warning"
      />
    );
  }

  return (
    <BoardContainer hasNewEvent={hasNewEvent}>
      <BoardHeader
        boardIndex={boardIndex}
        gameIndex={gameState.gameIndex}
        gameEvent={gameEvent}
      />
      <div className="p-4 bg-gradient-to-b from-gray-50 to-white">
        <BoardGrid
          key={gameState?.numberOfPlays}
          gameState={gameState}
          lastPlayedColumn={lastPlayedColumn}
        />
      </div>
    </BoardContainer>
  );
}
