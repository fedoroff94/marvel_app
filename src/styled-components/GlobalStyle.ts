import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    background: url('images/background.webp') no-repeat center;
    width: 100vw;
    height: 100vh;
  }
`;
 
export default GlobalStyle;