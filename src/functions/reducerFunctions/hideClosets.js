export default function hideClosets(action) {
  const onlUncMatrix = [...action.matrix];
  const newMatrix = [];
  onlUncMatrix.forEach((item, index) => {
    newMatrix[index] = [];
    item.forEach((el, idx) => {
      newMatrix[index][idx] = { ...el, close: false };
    });
  });
  return {
    matrixArr: newMatrix,
    columns: action.columns,
    rows: action.rows,
    x: action.x,
  };
}
