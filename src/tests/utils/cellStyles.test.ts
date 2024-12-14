import { describe, it, expect } from "vitest";
import { getCellStyle } from "../../utils/cellStyles";

describe("getCellStyle", () => {
  it("returns correct style for empty cell", () => {
    expect(getCellStyle(null)).toBe("bg-white hover:bg-gray-50");
  });

  it("returns correct style for player 1", () => {
    expect(getCellStyle(true)).toBe("bg-red-500 hover:bg-red-600");
  });

  it("returns correct style for player 2", () => {
    expect(getCellStyle(false)).toBe("bg-yellow-400 hover:bg-yellow-500");
  });
});
