import { Game } from "../types/contract";
import { validateBoardData } from "./validators";
import {
  transformDiscsGrid,
  transformAddressesGrid,
} from "./grid/transformers";

export function transformBoardData(rawBoards: unknown[]): Game[] {
  if (!Array.isArray(rawBoards)) {
    throw new Error("Invalid response format from contract");
  }

  return rawBoards.map((board: any) => {
    const transformedBoard = {
      gameIndex: Number(board?.gameIndex?.toString() || "0"),
      boardIndex: Number(board?.boardIndex?.toString() || "0"),
      lastPlayedColumn: Number(board?.lastPlayedColumn?.toString() || "0"),
      numberOfPlays: Number(board?.numberOfPlays?.toString() || "0"),
      lastColor: Boolean(board?.lastColor),
      isClosed: Boolean(board?.isClosed),
      winners: Array.isArray(board?.winners) ? board.winners : [],
      gridDiscs: transformDiscsGrid(board?.gridDiscs || []),
      gridAddresses: transformAddressesGrid(board?.gridAddresses || []),
    };

    return validateBoardData(transformedBoard);
  });
}
