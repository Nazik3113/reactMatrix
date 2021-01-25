import React from "react";
import { Container, Inputt, Text, Submit, Wrapper } from "./style/input";

export default function Input({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Input.In = function InputIn({ ...restProps }) {
  return <Inputt {...restProps} />;
};

Input.Text = function InputText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Input.Submit = function InputSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>;
};

Input.Wrapper = function InputWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};
