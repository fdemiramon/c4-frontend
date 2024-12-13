import React from "react";
import { ChevronDown } from "lucide-react";
import { BoardCell } from "./BoardCell";

interface ColumnProps {
  cells: boolean[];
  addresses: string[];
  columnIndex: number;
  isHovered: boolean;
  onHover: (index: number | null) => void;
  onClick: () => void;
}

export const BoardColumn: React.FC<ColumnProps> = ({
  cells,
  addresses,
  columnIndex,
  isHovered,
  onHover,
  onClick,
}) => {
  const isFull = cells.every((cell) => cell !== null);

  return (
    <div
      className={`relative ${!isFull && "group"}`}
      onMouseEnter={() => !isFull && onHover(columnIndex)}
      onMouseLeave={() => onHover(null)}
      onClick={onClick}
    >
      {!isFull && isHovered && (
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-yellow-300 w-6 h-6" />
        </div>
      )}
      <div
        className={`${
          isHovered && !isFull ? "bg-blue-700/30" : ""
        } transition-colors duration-200`}
      >
        {cells.map((cell, i) => (
          <BoardCell key={i} value={cell} address={addresses[i]} />
        ))}
      </div>
    </div>
  );
};
