import { useState } from "react";
import { CellTooltip } from "./CellTooltip";
import { getCellStyle } from "../../utils/styles/cellStyles";
import type { CellValue } from "../../utils/styles/cellStyles";

interface GridCellProps {
  value: CellValue;
  address: string;
  isAnimating?: boolean;
}

export function GridCell({ value, address, isAnimating }: GridCellProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="p-1.5 relative">
      <div
        data-testid="grid-cell"
        className={`w-7 h-7 rounded-full border-2 border-blue-900/20 
          ${getCellStyle(value)}
          ${isAnimating ? "animate-fall" : ""}
          shadow-inner transition-colors duration-200 
          hover:border-blue-900/40
          ${value !== null ? "shadow-lg" : ""}`}
        onMouseEnter={() => address && setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      />
      {showTooltip && address && <CellTooltip address={address} />}
    </div>
  );
}
