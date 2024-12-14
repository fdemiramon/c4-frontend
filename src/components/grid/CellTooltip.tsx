interface CellTooltipProps {
  address: string;
}

export function CellTooltip({ address }: CellTooltipProps) {
  return (
    <div
      className="absolute z-10 -top-12 left-1/2 transform -translate-x-1/2 
      bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap
      shadow-lg"
    >
      {address}
    </div>
  );
}
