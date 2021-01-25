export default function defaultMatrix(state) {
  let oldMatrix = { ...state };
  let matrixArrray = [];

  for (let i = 1; i <= oldMatrix.columns; i++) {
    matrixArrray[i - 1] = [];
    for (let j = 0; j < oldMatrix.rows; j++) {
      matrixArrray[i - 1][j] = {
        row: i,
        id: j,
        num: Math.floor(Math.random() * 899) + 100,
        bg: false,
        close: false,
      };
    }
  }
  const array = [];

  matrixArrray.forEach((item) => {
    item.forEach((obj) => {
      array.push(obj.num);
    });
  });

  let midArray = [];

  let k = 0;
  let o = 0;
  let indx = 0;

  while (k < matrixArrray[0].length) {
    midArray[k] = [];
    while (o < array.length) {
      midArray[k][indx] = Math.round(array[o] / matrixArrray.length);
      o = o + matrixArrray[0].length;
      indx++;
    }
    k++;
    o = 0 + k;
    indx = 0;
  }
  return {
    matrixArr: matrixArrray,
    columns: oldMatrix.columns,
    rows: oldMatrix.rows,
    x: oldMatrix.x,
  };
}
