import React, { useState } from "react";
import { Table } from "../components";
import { useSelector, useDispatch } from "react-redux";
import {
  incAmount,
  deleteRow,
  addRow,
  showClosest,
  hideClosest,
} from "../redux/actions";
import { midArrCount, pr, bNT } from "../functions";

export function TableContainer() {
  const dispatch = useDispatch();
  let matrixState = useSelector((state) => state);
  const [percentRow, setPercentRow] = useState(0);

  if (
    matrixState.matrixArr.length != false &&
    matrixState.rows >= 1 &&
    matrixState.rows != false
  ) {
    return (
      <>
        <Table cellspacing="12">
          <Table.AbsWrapper>
            <Table.AbsChild>Sum:</Table.AbsChild>
          </Table.AbsWrapper>
          {matrixState.matrixArr.map((item) => {
            return (
              <>
                <Table.Tr>
                  {item.map((obj) => {
                    return (
                      <Table.Td
                        onMouseLeave={() =>
                          dispatch(
                            hideClosest(
                              matrixState.matrixArr,
                              matrixState.rows,
                              matrixState.columns,
                              matrixState.x
                            )
                          )
                        }
                        style={obj.close ? { background: "#BD5D70" } : null}
                        key={`${obj.row}${obj.id}`}
                        onClick={() =>
                          dispatch(
                            incAmount(
                              matrixState.matrixArr,
                              +obj.id,
                              +obj.row,
                              matrixState.rows,
                              matrixState.columns,
                              matrixState.x
                            )
                          )
                        }
                        onMouseEnter={() =>
                          dispatch(
                            showClosest(
                              matrixState.matrixArr,
                              obj.num,
                              matrixState.rows,
                              matrixState.columns,
                              matrixState.x
                            )
                          )
                        }
                      >
                        <Table.Bg
                          style={obj.bg ? { height: `${obj.bg}` } : null}
                        ></Table.Bg>
                        <Table.Inner>
                          {obj.num}
                          {obj.bg ? "%" : null}
                        </Table.Inner>
                      </Table.Td>
                    );
                  })}
                  <Table.Percentage
                    onMouseEnter={() =>
                      pr(
                        matrixState.matrixArr,
                        item.reduce((acc, cur) => (acc += cur.num), 0),
                        item[0].row,
                        matrixState.rows,
                        matrixState.columns,
                        matrixState.x,
                        setPercentRow,
                        dispatch
                      )
                    }
                    onMouseLeave={() =>
                      bNT(
                        matrixState.matrixArr,
                        percentRow,
                        item[0].row,
                        matrixState.rows,
                        matrixState.columns,
                        matrixState.x,
                        dispatch
                      )
                    }
                  >
                    {item.reduce((acc, cur) => (acc += cur.num), 0).toFixed(0)}
                    {item[0].bg ? "%" : null}
                  </Table.Percentage>
                  <Table.Button
                    onClick={() => {
                      dispatch(
                        deleteRow(
                          matrixState.matrixArr,
                          item[0].row,
                          matrixState.rows,
                          matrixState.columns - 1,
                          matrixState.x
                        )
                      );
                    }}
                  >
                    Delete
                  </Table.Button>
                </Table.Tr>
              </>
            );
          })}
          <Table.Tr>
            {midArrCount(matrixState.matrixArr).map((arr) => {
              return (
                <Table.Average>
                  {arr.reduce((acc, cur) => (acc += cur))}
                </Table.Average>
              );
            })}
            <Table.AddBtn
              onClick={() =>
                dispatch(
                  addRow(
                    matrixState.matrixArr,
                    matrixState.matrixArr[0].length,
                    matrixState.x
                  )
                )
              }
            >
              +
            </Table.AddBtn>
          </Table.Tr>
          <Table.AbsWrapperTwo>
            <Table.AbsChild>Average in row:</Table.AbsChild>
          </Table.AbsWrapperTwo>
        </Table>
      </>
    );
  } else {
    return (
      <Table.ErrorText>
        Matrix can't be with 0 columns or rows. Make shure there is rigth data.
      </Table.ErrorText>
    );
  }
}
