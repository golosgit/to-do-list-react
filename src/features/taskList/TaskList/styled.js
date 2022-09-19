import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin: 16px 23px;
`;

export const ListItem = styled.li`
  border-bottom: 1px solid #ddd;
  padding: 10px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 15px;
  align-items: center;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  height: 30px;
  width: 30px;
  color: white;

  ${({ toggleDone }) =>
    toggleDone &&
    css`
      background-color: green;
      border: 2px solid green;
      transition: 0.3s;

      &:hover {
        background-color: hsl(120, 100%, 35%);
        border-color: hsl(120, 100%, 35%);
      }

      &:active {
        border-color: #333;
        border-radius: 2px;
      }
    `}

  ${({ remove }) =>
    remove &&
    css`
      background-color: red;
      border: 2px solid red;
      transition: 0.3s;

      &:hover {
        background-color: hsl(0, 100%, 75%);
        border-color: hsl(0, 100%, 75%);
        transform: scale(1.1);
      }

      &:active {
        border-color: #333;
        border-radius: 2px;
      }
    `}
`;

export const StyledLink = styled(Link)`
  color: hsl(180, 100%, 20%);
  text-decoration: none;

  &:hover {
    color: hsl(180, 100%, 33%);
  }
`;
