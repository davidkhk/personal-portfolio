import React from "react";
import styled, { css } from "styled-components"
import variables from "../../variables";
import { FaRegFilePdf } from "react-icons/fa";
import ResumeFile from "../resume.pdf";

const StyledNav = styled.nav`
  display: inline-block;
  background-color: var(--light-blue);
  position: fixed;
  width: 100%;
  
  h4 {
    color: var(--red); 
    margin: 10px;
    float: left;
    text-shadow: 3px 3px var(--yellow);
    font-size: 1.5rem;
  }
  ul {
    list-style-type:none;
    padding: auto;
    text-align:right;
    margin: 0.1% 0 0 0;
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
const StyledLi = styled.li`
    margin: 0.74%;
    padding: 5px;
    display: inline-block;
    
    ${props =>
    props.resume &&
    css`
      border: 1px dotted var(--navy-blue);
      border-radius: 5px;
    `};
`

function Navbar(){
    return (
      <StyledNav>
        <h4>DK.</h4>
        <ul>
          <StyledLi as="a" href="#home">HOME</StyledLi>
          <StyledLi as="a" href="#work">WORK</StyledLi>
          <StyledLi as="a" href="#about">ABOUT</StyledLi>
          <StyledLi as="a" href="#contact">CONTACT</StyledLi>
          <StyledLi resume as="a" href={ResumeFile} target="_blank" rel="noreferrer">RESUME <FaRegFilePdf /></StyledLi>
        </ul>
      </StyledNav>
)}

export default Navbar;