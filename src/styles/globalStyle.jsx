import { createGlobalStyle } from "styled-components";
import variables from "./variables";

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
   background: var(--clr-light-blue);
}
  *::-webkit-scrollbar-thumb {
   background-color: var(--clr-yellow);
   border-radius: var(--border-radius);
   border: 1px solid var(--clr-red);
}

  html {
    scroll-behavior: smooth;
}
  body {
    font-family: "futura", 'Open Sans', sans-serif;
    color: var(--clr-yellow);
    margin: 0;
}
  h1 {
    text-align: center;
    font-size: 2.5rem;
}
`

export default GlobalStyle;