interface BoardContainerProps {
  children: React.ReactNode;
  hasNewEvent?: boolean;
}

export function BoardContainer({ children, hasNewEvent }: BoardContainerProps) {
  return (
    <div
      className={`bg-${hasNewEvent ? "green-500" : "white"} border-4 border-indigo`}
    >
      {children}
    </div>
  );
}
