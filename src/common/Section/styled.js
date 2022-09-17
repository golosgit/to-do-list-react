import styled, { css } from "styled-components";

export const Content = styled.h2`
  border-bottom: 1px solid #ddd;
  padding: 15px 20px;
  margin-bottom: 0;
  font-size: 20px;
  display: grid;
  grid-template-columns: 1fr auto auto;
  grid-gap: 25px;

  ${({ oneButton }) =>
    oneButton &&
    css`
      grid-template-columns: 1fr auto;
    `}

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-gap: 15px;
  }
`;

export const StyledSection = styled.section`
  background-color: white;
  margin: 0 20px;

  ${({ listSection }) =>
    listSection &&
    css`
      padding-bottom: 20px;
    `}
`;
