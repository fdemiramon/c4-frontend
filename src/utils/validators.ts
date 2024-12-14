import { Game } from "../types/contract";
import { createGrid, isValidGridDimensions, GRID } from "./grid/dimensions";

export function validateBoardData(board: Game): Game {
  if (!board) {
    throw new Error("Invalid board data: board is undefined");
  }

  // Validate and fix grid dimensions
  if (!isValidGridDimensions(board.gridDiscs)) {
    const tempBoardGridDiscs = board.gridDiscs;
    board.gridDiscs = createGrid(null);

    // Preserve existing data when possible
    if (Array.isArray(tempBoardGridDiscs)) {
      for (let row = 0; row < GRID.ROWS; row++) {
        for (let col = 0; col < GRID.COLS; col++) {
          if (tempBoardGridDiscs[col]?.[row] !== undefined) {
            board.gridDiscs[row][col] = tempBoardGridDiscs[col][row];
          }
        }
      }
    }
  }

  if (!isValidGridDimensions(board.gridAddresses)) {
    board.gridAddresses = createGrid("");
  }

  // Ensure winners is always an array
  if (!Array.isArray(board.winners)) {
    board.winners = [];
  }

  // Validate numeric values
  board.gameIndex = Math.max(0, Number(board.gameIndex) || 0);
  board.boardIndex = Math.max(0, Number(board.boardIndex) || 0);
  board.lastPlayedColumn = Math.max(0, Number(board.lastPlayedColumn) || 0);
  board.numberOfPlays = Math.max(0, Number(board.numberOfPlays) || 0);

  return board;
}
