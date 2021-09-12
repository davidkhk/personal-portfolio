import React from "react";
import styled, { css } from "styled-components";
import { FaRegCopyright } from "react-icons/fa";

const StyledFooter = styled.footer`
  text-align: center;
  justify-content: center;
  background-color: var(--light-blue);
  border-top: 1px var(--navy) solid;
  color: var(--navy);
  padding-block: 1%;

  a {
    color: var(--navy);
    text-decoration: none;
    transition: 0.3s;
  }
  a:hover {
    color: var(--yellow);
    background: var(--red);
    border-radius: var(--border-radius);
    padding: 2px;
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