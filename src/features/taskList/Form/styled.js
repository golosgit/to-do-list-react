import styled from "styled-components";

export const FormBody = styled.form`
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 165px;
  grid-gap: 20px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
`;

export const FormButton = styled.button`
  background-color: ${({ theme }) => theme.color.teal};
  color: ${({ theme }) => theme.color.white};;
  border: 2px solid ${({ theme }) => theme.color.teal};
  padding: 8px;
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.color.blueStone};
    border-color: ${({ theme }) => theme.color.blueStone};
    transform: scale(1.05);
  }

  &:active {
    border-color: ${({ theme }) => theme.color.mineShaft};
    border-radius: 2px;
  }
`;