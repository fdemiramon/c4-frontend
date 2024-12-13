import { Board } from "./Board.tsx";

export function Boards() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 9 }, (_, i) => (
          <Board key={i} boardIndex={i} />
        ))}
      </div>
    </div>
  );
}
