export default function deleteRow(action) {
  const oldUndArr = [...action.matrix];
  const fDelArr = [...oldUndArr.slice(0, action.row - 1)];
  const sDelArr = [
    ...oldUndArr.map((arr) => {
      return arr.map((el) => {
        return { ...el, row: el.row - 1 };
      });
    }),
  ].slice(action.row);
  const newDelArr = [...fDelArr, ...sDelArr];

  return {
    matrixArr: newDelArr,
    columns: action.columns,
    rows: action.rows,
    x: action.x,
  };
}
