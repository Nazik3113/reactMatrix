export const CHANGE_MATRIX = "CHANGE_MATRIX";
export const INC_AMOUNT = "INC_AMOUNT";
export const DELETE_ROW = "DELETE_ROW";
export const ADD_ROW = "ADD_ROW";
export const PERCENTAGE_ROW = "PERCENTAGE_ROW";
export const BACK_TO_NUMBERS = "BACK_TO_NUMBERS";
export const SHOW_CLOSEST = "SHOW_CLOSEST";
export const HIDE_CLOSEST = "HIDE_CLOSEST";

export function changeMatrix(rows, columns, x) {
  return {
    type: CHANGE_MATRIX,
    rows: rows,
    columns: columns,
    x: x,
  };
}

export function incAmount(matrix, id, row, rows, columns, x) {
  return {
    type: INC_AMOUNT,
    matrix: matrix,
    id: id,
    row: row,
    rows: rows,
    columns: columns,
    x: x,
  };
}

export function deleteRow(matrix, row, rows, columns, x) {
  return {
    type: DELETE_ROW,
    matrix: matrix,
    row: row,
    rows: rows,
    columns: columns,
    x: x,
  };
}

export function percentageRow(matrix, number, row, rows, columns, x) {
  return {
    type: PERCENTAGE_ROW,
    matrix: matrix,
    number: number,
    row: row,
    rows: rows,
    columns: columns,
    x: x,
  };
}

export function backToNumbers(matrix, addedRow, row, rows, columns, x) {
  return {
    type: BACK_TO_NUMBERS,
    matrix: matrix,
    addedRow: addedRow,
    row: row,
    rows: rows,
    columns: columns,
    x: x,
  };
}

export function addRow(matrix, columns, x) {
  return {
    type: ADD_ROW,
    matrix: matrix,
    columns: columns,
    x: x,
  };
}

export function showClosest(matrix, number, rows, columns, x) {
  return {
    type: SHOW_CLOSEST,
    matrix: matrix,
    number: number,
    rows: rows,
    columns: columns,
    x: x,
  };
}

export function hideClosest(matrix, rows, columns, x) {
  return {
    type: HIDE_CLOSEST,
    matrix: matrix,
    rows: rows,
    columns: columns,
    x: x,
  };
}
