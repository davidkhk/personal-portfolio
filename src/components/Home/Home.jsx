import React from "react";
import styled from "styled-components"
import { useSpring, animated } from "react-spring";
import { FaAngleDown } from "react-icons/fa";

const Wrapper = styled.section`
  background-color: var(--clr-navy-blue);
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
    color: var(--clr-yellow);
    -moz-animation: bounce 2s infinite;
    -webkit-animation: bounce 2s infinite;
    animation: bounce 2s infinite;
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
  margin-inline: 15%;

  @media (max-width: 600px) {
    h3 {
      font-size: 1rem;
    }
    h1 {
      font-size: 3rem;
    }
  }
`;

const AnimatedHeader = styled(animated.h1)`
    display: flex;
    text-shadow: 3px 3px var(--clr-red);
    font-size: 4rem;
    text-align: left;
`;

const AnimatedTitle = styled(animated.p)`
    margin-top: -2rem;
    font-style: italic;
    text-align: left;
`;
const AnimatedDot = styled(animated.h1)`
    text-shadow: 3px 3px var(--clr-red);
    font-size: 2.5rem;
    top: 10px;
`

const AnimatedGreetings = styled(animated.h3)`
  margin-bottom: 20%;
`;

function Home(){
  const propsGreetings = useSpring({
    from: {opacity: 0, marginTop: -1000},
    to: {opacity: 1, marginTop: 0}
  });
  const propsHeader = useSpring({
    from: {opacity: 0, x: -500},
    to: {opacity: 1, x: 0},
    delay: 500
  });
  const propsTitle = useSpring({
    from: {opacity: 0, marginBottom: -500},
    to: {opacity: 1, marginBottom: 0},
    delay: 1000
  });
  const propsDot = useSpring({
    from: {opacity: 0},
    to: {opacity: 1},
    loop: true
  });

  return (
    <Wrapper id="home">
      <StyledDiv>
        <AnimatedGreetings style={propsGreetings}>Hi there! My name is</AnimatedGreetings>
        <AnimatedHeader style={propsHeader}>David Kang<AnimatedDot style={propsDot}>.</AnimatedDot></AnimatedHeader>
        <AnimatedTitle style={propsTitle}>web developer</AnimatedTitle>
      </StyledDiv>
      <a href="#work"><FaAngleDown /></a>
    </Wrapper>
)
}

export default Home;