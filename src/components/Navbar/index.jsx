import React, { useState } from 'react';
import { StyledNav, Logo, Hamburger, Menu, MenuLinks } from './index-style.js';
import { FaRegFilePdf, FaBars, FaAngleDoubleDown } from 'react-icons/fa';
import { FadeIn } from '../Animation/index.jsx';

const resumeLink =
  'https://drive.google.com/open?id=1DyO6arjfoSepsffYuxxto7yiJJu3cqKJ&authuser=davidkhk%40gmail.com&usp=drive_fs';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <FadeIn timeout={1000}>
      <StyledNav>
        <Logo>DK.</Logo>
        <Hamburger onClick={handleClick}>
          {isOpen ? <FaAngleDoubleDown /> : <FaBars />}
        </Hamburger>
        <Menu isOpen={isOpen}>
          <MenuLinks href='#home'>HOME</MenuLinks>
          <MenuLinks href='#work'>WORK</MenuLinks>
          <MenuLinks href='#about'>ABOUT</MenuLinks>
          <MenuLinks href='#contact'>CONTACT</MenuLinks>
        </Menu>
        <MenuLinks
          resume
          id='resume'
          href={resumeLink}
          target='_blank'
          rel='noreferrer'
        >
          RESUME <FaRegFilePdf />
        </MenuLinks>
      </StyledNav>
    </FadeIn>
  );
};

export default Navbar;
