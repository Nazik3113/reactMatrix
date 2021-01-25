export default function addRow(action) {
  const oldArr = [...action.matrix];
  let newRow = [];

  for (let i = 0; i < action.columns; i++) {
    newRow[i] = {
      row: oldArr.length + 1,
      id: i,
      num: Math.floor(Math.random() * 899) + 100,
      bg: false,
      close: false,
    };
  }

  const newArr = [...oldArr, newRow];
  return {
    matrixArr: newArr,
    columns: action.columns,
    rows: oldArr.length,
    x: action.x,
  };
}
