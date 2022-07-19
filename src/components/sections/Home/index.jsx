import React from 'react';
import { Wrapper, StyledDiv } from './index-style';
import { FaAngleDown } from 'react-icons/fa';
import { FadeIn } from '../../Animation';

const Home = () => {
  return (
    <Wrapper id='home'>
      <StyledDiv>
        <FadeIn timeout={1000} delay={1}>
          <h3>Hi there!</h3>
        </FadeIn>
        <FadeIn timeout={1000} delay={2}>
          <h1>David Kang</h1>
        </FadeIn>
        <FadeIn timeout={1000} delay={3}>
          <p>software developer</p>
        </FadeIn>
      </StyledDiv>
      <a href='#work'>
        <FaAngleDown />
      </a>
    </Wrapper>
  );
};

export default Home;
