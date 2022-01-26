import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  box-sizing: border-box;

  body {
    margin: 0;
    padding: 0;
    background-color: #3f3f3f;
    font-family: 'Noto Sans JP', sans-serif;
  }
`;

export default GlobalStyle;
