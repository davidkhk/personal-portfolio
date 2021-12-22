import React from 'react';
import styled, { css } from 'styled-components';
import { FaRegCopyright } from 'react-icons/fa';

const StyledFooter = styled.footer`
  text-align: center;
  justify-content: center;
  background-color: var(--clr-blue);
  border-top: 1px var(--clr-primary2) solid;
  padding-block: 1%;

  a {
    color: var(--clr-dark-blue);
    text-decoration: none;
    padding: 3px;
    transition: all 0.3s ease-in;
  }
  a:hover {
    color: var(--clr-blue);
    background: var(--clr-secondary1);
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
        <StyledP><a href='https://github.com/davidkhk/personal-portfolio' target='_blank' rel='noreferrer'>Designed & built by David Kang</a></StyledP>
        <StyledP year><FaRegCopyright /> {year}</StyledP>
      </StyledFooter>
    )}

export default Footer;