import React from "react";
import styled from "styled-components"
import { FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaReact, FaWordpress, FaCaretRight } from "react-icons/fa";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--clr-navy-blue);
  color: var(--clr-light-blue);
  padding-block: 4%;
`

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 3% 5%;

    @media (max-width: 600px) {
      flex-direction: column;
      margin: 10%;
    }
`
 const StyledBio = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;

    p {
      margin-block: 0;
    }

    @media (max-height: 600px) {
      width: 100%;
      margin-bottom: 10%;
    }
  `

const StyledSpan = styled.span`
    font-weight: 600;
    line-height: 1.5rem;
`

  const StyledList = styled.div `
    padding: 0;
    margin: 0 0 5% 0;
    align-content: flex-start;

    p {
      margin-top: 0;
    }
    ul {
      margin: 0;
      padding: 0;
    }
    li {
      list-style-type:none;
      padding: 5px 0;
      margin: 0;
    }

    @media (max-width: 600px) {
      p {
        text-align: center;
      }
    }
  `
  const StyledSoftSkills = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;

    ul {
      margin: 0;
      padding: 0;
    }
    li {
      list-style-type: none;
    }

    @media (max-width: 600px) {
      flex-direction: column;
      margin: 5%;
    }
  `

function About(){
return (
    <Wrapper id="about">
      <h1>About me</h1>
      <StyledDiv>
        <StyledBio>
        <p>Born and raised in <StyledSpan>São Paulo, Brazil</StyledSpan>. Earned a BBA degree in <StyledSpan>Finance at CUNY-Baruch College</StyledSpan> (New York City). Worked in consulting for 3 years.</p><br/>
        <p>Self taught programmer, currently <StyledSpan>freelancing as a web developer.</StyledSpan></p><br/>
        <p>Aside from coding, I'm interested in <StyledSpan>entrepreneurship</StyledSpan>, opened a mini coffee shop business in 2020.</p>
        </StyledBio>
        <StyledList>
        <p>Technical skills:</p>
        <ul>
          <li><FaHtml5 /> HTML</li>
          <li><FaCss3Alt /> CSS</li>
          <li><FaJsSquare /> Javascript</li>
          <li><FaNodeJs /> Node.js</li>
          <li><FaReact /> React</li>
          <li><FaWordpress /> Wordpress</li>
        </ul>
        </StyledList>
      </StyledDiv>
      <p>Soft skills:</p>
      <StyledSoftSkills>
      <div>
      <p>As a finance consultant:</p>
      <ul>
        <li><FaCaretRight/> Critical thinking</li>
        <li><FaCaretRight/> Teamwork</li>
        <li><FaCaretRight/> Communication</li>
        <li><FaCaretRight/> Project/time management</li>
      </ul>
      </div>
      <div>
      <p>As a self taught programmer:</p>
      <ul>      
        <li><FaCaretRight/> Ability to learn</li>
        <li><FaCaretRight/> Developed curiousity</li>
        <li><FaCaretRight/> Humility</li>
        <li><FaCaretRight/> Dedication</li>
        <li><FaCaretRight/> Discipline</li>
      </ul>
      </div>
      <div>
      <p>As an entrepreneur:</p>
      <ul>
        <li><FaCaretRight/> Problem solving skills</li>
        <li><FaCaretRight/> Strategic thinking</li>
        <li><FaCaretRight/> Resilience</li>
        <li><FaCaretRight/> Resourcefulness</li>
        <li><FaCaretRight/> Efficiency</li>
      </ul>
      </div>
      </StyledSoftSkills>
    </Wrapper>
)
}

export default About;