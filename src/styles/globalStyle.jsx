import { createGlobalStyle } from 'styled-components';
import variables from './variables';
import FuturaBold from '../assets/fonts/FuturaLT-Bold.woff';
import FuturaLT from '../assets/fonts/FuturaLT.woff';
import FuturaOblique from '../assets/fonts/FuturaLT-BookOblique.woff';

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
   background: linear-gradient(180deg, #787878 0%, #ededed 100%)

}
  *::-webkit-scrollbar-thumb {
   background-color: var(--clr-fill1);
   border-radius: var(--border-radius);
   border: 1px solid var(--clr-text2);
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
    color: var(--clr-text1);
    margin: 0;
}
  h1 {
    font-family: 'FuturaBold';
    font-size: 3rem;
}
`;

export default GlobalStyle;
