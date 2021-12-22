import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { FaRegFilePdf, FaBars, FaAngleDoubleDown } from 'react-icons/fa';
import ResumeFile from '../assets/resume.pdf';

const AnimatedNav = styled(animated.nav)`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: var(--clr-blue);

  @media (max-width: 600px) {
    #resume {
    position: absolute;
    right: 12%;
    top: 8px;
  }
  }
`;

const Logo = styled.h1`
  margin: .5rem;
  text-shadow: 3px 3px var(--clr-secondary1);
  font-size: 1.5rem;
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  font-size: 1.5rem;
  padding-inline: 1rem;

  @media (max-width: 600px) {
      display: flex;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;

  @media (max-width: 600px) {
      overflow: hidden;
      flex-direction: column;
      width: 100%;
      padding-bottom: ${({isOpen}) => (isOpen ? '.5rem' : '0')};
      max-height: ${({isOpen}) => (isOpen ? '300px' : '0')};
      transition: max-height .3s ease-in;
  }
`;

const MenuLinks = styled.a`
  margin-inline: .5rem;
  padding: .3rem;
  cursor: pointer;
  text-decoration: none;
  color: var(--clr-dark-blue);
  transition: all .2s ease-in;
 
  &:hover {
    color: var(--clr-blue);
    background: var(--clr-secondary1);
    border-radius: var(--border-radius);
}

  ${props =>
    props.resume &&
    css`
      border: 1px solid var(--clr-dark-blue);
      border-radius: var(--border-radius);
    `}
`;

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    
    function handleClick() {
        setIsOpen(!isOpen)
    };

    const props = useSpring({
      from: {opacity: 0},
      to: {opacity: 1},
      delay: 2000,
      config: {duration: 500}
    });

    return(
      <AnimatedNav style={props} >
        <Logo>DK.</Logo>
        <Hamburger onClick={handleClick}>
        {isOpen ? <FaAngleDoubleDown/> : <FaBars/>}
        </Hamburger>
        <Menu isOpen={isOpen}>
          <MenuLinks href='#home'>HOME</MenuLinks>
          <MenuLinks href='#work'>WORK</MenuLinks>
          <MenuLinks href='#about'>ABOUT</MenuLinks>
          <MenuLinks href='#contact'>CONTACT</MenuLinks>
        </Menu>
        <MenuLinks resume id='resume' href={ResumeFile} target='_blank' rel='noreferrer'>RESUME <FaRegFilePdf /></MenuLinks>
      </AnimatedNav>
    );
}

export default Navbar;