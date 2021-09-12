import { createGlobalStyle } from "styled-components";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`
  ${variables};
  
  html {
    scroll-behavior: smooth;
}
  body {
    font-family: "futura", 'Open Sans', sans-serif;
    color: var(--yellow);
    margin: 0;
}
  h1 {
    text-align: center;
    font-size: 2.5rem;
}
`

export default GlobalStyle;