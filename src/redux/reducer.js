import {
  CHANGE_MATRIX,
  INC_AMOUNT,
  DELETE_ROW,
  PERCENTAGE_ROW,
  BACK_TO_NUMBERS,
  ADD_ROW,
  SHOW_CLOSEST,
  HIDE_CLOSEST,
} from "./actions";
import {
  changeMatrixSize,
  defaultMatrix,
  incrementAmount,
  deleteRow,
  showPercents,
  returnColumnToNumbers,
  addRow,
  showClosest,
  hideClosets,
} from "../functions";
import { data } from "./states";

export let reducer = (state = data, action) => {
  switch (action.type) {
    case CHANGE_MATRIX:
      return changeMatrixSize(action);
    case INC_AMOUNT:
      return incrementAmount(action);
    case DELETE_ROW:
      return deleteRow(action);
    case ADD_ROW:
      return addRow(action);
    case PERCENTAGE_ROW:
      return showPercents(action);
    case BACK_TO_NUMBERS:
      return returnColumnToNumbers(action);
    case SHOW_CLOSEST:
      return showClosest(action);
    case HIDE_CLOSEST:
      return hideClosets(action);
    default:
      return defaultMatrix(state);
  }
};
