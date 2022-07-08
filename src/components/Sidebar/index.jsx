import React from 'react';
import { IconsContainer } from './index-style';
import { useSpring } from 'react-spring';
import { FaGithub, FaLinkedinIn, FaAngellist } from 'react-icons/fa';

const Sidebar = () => {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 2000,
    config: { duration: 500 },
  });

  return (
    <IconsContainer style={props}>
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
  );
};

export default Sidebar;
