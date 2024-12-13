import React from "react";
import { BoardCell } from "./BoardCell";

interface ColumnProps {
  cells: boolean[];
  addresses: string[];
  columnIndex: number;
  isAnimating: boolean;
}

export const BoardColumn: React.FC<ColumnProps> = ({
  cells,
  addresses,
  isAnimating,
}) => {
  return (
    <div className="relative">
      <div>
        {cells.map((cell, i) => (
          <BoardCell
            key={i}
            value={cell}
            address={addresses[i]}
            isAnimating={isAnimating && !cell}
          />
        ))}
      </div>
    </div>
  );
};
