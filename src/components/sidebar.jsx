import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { FaGithub, FaLinkedinIn, FaAngellist } from 'react-icons/fa';

const IconsContainer = styled(animated.div)`
display: flex;
flex-direction: column;
position: fixed;
bottom: 10%;
left: 2%;

a {
    color: var(--clr-secondary2);
    font-size: 1.5rem;
    transition: 0.3s;
    padding-block: 20%;

    :hover {
    color: var(--clr-secondary1);
    }
  }

@media (max-width: 600px) {
  bottom: 8%;
  left: 1.8%;
}
`

function Sidebar() {
    const props = useSpring({
        from: {opacity: 0},
        to: {opacity: 1},
        delay: 2000,
        config: {duration: 500}
      });
    
    return(
      <IconsContainer style={props}>
        <a href='https://github.com/davidkhk' target='_blank' rel='noreferrer' className='icon'><FaGithub /></a>
        <a href='https://www.linkedin.com/in/davidkhk/' target='_blank' rel='noreferrer' className='icon'><FaLinkedinIn /></a>
        <a href='https://angel.co/u/davidkhk' target='_blank' rel='noreferrer' className='icon'><FaAngellist /></a>
      </IconsContainer>
    )
}

export default Sidebar;