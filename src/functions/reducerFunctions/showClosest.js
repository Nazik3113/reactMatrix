export default function showClosest(action) {
  let x = 0;
  let num = action.x > 0 ? action.x + 1 : 2;
  const onlUncMatrix = [...action.matrix];
  const oldMatrix = [];
  onlUncMatrix.forEach((item, index) => {
    oldMatrix[index] = [];
    item.forEach((el, idx) => {
      oldMatrix[index][idx] = { ...el, close: false };
    });
  });
  let res = [];
  oldMatrix.forEach((item) => {
    item.forEach((el) => {
      if (el.num >= action.number) {
        res[x] = { ...el, num: el.num - action.number };
      } else {
        res[x] = { ...el, num: action.number - el.num };
      }
      x++;
    });
  });

  const sortedItems = res
    .sort((a, b) => a.num - b.num)
    .slice(action.columns === 1 && action.rows === 1 ? 0 : 1, num);

  let itemsWithTrue = null;

  for (let i = 0; i < sortedItems.length; i++) {
    if (i > 0) {
      itemsWithTrue = [
        ...itemsWithTrue.slice(0, sortedItems[i].row - 1),
        [
          ...itemsWithTrue[sortedItems[i].row - 1].slice(0, sortedItems[i].id),
          {
            ...itemsWithTrue[sortedItems[i].row - 1][sortedItems[i].id],
            close: true,
          },
          ...itemsWithTrue[sortedItems[i].row - 1].slice(sortedItems[i].id + 1),
        ],
        ...itemsWithTrue.slice(sortedItems[i].row),
      ];
    } else {
      itemsWithTrue = [
        ...oldMatrix.slice(0, sortedItems[i].row - 1),
        [
          ...oldMatrix[sortedItems[i].row - 1].slice(0, sortedItems[i].id),
          {
            ...oldMatrix[sortedItems[i].row - 1][sortedItems[i].id],
            close: true,
          },
          ...oldMatrix[sortedItems[i].row - 1].slice(sortedItems[i].id + 1),
        ],
        ...oldMatrix.slice(sortedItems[i].row),
      ];
    }
  }
  return {
    matrixArr: itemsWithTrue,
    columns: action.columns,
    rows: action.rows,
    x: action.x,
  };
}
