import React, { useState } from "react";

interface CellProps {
  value: boolean | null;
  address: string;
  isAnimating?: boolean;
}

export const BoardCell: React.FC<CellProps> = ({
  value,
  address,
  isAnimating,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const getCellStyle = () => {
    // If value is null, it's an empty cell
    if (value === null) {
      return "bg-white hover:bg-gray-50";
    }
    // If value is true, it's player 1 (red)
    if (value === true) {
      return "bg-red-500 hover:bg-red-600";
    }
    // If value is false, it's player 2 (yellow)
    return "bg-yellow-400 hover:bg-yellow-500";
  };

  return (
    <div className="p-1.5 relative">
      <div
        className={`w-14 h-14 rounded-full border-4 border-blue-900/20 
          ${getCellStyle()}
          ${isAnimating ? "animate-fall" : ""}
          shadow-inner transition-colors duration-200 
          hover:border-blue-900/40 cursor-pointer
          ${value !== null ? "shadow-lg" : ""}`}
        onMouseEnter={() => address && setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      />
      {showTooltip && address && (
        <div
          className="absolute z-10 -top-12 left-1/2 transform -translate-x-1/2 
          bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap
          shadow-lg"
        >
          {address}
        </div>
      )}
    </div>
  );
};
