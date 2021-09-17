import React from "react";
import styled from "styled-components"
import { FaAngleDown } from "react-icons/fa";

const Wrapper = styled.section`
  background-color: var(--clr-navy-blue);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
  div {
    display: flex;
    flex-direction: column;
    margin-inline: 15%;
    padding-bottom: 5%;
  }
  h3 {
    margin: 0;
  }
  h1 {
    text-shadow: 3px 3px var(--clr-red);
    font-size: 4rem;
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