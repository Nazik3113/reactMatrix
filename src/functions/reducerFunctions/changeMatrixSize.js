export default function changeMatrixSize(action) {
  let matrixArr = [];

  for (let i = 1; i <= action.columns; i++) {
    matrixArr[i - 1] = [];
    for (let j = 0; j < action.rows; j++) {
      matrixArr[i - 1][j] = {
        row: i,
        id: j,
        num: Math.floor(Math.random() * 899) + 100,
        bg: false,
        close: false,
      };
    }
  }

  const arr = [];

  matrixArr.forEach((item) => {
    item.forEach((obj) => {
      arr.push(obj.num);
    });
  });

  let midArr = [];

  let i = 0;
  let j = 0;
  let index = 0;

  while (i < action.columns) {
    midArr[i] = [];
    while (j < arr.length) {
      midArr[i][index] = Math.round(arr[j] / matrixArr.length);
      j = j + matrixArr[0].lenght;
      index++;
    }
    i++;
    j = 0 + i;
    index = 0;
  }
  return {
    matrixArr: matrixArr,
    columns: action.columns,
    rows: action.rows,
    x: action.x,
  };
}
