import styled from "styled-components/macro";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  width: 600px;
`;
export const Inputt = styled.input`
  width: 70px;
  border: 0;
  padding: 7px;
  background: #424242;
  color: #fff;
  border-radius: 5px;
  outline-width: 0;
`;
export const Text = styled.h3`
  font-weight: 300;
  margin-right: 10px;
`;

export const Submit = styled.input`
  border: 0;
  cursor: pointer;
  outline-width: 0;
  border-radius: 5px;
  background: #e6db74;
  padding: 5px;
  color: #333;
  transition: all 0.2s ease;

  &:hover {
    background: #99914d;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 5px;
`;
