import { Game } from '../types/contract';

export function validateBoardData(board: Game): Game {
  // Ensure grid dimensions are correct
  const expectedRows = 8;
  const expectedCols = 8;

  // Validate and fix gridDiscs if necessary
  if (!Array.isArray(board.gridDiscs) || 
      board.gridDiscs.length !== expectedRows || 
      board.gridDiscs.some(row => !Array.isArray(row) || row.length !== expectedCols)) {
    board.gridDiscs = Array(expectedRows).fill(null)
      .map(() => Array(expectedCols).fill(false));
  }

  // Validate and fix gridAddresses if necessary
  if (!Array.isArray(board.gridAddresses) || 
      board.gridAddresses.length !== expectedRows || 
      board.gridAddresses.some(row => !Array.isArray(row) || row.length !== expectedCols)) {
    board.gridAddresses = Array(expectedRows).fill(null)
      .map(() => Array(expectedCols).fill(""));
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