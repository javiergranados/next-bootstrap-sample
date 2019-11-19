import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    background-color: #fff;
  }
  .page::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  .page::-webkit-scrollbar-thumb {
    background-color: #a7afb4;
    border-radius: 10px;
  }
  .page::-webkit-scrollbar-track {
    background-color: white;
    border-radius: 10px;
  }
`;

export default GlobalStyle;
