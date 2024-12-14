import { Game } from "../../types/contract";
import { BoardColumn } from "./BoardColumn";
import { createGrid } from "../../utils/grid/dimensions";

interface BoardGridProps {
  gameState: Game | null;
}

export function BoardGrid({ gameState }: BoardGridProps) {
  if (!gameState) {
    return (
      <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-6 rounded-xl shadow-inner">
        <div className="grid grid-cols-8 gap-0 opacity-50">
          {Array(8)
            .fill(null)
            .map((_, colIndex) => (
              <div key={colIndex} className="space-y-1">
                {Array(8)
                  .fill(null)
                  .map((_, rowIndex) => (
                    <div key={rowIndex} className="p-1.5">
                      <div className="w-6 h-6 rounded-full border-4 border-blue-700/30 bg-gray-200 animate-pulse" />
                    </div>
                  ))}
              </div>
            ))}
        </div>
      </div>
    );
  }

  const columns = gameState.gridDiscs || createGrid(null);
  const addresses = gameState.gridAddresses || createGrid("");

  return (
    <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-6 rounded-xl">
      <div className="grid grid-cols-8 gap-0">
        {columns.map((column, colIndex) => (
          <BoardColumn
            key={colIndex}
            cells={column}
            addresses={addresses[colIndex]}
            columnIndex={colIndex}
            isAnimating={gameState.lastPlayedColumn === colIndex}
          />
        ))}
      </div>
    </div>
  );
}
