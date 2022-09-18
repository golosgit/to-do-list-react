import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    background-color: #e1e1e1;
    line-height: 1.5;
    font-family: "Montserrat", sans-serif;
    overflow-wrap: anywhere;
  }

  button {
    cursor: pointer;
  }
`;