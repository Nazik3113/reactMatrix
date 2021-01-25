import { backToNumbers } from "../../redux/actions";

export default function bNT(matrix, rowT, row, rows, columns, x, dispatch) {
  dispatch(backToNumbers(matrix, rowT, row, rows, columns, x));
}
