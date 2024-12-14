import { Game } from "../../types/contract";
import { BoardColumn } from "./BoardColumn";
import { createEmptyGrid } from "../../utils/dataTransformers";

interface BoardGridProps {
  gameState: Game | null;
  lastPlayedColumn: number | null;
}

export function BoardGrid({ gameState, lastPlayedColumn }: BoardGridProps) {
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
                      <div className="w-14 h-14 rounded-full border-4 border-blue-700/30 bg-gray-200 animate-pulse" />
                    </div>
                  ))}
              </div>
            ))}
        </div>
      </div>
    );
  }

  const columns = gameState.gridDiscs || createEmptyGrid(null);
  const addresses = gameState.gridAddresses || createEmptyGrid("");

  return (
    <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-6 rounded-xl shadow-inner">
      <div className="grid grid-cols-8 gap-0">
        {columns.map((column, colIndex) => (
          <BoardColumn
            key={colIndex}
            cells={column}
            addresses={addresses[colIndex]}
            columnIndex={colIndex}
            isAnimating={lastPlayedColumn === colIndex}
          />
        ))}
      </div>
    </div>
  );
}
