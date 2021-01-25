export default function midArrCount(matrix) {
  const arr = [];

  matrix.forEach((item) => {
    item.forEach((obj) => {
      arr.push(obj.num);
    });
  });

  let midArr = [];

  let i = 0;
  let j = 0;
  let index = 0;

  while (i < matrix[0].length) {
    midArr[i] = [];
    while (j < arr.length) {
      midArr[i][index] = Math.floor(arr[j] / matrix.length);
      j = j + matrix[0].length;
      index++;
    }
    i++;
    j = 0 + i;
    index = 0;
  }

  return midArr;
}
