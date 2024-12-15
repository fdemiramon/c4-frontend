interface BoardContainerProps {
  children: React.ReactNode;
  hasNewEvent?: boolean;
}

export function BoardContainer({ children, hasNewEvent }: BoardContainerProps) {
  return (
    <div
      className={`bg-white rounded-xl overflow-hidden border-4 transition-all duration-300
        ${hasNewEvent ? "border-green-500 animate-glow" : "border-indigo-500/20 hover:border-indigo-500/40"}
        shadow-xl hover:shadow-2xl transform hover:-translate-y-1`}
    >
      {children}
    </div>
  );
}