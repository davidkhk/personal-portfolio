import React from 'react';
import {
  Wrapper,
  StyledDiv,
  AnimatedGreetings,
  AnimatedName,
  AnimatedTitle,
  AnimatedDot,
} from './index-style';
import { useSpring } from 'react-spring';
import { FaAngleDown } from 'react-icons/fa';

const Home = () => {
  const propsGreetings = useSpring({
    from: { opacity: 0, marginTop: -1000 },
    to: { opacity: 1, marginTop: 0 },
  });
  const propsHeader = useSpring({
    from: { opacity: 0, x: -500 },
    to: { opacity: 1, x: 0 },
    delay: 1000,
  });
  const propsTitle = useSpring({
    from: { opacity: 0, marginBottom: -500 },
    to: { opacity: 1, marginBottom: 0 },
    delay: 1500,
  });
  const propsDot = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
    delay: 2000,
    loop: true,
  });

  return (
    <Wrapper id='home'>
      <StyledDiv>
        <AnimatedGreetings style={propsGreetings}>
          Hi there! My name is
        </AnimatedGreetings>
        <AnimatedName style={propsHeader}>
          <h1>David Kang</h1>
          <AnimatedDot style={propsDot}>.</AnimatedDot>
        </AnimatedName>
        <AnimatedTitle style={propsTitle}>software developer</AnimatedTitle>
      </StyledDiv>
      <a href='#work'>
        <FaAngleDown />
      </a>
    </Wrapper>
  );
};

export default Home;
