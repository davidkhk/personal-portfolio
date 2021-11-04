import React from 'react';
import styled from 'styled-components';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaReact, FaWordpress, FaCaretRight } from 'react-icons/fa';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(to bottom, #082032, #0e2b43, #153654, #1e4266, #284e78);
  padding-block: 4%;
`

const Container1 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 3% 5%;

    @media (max-width: 500px) {
      flex-direction: column;
      margin: 10% 10% 0 10%;
    }
`
 const StyledBio = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;

    @media (max-width: 500px) {
      width: 100%;
      margin-bottom: 10%;
    }
    p {
      margin-block: 0;
    }
  `

  const BoldClrSecondary1 = styled.span`
    color: var(--clr-secondary1);
    font-weight: 600;
    line-height: 1.5rem;
  `

  const StyledList = styled.div`
    p {
      margin-top: 0;
    }
    ul {
      padding: 0;
    }
    li {
      display: flex;
      flex-direction: row;
      list-style-type: none;
      padding: 5px 0;
      margin: 0;
    }

    @media (max-width: 500px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `
  const Container2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 70%;

    ul {
      margin: 0;
      padding: 0;
    }
    li {
      display: flex;
      flex-direction: row;
      list-style-type: none;
    }

    @media (max-width: 800px) {
      width: auto;
      flex-direction: column;
      align-items: left;
    }
  `

const ClrSecondary1 = styled.span`
    color: var(--clr-secondary1);
`

function About(){
return (
    <Wrapper id='about'>
      <h1>About me</h1>
      <Container1>
        <StyledBio>
        <p>Born and raised in <BoldClrSecondary1>São Paulo, Brazil</BoldClrSecondary1>. Earned a BBA degree in <BoldClrSecondary1>Finance at CUNY-Baruch College</BoldClrSecondary1> (New York City). Worked in consulting for 3 years.</p><br/>
        <p>Self taught programmer, currently <BoldClrSecondary1>freelancing as a web developer.</BoldClrSecondary1></p><br/>
        <p>Aside from coding, I'm interested in <BoldClrSecondary1>entrepreneurship</BoldClrSecondary1>, opened a mini coffee shop business in 2020.</p>
        </StyledBio>
        <StyledList>
        <p>Technical skills:</p>
        <ul>
          <li><ClrSecondary1><FaHtml5 /></ClrSecondary1>&nbsp;HTML</li>
          <li><ClrSecondary1><FaCss3Alt /></ClrSecondary1>&nbsp;CSS</li>
          <li><ClrSecondary1><FaJsSquare /></ClrSecondary1>&nbsp;Javascript</li>
          <li><ClrSecondary1><FaNodeJs /></ClrSecondary1>&nbsp;Node.js</li>
          <li><ClrSecondary1><FaReact /></ClrSecondary1>&nbsp;React</li>
          <li><ClrSecondary1><FaWordpress /></ClrSecondary1>&nbsp;Wordpress</li>
        </ul>
        </StyledList>
      </Container1>
    <p>Soft skills:</p>
      <Container2>
      <div>
      <p>As a finance consultant:</p>
      <ul>
        <li><ClrSecondary1><FaCaretRight/></ClrSecondary1>&nbsp;Critical thinking</li>
        <li><ClrSecondary1><FaCaretRight/></ClrSecondary1>&nbsp;Teamwork</li>
        <li><ClrSecondary1><FaCaretRight/></ClrSecondary1>&nbsp;Communication</li>
        <li><ClrSecondary1><FaCaretRight/></ClrSecondary1>&nbsp;Project/time management</li>
      </ul>
      </div>
      <div>
      <p>As a self taught developer:</p>
      <ul>      
        <li><ClrSecondary1><FaCaretRight/></ClrSecondary1>&nbsp;Ability to learn</li>
        <li><ClrSecondary1><FaCaretRight/></ClrSecondary1>&nbsp;Developed curiousity</li>
        <li><ClrSecondary1><FaCaretRight/></ClrSecondary1>&nbsp;Humility</li>
        <li><ClrSecondary1><FaCaretRight/></ClrSecondary1>&nbsp;Dedication</li>
        <li><ClrSecondary1><FaCaretRight/></ClrSecondary1>&nbsp;Discipline</li>
      </ul>
      </div>
      <div>
      <p>As an entrepreneur:</p>
      <ul>
        <li><ClrSecondary1><FaCaretRight/></ClrSecondary1>&nbsp;Problem solving skills</li>
        <li><ClrSecondary1><FaCaretRight/></ClrSecondary1>&nbsp;Strategic thinking</li>
        <li><ClrSecondary1><FaCaretRight/></ClrSecondary1>&nbsp;Resilience</li>
        <li><ClrSecondary1><FaCaretRight/></ClrSecondary1>&nbsp;Resourcefulness</li>
        <li><ClrSecondary1><FaCaretRight/></ClrSecondary1>&nbsp;Efficiency</li>
      </ul>
      </div>
      </Container2>
    </Wrapper>
)
}

export default About;