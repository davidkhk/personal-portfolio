import React from 'react';
import { StyledFooter, StyledP } from './index-style';
import { FaRegCopyright } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <StyledFooter>
      <div>
        <StyledP>
          <a
            href='https://github.com/davidkhk/personal-portfolio'
            target='_blank'
            rel='noreferrer'
          >
            Designed & built by David Kang
          </a>
        </StyledP>
        <StyledP year>
          <FaRegCopyright /> {year}
        </StyledP>
      </div>
      <StyledP>
        <a href='mailto:hello@davidkang.me'>hello@davidkang.me</a>
      </StyledP>
    </StyledFooter>
  );
};

export default Footer;
