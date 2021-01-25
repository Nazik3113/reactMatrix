import styled from "styled-components/macro";

export const TableContainer = styled.table`
  background: #333;
  padding 30px 20px 0px 140px;
  margin-top: 20px;
  border-radius: 10px;
  position: relative;
  border-spacing: 10px 15px;
`;

export const Tr = styled.tr``;

export const Td = styled.td`
  cursor: pointer;
  user-select: none;
  padding: 5px;
  border-radius: 5px;
  width: 50px;
  position: relative;

  &:hover {
    background: #000;
  }
`;

export const Tb = styled.tbody``;

export const Bg = styled.td`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  z-index: 2;
  background: #99914d;
  border-radius: 2px;
`;

export const Average = styled.td`
  background: #682d63;
  cursor: default;
  border-radius: 5px;
  user-select: none;
  padding: 5px;
`;

export const Inner = styled.td`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 5px;
  width: 100%;
  z-index: 5;
`;

export const AbsWrapper = styled.tr`
  background: #333;
  position: absolute;
  right: 115px;
  top: 10px;
`;

export const AbsWrapperTwo = styled.tr`
  background: #333;
  position: absolute;
  left: 10px;
  bottom: 20px;
`;
export const AbsChild = styled.td``;

export const AddBtn = styled.td`
  background: #434343;
  transition: all 0.2s ease;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  font-size: 20px;

  &:hover {
    background: #3b3b3b;
  }
`;

export const ErrorText = styled.h1`
  background: #333;
  margin-top: 20px;
  padding: 20px;
  border-radius: 10px;
  max-width: 700px;
  text-align: center;
`;

export const Percentage = styled.td`
  cursor: pointer;
  user-select: none;
  padding: 5px;
  border-radius: 5px;
  transition: all 0.2s ease;
  background: #e6db74;
  color: #333;
  width: 60px;

  &:hover {
    background: #99914d;
  }
`;

export const Button = styled.td`
  background: #434343;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #3b3b3b;
  }
`;
