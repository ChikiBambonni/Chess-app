export type TableCellValue = string | number;

export interface TableSelectedCell {
  N: number;
  column: string;
  value: TableCellValue;
}
