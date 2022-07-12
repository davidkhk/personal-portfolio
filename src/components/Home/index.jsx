import React from 'react';
import { Wrapper, StyledDiv } from './index-style';
import { FaAngleDown } from 'react-icons/fa';
import { SectionAnimation } from '../Animation';

const Home = ({ ...props }) => {
  return (
    <Wrapper id='home'>
      <SectionAnimation timeout={2000}>
        <StyledDiv>
          <h3>Hi there! My name is</h3>
          <div>
            <h1>David Kang</h1>
          </div>
          <p>software developer</p>
        </StyledDiv>
      </SectionAnimation>
      <a href='#work'>
        <FaAngleDown />
      </a>
    </Wrapper>
  );
};

export default Home;
