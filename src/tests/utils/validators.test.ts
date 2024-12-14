import { describe, it, expect } from "vitest";
import { validateBoardData } from "../../utils/validators";
import { Game } from "../../types/contract";
import { GRID } from "../../utils/grid/dimensions";

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
    } as Game;

    const validatedBoard = validateBoardData(invalidBoard as Game);

    expect(validatedBoard.gridDiscs).toHaveLength(GRID.ROWS);
    expect(validatedBoard.gridDiscs[0]).toHaveLength(GRID.COLS);
    expect(validatedBoard.gridAddresses).toHaveLength(GRID.ROWS);
    expect(validatedBoard.gridAddresses[0]).toHaveLength(GRID.COLS);
  });

  it("ensures winners is always an array", () => {
    const boardWithInvalidWinners: Partial<Game> = {
      winners: undefined,
      gridDiscs: Array(GRID.ROWS).fill(Array(GRID.COLS).fill(null)),
      gridAddresses: Array(GRID.ROWS).fill(Array(GRID.COLS).fill("")),
    } as Game;

    const validatedBoard = validateBoardData(boardWithInvalidWinners as Game);
    expect(Array.isArray(validatedBoard.winners)).toBe(true);
  });

  it("validates numeric values", () => {
    const boardWithInvalidNumbers: Partial<Game> = {
      gameIndex: -1,
      boardIndex: -2,
      lastPlayedColumn: -3,
      numberOfPlays: -4,
      gridDiscs: Array(GRID.ROWS).fill(Array(GRID.COLS).fill(null)),
      gridAddresses: Array(GRID.ROWS).fill(Array(GRID.COLS).fill("")),
    } as Game;

    const validatedBoard = validateBoardData(boardWithInvalidNumbers as Game);

    expect(validatedBoard.gameIndex).toBe(0);
    expect(validatedBoard.boardIndex).toBe(0);
    expect(validatedBoard.lastPlayedColumn).toBe(0);
    expect(validatedBoard.numberOfPlays).toBe(0);
  });
});
