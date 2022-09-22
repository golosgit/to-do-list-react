import styled, { css } from "styled-components";

export const Button = styled.button`
  background-color: white;
  color: hsl(180, 100%, 20%);
  border: 2px solid transparent;
  font-size: medium;
  transition: color 0.3s;

  &:hover {
    color: hsl(180, 100%, 33%);
  }

  &:active {
    border: 2px solid #333;
    border-radius: 2px;
  }

  &:disabled {
    color: #bbb;
    border: 2px solid transparent;
    cursor: not-allowed;
  }
`;

export const Input = styled.input`
  padding: 8px;

  ${({ fullsize }) =>
    fullsize &&
    css`
      width: 100%;
    `}
`;