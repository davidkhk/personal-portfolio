import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { FaAngleDown } from 'react-icons/fa';

const Wrapper = styled.section`
  background-image: linear-gradient(to bottom, #a1cae2, #b6d1e8, #c8d8ec, #d9e0ef, #e7e9f2, #ededf3, #f2f1f5, #f6f6f6, #f6f6f6, #f6f6f6, #f6f6f6, #f6f6f6);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    -moz-animation: bounce 2s infinite;
    -webkit-animation: bounce 2s infinite;
    animation: bounce 2s infinite;
    position: absolute;
    bottom: 2%;
    color: var(--clr-dark-blue);
  }
  @keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}
`

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  height: auto;

  @media (max-width: 600px) {
    width: 50%;
    margin-left: 60px;
    
    h3 {
      font-size: .8rem;
    }
    h1 {
      font-size: 2.8rem;
    }
  }
`;

const AnimatedGreetings = styled(animated.h3)`
  margin-bottom: 10%;
`;

const AnimatedName = styled(animated.div)`
    display: flex;
    text-shadow: 3px 3px var(--clr-secondary1);
    font-size: 4rem;
    text-align: left;
`;

const AnimatedDot = styled(animated.h1)`
`;

const AnimatedTitle = styled(animated.p)`
    font-family: 'FuturaOblique';
    margin-top: -1.5rem;
    font-style: italic;
    text-align: left;
`;

function Home(){
  const propsGreetings = useSpring({
    from: {opacity: 0, marginTop: -1000},
    to: {opacity: 1, marginTop: 0}
  });
  const propsHeader = useSpring({
    from: {opacity: 0, x: -500},
    to: {opacity: 1, x: 0},
    delay: 1000
  });
  const propsTitle = useSpring({
    from: {opacity: 0, marginBottom: -500},
    to: {opacity: 1, marginBottom: 0},
    delay: 1500
  });
  const propsDot = useSpring({
    from: {opacity: 0},
    to: {opacity: 1},
    config: {duration: 500},
    delay: 2000,
    loop: true
  });

  return (
    <Wrapper id='home'>
      <StyledDiv>
        <AnimatedGreetings style={propsGreetings}>Hi there! My name is</AnimatedGreetings>
        <AnimatedName style={propsHeader}>
          <h1>David Kang</h1>
          <AnimatedDot style={propsDot}>.</AnimatedDot>
        </AnimatedName>
        <AnimatedTitle style={propsTitle}>software developer</AnimatedTitle>
      </StyledDiv>
      <a href='#work'><FaAngleDown /></a>
    </Wrapper>
)
}

export default Home;