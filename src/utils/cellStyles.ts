export function getCellStyle(value: boolean | null): string {
  if (value === null) {
    return "bg-white hover:bg-gray-50";
  }
  if (value === true) {
    return "bg-red-500 hover:bg-red-600";
  }
  return "bg-yellow-400 hover:bg-yellow-500";
}
