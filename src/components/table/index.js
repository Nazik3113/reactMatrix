import React from "react";
import {
  TableContainer,
  Tr,
  Td,
  Tb,
  Button,
  AbsWrapper,
  AbsChild,
  AbsWrapperTwo,
  Percentage,
  Bg,
  Inner,
  Average,
  ErrorText,
  AddBtn,
} from "./styles/table";

export default function Table({ children, ...restProps }) {
  return (
    <TableContainer {...restProps}>
      <Tb {...restProps}>{children}</Tb>
    </TableContainer>
  );
}

Table.Tr = function TableTr({ children, ...restProps }) {
  return <Tr {...restProps}>{children}</Tr>;
};

Table.Td = function TableTd({ children, ...restProps }) {
  return <Td {...restProps}>{children}</Td>;
};

Table.Button = function TableButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Table.AbsWrapper = function TableAbsWrapper({ children, ...restProps }) {
  return <AbsWrapper {...restProps}>{children}</AbsWrapper>;
};

Table.AbsWrapperTwo = function TableAbsWrapperTwo({ children, ...restProps }) {
  return <AbsWrapperTwo {...restProps}>{children}</AbsWrapperTwo>;
};

Table.AbsChild = function TableAbsChild({ children, ...restProps }) {
  return <AbsChild {...restProps}>{children}</AbsChild>;
};

Table.Percentage = function TablePercentage({ children, ...restProps }) {
  return <Percentage {...restProps}>{children}</Percentage>;
};

Table.Bg = function TableBg({ children, ...restProps }) {
  return <Bg {...restProps}>{children}</Bg>;
};

Table.Inner = function TableInner({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
};

Table.Average = function TableAverage({ children, ...restProps }) {
  return <Average {...restProps}>{children}</Average>;
};

Table.ErrorText = function TableErrorText({ children, ...restProps }) {
  return <ErrorText {...restProps}>{children}</ErrorText>;
};

Table.AddBtn = function TableAddBtn({ children, ...restProps }) {
  return <AddBtn {...restProps}>{children}</AddBtn>;
};
