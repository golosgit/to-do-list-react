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

export const Input = styled.input`
  padding: 8px;
`;

export const Button = styled.button`
  background-color: teal;
  color: #fff;
  border: 2px solid teal;
  padding: 8px;
  transition: 0.3s;

  &:hover {
    background-color: hsl(180, 100%, 35%);
    border-color: hsl(180, 100%, 35%);
    transform: scale(1.05);
  }

  &:active {
    border-color: #333;
    border-radius: 2px;
  }
`;
