import React from "react";
import styled from "styled-components";
import { FaRegCopyright } from "react-icons/fa";

const StyledFooter = styled.footer`
  text-align: center;
  justify-content: center;
  background-color: var(--clr-light-blue);
  border-top: 1px var(--clr-navy) solid;
  color: var(--clr-navy);
  padding-block: 1%;

  p {
    font-size: 1rem;
    padding-block: .2%;
    margin: 0%;
  }
  a {
    color: var(--clr-navy);
    text-decoration: none;
    transition: 0.3s;
  }
  a:hover {
    color: var(--clr-yellow);
    background: var(--clr-red);
  }
`

function Footer(){
  const year = new Date().getFullYear();
    return (
      <StyledFooter>
        <p><a href="https://github.com/davidkhk/personal-portfolio" target="_blank" rel="noreferrer">Designed & built by David Kang</a></p>
        <p><FaRegCopyright /> {year}</p>
      </StyledFooter>
    )}

export default Footer;