import { GridCell } from "./GridCell";

interface BoardColumnProps {
  cells: (boolean | null)[];
  addresses: string[];
  columnIndex: number;
  isAnimating: boolean;
}

export function BoardColumn({
  cells,
  addresses,
  isAnimating,
}: BoardColumnProps) {
  return (
    <div>
      <div>
        {cells.map((cell, i) => (
          <GridCell
            key={i}
            value={cell}
            address={addresses[i]}
            isAnimating={isAnimating && cell !== null}
          />
        ))}
      </div>
    </div>
  );
}
