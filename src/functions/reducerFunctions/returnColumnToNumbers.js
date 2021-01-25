export default function returnColumnToNumbers(action) {
  const oldNumMatrix = [...action.matrix];
  const newNumMatrix = [
    ...oldNumMatrix.slice(0, action.row - 1),
    action.addedRow,
    ...oldNumMatrix.slice(action.row),
  ];
  return {
    matrixArr: newNumMatrix,
    columns: action.columns,
    rows: action.rows,
    x: action.x,
  };
}
