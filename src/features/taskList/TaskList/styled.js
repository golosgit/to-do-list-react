import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin: 16px 23px;
`;

export const ListItem = styled.li`
  border-bottom: 1px solid ${({ theme }) => theme.color.mercury};
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
  color: ${({ theme }) => theme.color.white};

  ${({ toggleDone }) =>
    toggleDone &&
    css`
      background-color: ${({ theme }) => theme.color.japaneseLaurel};
      border: 2px solid ${({ theme }) => theme.color.japaneseLaurel};
      transition: 0.3s;

      &:hover {
        background-color: ${({ theme }) => theme.color.green};
        border-color: ${({ theme }) => theme.color.green};
      }

      &:active {
        border-color: ${({ theme }) => theme.color.mineShaft};
        border-radius: 2px;
      }
    `}

  ${({ remove }) =>
    remove &&
    css`
      background-color: ${({ theme }) => theme.color.red};
      border: 2px solid ${({ theme }) => theme.color.red};
      transition: 0.3s;

      &:hover {
        background-color: ${({ theme }) => theme.color.vividTangerine};
        border-color: ${({ theme }) => theme.color.vividTangerine};
        transform: scale(1.1);
      }

      &:active {
        border-color: ${({ theme }) => theme.color.mineShaft};
        border-radius: 2px;
      }
    `}
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.color.blueStone};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.color.persianGreen};
  }
`;