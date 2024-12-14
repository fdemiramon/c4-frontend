import { Game } from "../types/contract";

export function validateBoardData(board: Game): Game {
  // Ensure grid dimensions are correct
  const expectedRows = 8;
  const expectedCols = 8;

  if (
    !Array.isArray(board.gridDiscs) ||
    board.gridDiscs.length !== expectedRows ||
    board.gridDiscs.some(
      (row) => !Array.isArray(row) || row.length > expectedCols
    )
  ) {
    throw new Error("GridAddresses format is corrupted");
  }
  const tempBoardGridDiscs = board.gridDiscs;
  board.gridDiscs = Array(expectedRows)
    .fill(null)
    .map(() => Array(expectedCols).fill(null));

  for (const row in board.gridDiscs) {
    for (const column in board.gridDiscs[row]) {
      if (tempBoardGridDiscs[column][row] !== undefined) {
        board.gridDiscs[column][row] = tempBoardGridDiscs[column][row];
      }
    }
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
