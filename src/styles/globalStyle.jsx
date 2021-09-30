import { createGlobalStyle } from 'styled-components';
import variables from './variables';

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
   background: var(--clr-primary2);
}
  *::-webkit-scrollbar-thumb {
   background-color: var(--clr-secondary1);
   border-radius: var(--border-radius);
   border: 1px solid var(--clr-secondary2);
}

  html {
    scroll-behavior: smooth;
}
  body {
    font-family: 'futura', 'Open Sans', sans-serif;
    color: var(--clr-secondary2);
    margin: 0;
}
  h1 {
    font-size: 3rem;
}
`

export default GlobalStyle;