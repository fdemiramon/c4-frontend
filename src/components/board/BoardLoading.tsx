export function BoardLoading() {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden">
      <div className="animate-pulse">
        <div className="bg-indigo-600 p-4">
          <div className="h-8 bg-indigo-500/30 rounded w-1/3 mb-4"></div>
          <div className="h-6 bg-indigo-500/30 rounded w-2/3"></div>
        </div>
        <div className="p-4">
          <div className="h-64 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
}
