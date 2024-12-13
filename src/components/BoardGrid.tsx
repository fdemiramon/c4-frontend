import React from "react";
import { Game } from "../types/contract";
import { BoardColumn } from "./BoardColumn";
import { createEmptyGrid } from "../utils/dataTransformers";

interface BoardGridProps {
  gameState: Game | null;
  lastPlayedColumn: number | null;
}

export const BoardGrid: React.FC<BoardGridProps> = ({
  gameState,
  lastPlayedColumn,
}) => {
  if (!gameState) {
    return (
      <div className="bg-blue-800 p-4">
        <div className="grid grid-cols-8 gap-0 opacity-50">
          {Array(8)
            .fill(null)
            .map((_, colIndex) => (
              <div key={colIndex} className="space-y-1">
                {Array(8)
                  .fill(null)
                  .map((_, rowIndex) => (
                    <div key={rowIndex} className="p-1">
                      <div className="w-12 h-12 rounded-full border-4 border-blue-700 bg-white animate-pulse" />
                    </div>
                  ))}
              </div>
            ))}
        </div>
      </div>
    );
  }

  const columns = gameState.gridDiscs || createEmptyGrid(false);
  const addresses = gameState.gridAddresses || createEmptyGrid("");

  return (
    <div className="bg-blue-800 p-4">
      <div className="grid grid-cols-8 gap-0">
        {columns.map((column, colIndex) => (
          <BoardColumn
            key={colIndex}
            cells={column}
            addresses={addresses.map((row) => row[colIndex] || "")}
            columnIndex={colIndex}
            isAnimating={lastPlayedColumn === colIndex}
          />
        ))}
      </div>
    </div>
  );
};
