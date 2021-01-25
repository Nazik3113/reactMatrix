import React from "react";
import "./App.css";
import { InputContainer } from "./containers/inputContainer";
import { TableContainer } from "./containers/tableContainer";

export default function App() {
  return (
    <div className="wrapper">
      <InputContainer />
      <TableContainer />
    </div>
  );
}
