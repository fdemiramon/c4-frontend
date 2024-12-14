import { GRID, createGrid } from "./dimensions";

export function transformGrid<T>(
  grid: unknown[][],
  transformer: (value: unknown) => T,
  defaultValue: T
): T[][] {
  if (!Array.isArray(grid)) {
    return createGrid(defaultValue);
  }

  const transformedGrid = createGrid(defaultValue);

  // Transform and reverse each column to make discs fall to the bottom
  for (let col = 0; col < GRID.COLS; col++) {
    if (Array.isArray(grid[col])) {
      const column = grid[col]
        .map((cell) => transformer(cell))
        .filter((cell) => cell !== null);

      // Place the discs at the bottom of the column
      const startRow = GRID.ROWS - column.length;
      for (let row = 0; row < column.length; row++) {
        transformedGrid[col][startRow + row] = column[column.length - row - 1];
      }
    }
  }

  return transformedGrid;
}

export function transformDiscsGrid(grid: unknown[][]): (boolean | null)[][] {
  return transformGrid(
    grid,
    (cell) => (cell === "" ? null : Boolean(cell)),
    null
  );
}

export function transformAddressesGrid(grid: unknown[][]): string[][] {
  return transformGrid(grid, (addr) => addr?.toString() || "", "");
}
