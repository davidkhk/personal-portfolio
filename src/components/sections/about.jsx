import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaReact, FaWordpress, FaCaretRight } from 'react-icons/fa';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(to bottom, #a1cae2, #b6d1e8, #c8d8ec, #d9e0ef, #e7e9f2, #ededf3, #f2f1f5, #f6f6f6, #f6f6f6, #f6f6f6, #f6f6f6, #f6f6f6);
  padding-top: 4%;
`
const Container1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 3% 5%;

    @media (max-width: 500px) {
      flex-wrap: wrap;
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

    a {
      color: var(--clr-secondary2);
      text-decoration: none;
      padding: 2px;
    
      :visited {
        color: var(--clr-secondary2)
    }

      :hover {
        padding: 2px;
        color: white;
        background-color: black;
        transition: .3s;
      }
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
      flex-wrap: wrap;
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
            <Fade left>
            <p>Born and raised in <BoldClrSecondary1>São Paulo, Brazil</BoldClrSecondary1>. Studied <BoldClrSecondary1>Finance at CUNY-Baruch College</BoldClrSecondary1> (New York City). Worked in consulting for 6 years.</p><br/>
            <p>Self taught programmer, I'm currently working as a <BoldClrSecondary1>frontend web developer</BoldClrSecondary1> at <a href='https://d3.do' target='_blank' rel='noreferrer'>D3_Company</a>.</p><br/>
            <p>Aside from coding, I'm interested in <BoldClrSecondary1>entrepreneurship</BoldClrSecondary1>. I opened a mini coffee shop business in 2020.</p>
            </Fade>
          </StyledBio>
          <StyledList>
            <Fade right>
            <p>Technical skills:</p>
            <ul>
              <li><ClrSecondary1><FaHtml5 /></ClrSecondary1>&nbsp;HTML</li>
              <li><ClrSecondary1><FaCss3Alt /></ClrSecondary1>&nbsp;CSS</li>
              <li><ClrSecondary1><FaJsSquare /></ClrSecondary1>&nbsp;Javascript</li>
              <li><ClrSecondary1><FaNodeJs /></ClrSecondary1>&nbsp;Node.js</li>
              <li><ClrSecondary1><FaReact /></ClrSecondary1>&nbsp;React</li>
              <li><ClrSecondary1><FaWordpress /></ClrSecondary1>&nbsp;Wordpress</li>
            </ul>
            </Fade>
          </StyledList>
        </Container1>
        <p>Soft skills:</p>
        <Container2>
        <Slide bottom>
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
        </Slide>
        </Container2>
      </Wrapper>
  )
};

export default About;