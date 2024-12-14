import { Game } from "../types/contract";
import { validateBoardData } from "./validators";

export function transformBoardData(rawBoards: any[]): Game[] {
  if (!Array.isArray(rawBoards)) {
    throw new Error("Invalid response format from contract");
  }
  return rawBoards.map((board) => {
    const transformedBoard = {
      gameIndex: Number(board?.gameIndex?.toString() || "0"),
      boardIndex: Number(board?.boardIndex?.toString() || "0"),
      lastPlayedColumn: Number(board?.lastPlayedColumn?.toString() || "0"),
      numberOfPlays: Number(board?.numberOfPlays?.toString() || "0"),
      lastColor: Boolean(board?.lastColor),
      isClosed: Boolean(board?.isClosed),
      winners: [],
      gridDiscs: createEmptyGrid(null),
      gridAddresses: createEmptyGrid(""),
    };

    // Safely transform arrays
    if (Array.isArray(board?.winners)) {
      transformedBoard.winners = board.winners;
    }

    if (Array.isArray(board?.gridDiscs)) {
      transformedBoard.gridDiscs = board.gridDiscs.map((row: any[]) =>
        Array.isArray(row)
          ? row.map((cell) => (cell === "" ? null : Boolean(cell)))
          : Array(7).fill(null)
      );
    }

    if (Array.isArray(board?.gridAddresses)) {
      transformedBoard.gridAddresses = board.gridAddresses.map((row: any[]) =>
        Array.isArray(row)
          ? row.map((addr) => addr?.toString() || "")
          : Array(7).fill("")
      );
    }

    return validateBoardData(transformedBoard);
  });
}

export function createEmptyGrid<T>(defaultValue: T): T[][] {
  return Array(6)
    .fill(null)
    .map(() => Array(7).fill(defaultValue));
}
