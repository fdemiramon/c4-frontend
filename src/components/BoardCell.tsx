import React, { useState } from "react";

interface CellProps {
  value: boolean;
  address: string;
}

export const BoardCell: React.FC<CellProps> = ({ value, address }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const cellColor = value ? "bg-red-500" : "bg-yellow-500";

  return (
    <div className="p-1 relative">
      <div
        className={`w-12 h-12 rounded-full border-4 border-blue-700 ${
          value ? cellColor : "bg-white"
        }
          transition-colors duration-200 cursor-pointer`}
        onMouseEnter={() => address && setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      />
      {showTooltip && address && (
        <div className="absolute z-10 -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
          {address}
        </div>
      )}
    </div>
  );
};
