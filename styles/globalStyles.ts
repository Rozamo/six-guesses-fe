import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;
    background: white;
  }

  html {
    font-size: 16px;
  }

  body {
    width: 100%;
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
`;

export { GlobalStyle };
