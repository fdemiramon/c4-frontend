export type CellValue = boolean | null;

export function getCellStyle(value: CellValue): string {
  switch (value) {
    case null:
      return "bg-white hover:bg-gray-50";
    case true:
      return "bg-red-500 hover:bg-red-600";
    case false:
      return "bg-yellow-400 hover:bg-yellow-500";
  }
}
