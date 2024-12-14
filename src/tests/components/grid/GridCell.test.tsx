import { render, screen, fireEvent } from "@testing-library/react";
import { GridCell } from "../../../components/grid/GridCell";
import { describe, it, expect } from "vitest";

describe("GridCell", () => {
  it("renders empty cell correctly", () => {
    render(<GridCell value={null} address="" />);
    const cell = screen.getByTestId("grid-cell");
    expect(cell).toHaveClass("bg-white");
  });

  it("renders player 1 cell correctly", () => {
    render(<GridCell value={true} address="" />);
    const cell = screen.getByTestId("grid-cell");
    expect(cell).toHaveClass("bg-red-500");
  });

  it("renders player 2 cell correctly", () => {
    render(<GridCell value={false} address="" />);
    const cell = screen.getByTestId("grid-cell");
    expect(cell).toHaveClass("bg-yellow-400");
  });

  it("shows tooltip on hover when address is provided", () => {
    const address = "0x123";
    render(<GridCell value={null} address={address} />);

    const cell = screen.getByTestId("grid-cell");
    fireEvent.mouseEnter(cell);

    expect(screen.getByText(address)).toBeInTheDocument();
  });

  it("applies animation class when isAnimating is true", () => {
    render(<GridCell value={true} address="" isAnimating={true} />);
    const cell = screen.getByTestId("grid-cell");
    expect(cell).toHaveClass("animate-fall");
  });
});
