import React, { useState } from "react";
import { Input } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { changeMatrix } from "../redux/actions";

export function InputContainer() {
  let matrixState = useSelector((state) => state);
  const dispatch = useDispatch();

  const [rows, setRows] = useState(matrixState.rows);
  const [columns, setColumns] = useState(matrixState.columns);
  const [x, setX] = useState(matrixState.x);

  return (
    <Input
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(changeMatrix(+rows, +columns, +x));
      }}
    >
      <Input.Wrapper>
        <Input.Wrapper>
          <Input.Text>M (Rows)</Input.Text>
          <Input.In
            placeholder="Columns"
            type="text"
            value={columns}
            onChange={(e) => setColumns(e.target.value)}
          />
        </Input.Wrapper>
        <Input.Wrapper>
          <Input.Text>N (Columns)</Input.Text>
          <Input.In
            placeholder="Rows"
            type="text"
            value={rows}
            onChange={(e) => setRows(e.target.value)}
          />
        </Input.Wrapper>
        <Input.Wrapper>
          <Input.Text>X (Closets)</Input.Text>
          <Input.In
            placeholder="X"
            type="text"
            value={x}
            onChange={(e) => setX(e.target.value)}
          />
        </Input.Wrapper>
      </Input.Wrapper>
      <Input.Submit type="submit" value="Create matrix" />
    </Input>
  );
}
