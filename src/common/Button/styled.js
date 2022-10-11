import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.blueStone};
  border: 2px solid transparent;
  font-size: medium;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.color.persianGreen};
  }

  &:active {
    border: 2px solid ${({ theme }) => theme.color.mineShaft};
    border-radius: 2px;
  }

  &:disabled {
    color: ${({ theme }) => theme.color.silver};
    border: 2px solid transparent;
    cursor: not-allowed;
  }
`;