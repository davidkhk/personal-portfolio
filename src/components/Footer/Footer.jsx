import React from "react";
import styled, { css } from "styled-components";
import { FaRegCopyright } from "react-icons/fa";

const StyledFooter = styled.footer`
  text-align: center;
  justify-content: center;
  background-color: var(--clr-primary2);
  border-top: 1px var(--clr-primary1) solid;
  color: var(--clr-primary1);
  padding-block: 1%;

  a {
    color: var(--clr-primary1);
    text-decoration: none;
    padding: 2px;
    transition: all 0.3s ease-in;
  }
  a:hover {
    color: var(--clr-seconday1);
    background: var(--clr-seconday2);
    border-radius: var(--border-radius);
  }
`

const StyledP = styled.p`
  font-size: 1rem;
  padding-block: .2%;
  margin: 0%;
  
  ${props =>
    props.year &&
    css`
      font-size 0.7em;
    `};
`

function Footer(){
  const year = new Date().getFullYear();
    return (
      <StyledFooter>
        <StyledP><a href="https://github.com/davidkhk/personal-portfolio" target="_blank" rel="noreferrer">Designed & built by David Kang</a></StyledP>
        <StyledP year><FaRegCopyright /> {year}</StyledP>
      </StyledFooter>
    )}

export default Footer;