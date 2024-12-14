import { describe, it, expect } from "vitest";
import { validateBoardData } from "../../utils/validators";
import { Game } from "../../types/contract";

describe("validateBoardData", () => {
  it("validates and fixes invalid grid dimensions", () => {
    const invalidBoard: Partial<Game> = {
      gameIndex: 1,
      boardIndex: 0,
      lastPlayedColumn: 0,
      numberOfPlays: 0,
      isClosed: false,
      winners: [],
      gridDiscs: [],
      gridAddresses: [],
    };

    const validatedBoard = validateBoardData(invalidBoard as Game);

    expect(validatedBoard.gridDiscs).toHaveLength(8);
    expect(validatedBoard.gridDiscs[0]).toHaveLength(8);
    expect(validatedBoard.gridAddresses).toHaveLength(8);
    expect(validatedBoard.gridAddresses[0]).toHaveLength(8);
  });

  it("ensures winners is always an array", () => {
    const boardWithInvalidWinners: Partial<Game> = {
      winners: undefined,
      gridDiscs: Array(8).fill(Array(8).fill(null)),
      gridAddresses: Array(8).fill(Array(8).fill("")),
    };

    const validatedBoard = validateBoardData(boardWithInvalidWinners as Game);
    expect(Array.isArray(validatedBoard.winners)).toBe(true);
  });

  it("validates numeric values", () => {
    const boardWithInvalidNumbers: Partial<Game> = {
      gameIndex: -1,
      boardIndex: -2,
      lastPlayedColumn: -3,
      numberOfPlays: -4,
      gridDiscs: Array(8).fill(Array(8).fill(null)),
      gridAddresses: Array(8).fill(Array(8).fill("")),
    };

    const validatedBoard = validateBoardData(boardWithInvalidNumbers as Game);

    expect(validatedBoard.gameIndex).toBe(0);
    expect(validatedBoard.boardIndex).toBe(0);
    expect(validatedBoard.lastPlayedColumn).toBe(0);
    expect(validatedBoard.numberOfPlays).toBe(0);
  });
});
