import React from "react";
import styled from "styled-components"
import { FaAngleDown } from "react-icons/fa";

const Wrapper = styled.section`
  background-color: var(--navy);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
  }
  h1 {
    text-shadow: 3px 3px var(--red);
    font-size: 5rem;
    text-align: left;
  }
  p {
    margin-top: -2rem;
    font-style: italic;
    text-align: left;
  }
  a {
    -moz-animation: bounce 2s infinite;
    -webkit-animation: bounce 2s infinite;
    animation: bounce 2s infinite;
    position: absolute;
    bottom: 2%;
    color: var(--yellow);
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

function Home(){
return (
    <Wrapper id="home">
      <div>
        <h3>Hi there! My name is</h3>
        <h1>David Kang</h1>
        <p>web developer</p>
      </div>
      <a href="#work"><FaAngleDown /></a>
    </Wrapper>
)
}

export default Home;