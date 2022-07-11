import React from 'react';
import {
  Wrapper,
  Container1,
  Container2,
  StyledBio,
  StyledList,
  ClrSecondary1,
} from './index-style';
import {
  FaHtml5,
  // FaCss3Alt,
  // FaJsSquare,
  // FaNodeJs,
  // FaReact,
  FaCaretRight,
} from 'react-icons/fa';
import { AboutData } from '../../utils/data';

// const icons = [FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaReact];

const technicalSkill = (skill) => {
  <li text={skill.technicalSkills}>
    <ClrSecondary1>{FaHtml5}</ClrSecondary1>
  </li>;
};

const About = () => {
  return (
    <Wrapper id='about'>
      <h1>About me</h1>
      <Container1>
        <StyledBio>
          {AboutData.mainText.paragraph1}
          <br />
          {AboutData.mainText.paragraph2}
          <br />
          {AboutData.mainText.paragraph3}
        </StyledBio>
        <StyledList>
          <p>Technical skills:</p>
          <ul>{AboutData.technicalSkills.map(technicalSkill)}</ul>
        </StyledList>
      </Container1>
      <p>Soft skills:</p>
      <Container2>
        <div>
          <p>As a finance consultant:</p>
          <ul>
            <li>
              <ClrSecondary1>
                <FaCaretRight />
              </ClrSecondary1>
              &nbsp;Critical thinking
            </li>
            <li>
              <ClrSecondary1>
                <FaCaretRight />
              </ClrSecondary1>
              &nbsp;Teamwork
            </li>
            <li>
              <ClrSecondary1>
                <FaCaretRight />
              </ClrSecondary1>
              &nbsp;Communication
            </li>
            <li>
              <ClrSecondary1>
                <FaCaretRight />
              </ClrSecondary1>
              &nbsp;Project/time management
            </li>
          </ul>
        </div>
        <div>
          <p>As a self taught developer:</p>
          <ul>
            <li>
              <ClrSecondary1>
                <FaCaretRight />
              </ClrSecondary1>
              &nbsp;Ability to learn
            </li>
            <li>
              <ClrSecondary1>
                <FaCaretRight />
              </ClrSecondary1>
              &nbsp;Developed curiousity
            </li>
            <li>
              <ClrSecondary1>
                <FaCaretRight />
              </ClrSecondary1>
              &nbsp;Dedication
            </li>
            <li>
              <ClrSecondary1>
                <FaCaretRight />
              </ClrSecondary1>
              &nbsp;Discipline
            </li>
          </ul>
        </div>
        <div>
          <p>As an entrepreneur:</p>
          <ul>
            <li>
              <ClrSecondary1>
                <FaCaretRight />
              </ClrSecondary1>
              &nbsp;Strategic thinking
            </li>
            <li>
              <ClrSecondary1>
                <FaCaretRight />
              </ClrSecondary1>
              &nbsp;Resilience
            </li>
            <li>
              <ClrSecondary1>
                <FaCaretRight />
              </ClrSecondary1>
              &nbsp;Resourcefulness
            </li>
            <li>
              <ClrSecondary1>
                <FaCaretRight />
              </ClrSecondary1>
              &nbsp;Efficiency
            </li>
          </ul>
        </div>
      </Container2>
    </Wrapper>
  );
};

export default About;
