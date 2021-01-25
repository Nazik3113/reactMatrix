import { percentageRow } from "../../redux/actions";

export default function pr(
  matrix,
  number,
  row,
  rows,
  columns,
  x,
  func,
  dispatch
) {
  func(matrix[row - 1]);
  dispatch(percentageRow(matrix, number, row, rows, columns, x));
}
