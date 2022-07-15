import React from 'react';
import { IconsContainer } from './index-style';
import { FaGithub, FaLinkedinIn, FaAngellist } from 'react-icons/fa';
import { FadeIn } from '../Animation';

const Sidebar = () => {
  return (
    <FadeIn timeout={1000}>
      <IconsContainer>
        <a
          href='https://github.com/davidkhk'
          target='_blank'
          rel='noreferrer'
          className='icon'
        >
          <FaGithub />
        </a>
        <a
          href='https://www.linkedin.com/in/davidkhk/'
          target='_blank'
          rel='noreferrer'
          className='icon'
        >
          <FaLinkedinIn />
        </a>
        <a
          href='https://angel.co/u/davidkhk'
          target='_blank'
          rel='noreferrer'
          className='icon'
        >
          <FaAngellist />
        </a>
      </IconsContainer>
    </FadeIn>
  );
};

export default Sidebar;
