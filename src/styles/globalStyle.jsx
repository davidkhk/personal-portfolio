import { createGlobalStyle } from 'styled-components';
import variables from './variables';
import FuturaBold from "../fonts/FuturaLT-Bold.woff";
import FuturaLT from "../fonts/FuturaLT.woff";
import FuturaOblique from "../fonts/FuturaLT-BookOblique.woff";

const GlobalStyle = createGlobalStyle`
  ${variables};
  
  * {
   scrollbar-width: thin;
}
  *::-webkit-scrollbar {
   width: 8px;
   height: 8px;
}
  *::-webkit-scrollbar-track {
   background: linear-gradient(to bottom, #a1cae2, #b6d1e8, #c8d8ec, #d9e0ef, #e7e9f2, #ededf3, #f2f1f5, #f6f6f6, #f6f6f6, #f6f6f6, #f6f6f6, #f6f6f6);
}
  *::-webkit-scrollbar-thumb {
   background-color: var(--clr-secondary1);
   border-radius: var(--border-radius);
   border: 1px solid var(--clr-secondary2);
}

@font-face {
  font-family: 'FuturaBold';
  src: url(${FuturaBold}) format('woff');
}
@font-face {
  font-family: 'FuturaLT';
  src: url(${FuturaLT}) format('woff');
}
@font-face {
  font-family: 'FuturaOblique';
  src: url(${FuturaOblique}) format('woff');
}

  html {
    scroll-behavior: smooth;
}
  body {
    font-family: 'FuturaLT';
    color: var(--clr-dark-blue);
    margin: 0;
}
  h1 {
    font-family: 'FuturaBold';
    font-size: 3rem;
}
`

export default GlobalStyle;