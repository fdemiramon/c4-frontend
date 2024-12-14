interface BoardContainerProps {
  children: React.ReactNode;
  hasNewEvent?: boolean;
}

export function BoardContainer({ children, hasNewEvent }: BoardContainerProps) {
  return (
    <div
      className={`bg-white rounded-lg overflow-hidden border-2 
        ${hasNewEvent ? "border-green-500" : "border-gray-200"}
        transition-colors duration-300 shadow-xl`}
    >
      {children}
    </div>
  );
}
