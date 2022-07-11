import React from 'react';
import { Wrapper, StyledDiv } from './index-style';
import { FaAngleDown } from 'react-icons/fa';

const Home = () => {
  return (
    <Wrapper id='home'>
      <StyledDiv>
        <h3>Hi there! My name is</h3>
        <div>
          <h1>David Kang</h1>
        </div>
        <p>software developer</p>
      </StyledDiv>
      <a href='#work'>
        <FaAngleDown />
      </a>
    </Wrapper>
  );
};

export default Home;
