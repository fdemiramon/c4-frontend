import React, { useState } from "react";
import { Game } from "../types/contract";
import { BoardColumn } from "./BoardColumn";
import { createEmptyGrid } from "../utils/dataTransformers";

interface BoardGridProps {
  gameState: Game | null;
}

export const BoardGrid: React.FC<BoardGridProps> = ({ gameState }) => {
  const [hoveredColumn, setHoveredColumn] = useState<number | null>(null);

  const getColumns = () => {
    if (!gameState?.gridDiscs || !Array.isArray(gameState.gridDiscs)) {
      return createEmptyGrid(false);
    }

    const columns = [];
    for (let col = 0; col < 7; col++) {
      const column = gameState.gridDiscs
        .map(row => Array.isArray(row) ? Boolean(row[col]) : false);
      columns.push(column);
    }
    return columns;
  };

  if (!gameState) {
    return (
      <div className="bg-blue-800 p-4">
        <div className="grid grid-cols-7 gap-0 opacity-50">
          {Array(7).fill(null).map((_, colIndex) => (
            <div key={colIndex} className="space-y-1">
              {Array(6).fill(null).map((_, rowIndex) => (
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

  const columns = getColumns();
  const addresses = gameState.gridAddresses || createEmptyGrid("");

  return (
    <div className="bg-blue-800 p-4">
      <div className="grid grid-cols-7 gap-0">
        {columns.map((column, colIndex) => (
          <BoardColumn
            key={colIndex}
            cells={column}
            addresses={addresses.map(row => row[colIndex] || "")}
            columnIndex={colIndex}
            isHovered={hoveredColumn === colIndex}
            onHover={setHoveredColumn}
            onClick={() => onClick(colIndex)}
          />
        ))}
      </div>
    </div>
  );
};