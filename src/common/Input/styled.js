import styled, { css } from "styled-components";

export const Input = styled.input`
  padding: 8px;

  ${({ fullsize }) =>
    fullsize &&
    css`
      width: 100%;
    `}
`;