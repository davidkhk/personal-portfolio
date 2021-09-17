import React, { useState } from "react";
import styled, { css } from "styled-components"
import { FaRegFilePdf } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaAngleDoubleDown } from "react-icons/fa";
import ResumeFile from "../resume.pdf";

const StyledHeader = styled.header`
@media screen and (max-width: 600px) {
  nav {
    display: flex;
    align-items: flex-start
  }
  nav ul {
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-evenly;
    height: 100vh;
  }
  div {
    display: flex;
  }
  #resume {
    font-size: 1rem;
    display: flex;
    position: absolute;
    top: 12px;
    right: 40px;
}
}
`

const StyledNav = styled.nav`
  display: flex;
  position: fixed;
  width: 100%;
  background-color: var(--clr-light-blue);
  align-items: center;
  justify-content: space-between;
  
  h4 {
    color: var(--clr-red); 
    margin: 10px;
    text-shadow: 3px 3px var(--clr-yellow);
    font-size: 1.5rem;
  }
  ul {
    display: flex;
    list-style-type: none;
    align-items: center;
    margin: 0;
    padding: 0;
  }
  a {
    color: var(--clr-navy-blue);
    display: block;
    text-decoration: none;
    transition: 0.3s;
  }
  a:hover {
    color: var(--clr-yellow);
    background: var(--clr-red);
    border-radius: var(--border-radius);
}
`
const StyledLi = styled.li`
    display: flex;
    padding: 4px;
    margin-inline: 15px;

    ${props =>
    props.resume &&
    css`
      border: 1px dotted var(--clr-navy-blue);
      border-radius: var(--border-radius);
    `};
`

const HambugerIcon = styled.div`
    display: none;
    color: var(--clr-navy-blue);
    font-size: 1.8rem;
    position: absolute;
    right: 10px;
    top: 11px;
`


function Navbar(){
  const [clicked, setClicked] = useState(false)
  const [isOpen, SetIsOpen] = useState(false);

  function handleClick() {
    setClicked(!clicked);
    SetIsOpen(!isOpen);
  };

  return (
      <StyledHeader>
        <StyledNav>
          <h4>DK.</h4>
          <HambugerIcon onClick={handleClick}>{clicked ? <FaAngleDoubleDown/> : <FaBars/>}</HambugerIcon>
          <ul>
            <StyledLi as="a" href="#home">HOME</StyledLi>
            <StyledLi as="a" href="#work">WORK</StyledLi>
            <StyledLi as="a" href="#about">ABOUT</StyledLi>
            <StyledLi as="a" href="#contact">CONTACT</StyledLi>
            <StyledLi resume id="resume" as="a" href={ResumeFile} target="_blank" rel="noreferrer">RESUME <FaRegFilePdf /></StyledLi>
          </ul>
        </StyledNav>
      </StyledHeader>
)}

export default Navbar;