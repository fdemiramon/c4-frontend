interface BoardErrorProps {
  message: string;
  type: "error" | "warning";
}

export function BoardError({ message, type }: BoardErrorProps) {
  const borderColor = type === "error" ? "border-red-500" : "border-yellow-500";
  const textColor = type === "error" ? "text-red-500" : "text-yellow-500";

  return (
    <div className={`bg-white rounded-lg p-4 border-2 ${borderColor}`}>
      <p className={textColor}>{message}</p>
    </div>
  );
}
