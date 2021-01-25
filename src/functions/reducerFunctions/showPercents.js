export default function showPercents(action) {
  const unpMatrix = [...action.matrix];
  const oldRow = unpMatrix[action.row - 1];
  const newRow = oldRow.map((item) => {
    return {
      ...item,
      num: +((item.num / action.number) * 100).toFixed(1),
      bg: +((item.num / action.number) * 100).toFixed(0) + "%",
    };
  });
  const perMatrix = [
    ...unpMatrix.slice(0, action.row - 1),
    newRow,
    ...unpMatrix.slice(action.row),
  ];
  return {
    matrixArr: perMatrix,
    columns: action.columns,
    rows: action.rows,
    x: action.x,
  };
}
