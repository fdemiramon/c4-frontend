// Grid dimensions constants
export const GRID = {
  ROWS: 8,
  COLS: 8,
} as const;

export function createGrid<T>(defaultValue: T): T[][] {
  return Array(GRID.ROWS)
    .fill(null)
    .map(() => Array(GRID.COLS).fill(defaultValue));
}

export function isValidGridDimensions(grid: unknown[][]): boolean {
  return (
    Array.isArray(grid) &&
    grid.length === GRID.ROWS &&
    grid.every((row) => Array.isArray(row) && row.length === GRID.COLS)
  );
}
