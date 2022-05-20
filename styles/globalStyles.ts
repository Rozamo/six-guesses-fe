import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;
    background: white;
  }

  body {
    width: 100%;
    height: 100%;
    font-size: 16px;
  }
`;

export { GlobalStyle };
