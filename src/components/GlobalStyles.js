import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #ff8db6;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    font-family: 'Lato';
    -webkit-font-smoothing: antialiased;
  }
`;

export default GlobalStyles;
