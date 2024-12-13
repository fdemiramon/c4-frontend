import React, { useState } from "react";
import { Game } from "../types/contract";
import { BoardColumn } from "./BoardColumn";

interface BoardGridProps {
  gameState: Game;
}

const onClick = (event: any) => {
  console.log("User event:", event);
};

export const BoardGrid: React.FC<BoardGridProps> = ({ gameState }) => {
  const [hoveredColumn, setHoveredColumn] = useState<number | null>(null);

  const getColumns = () => {
    const columns = [];
    for (let col = 0; col < 7; col++) {
      const column = gameState.gridDiscs.map((row) => row[col]);
      columns.push(column);
    }
    return columns;
  };

  return (
    <div className="bg-blue-800 p-4">
      <div className="grid grid-cols-7 gap-0">
        {getColumns().map((column, colIndex) => (
          <BoardColumn
            key={colIndex}
            cells={column}
            addresses={gameState.gridAddresses.map((row) => row[colIndex])}
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
