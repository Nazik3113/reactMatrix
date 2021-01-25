export default function incrementAmount(action) {
  const oldMatrixAm = action.matrix;
  const idx = action.id;
  const indexrow = action.row - 1;
  const oldItem = oldMatrixAm[indexrow][idx];
  const newItem = { ...oldItem, num: oldItem.num + 1 };
  const newArr = [
    ...oldMatrixAm[indexrow].slice(0, idx),
    newItem,
    ...oldMatrixAm[indexrow].slice(idx + 1),
  ];
  const newFullArr = [
    ...oldMatrixAm.slice(0, indexrow),
    newArr,
    ...oldMatrixAm.slice(indexrow + 1),
  ];
  return {
    matrixArr: newFullArr,
    columns: action.columns,
    rows: action.rows,
    x: action.x,
  };
}
