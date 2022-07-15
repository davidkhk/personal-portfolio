import React from 'react';
import { Wrapper, Container1, Container2, StyledBio } from './index-style';
import { AboutData } from '../../utils/data';
import TechnicalSkillListItem from './components/TechnicalSkillListItem';
import SoftSkillListItem from './components/SoftSkilssListItem';
import { FadeIn } from '../Animation';

const technicalSkill = (props) => {
  return <TechnicalSkillListItem skill={props.skill} icon={props.icon} />;
};

const softSkillListItem = (props) => {
  return <SoftSkillListItem title={props.title} skills={props.skills} />;
};

const About = () => {
  return (
    <Wrapper id='about'>
      <h1>About me</h1>
      <FadeIn timeout={1000} delay={0.2}>
        <Container1>
          <StyledBio>
            {AboutData.mainText.paragraph1}
            <br />
            {AboutData.mainText.paragraph2}
            <br />
            {AboutData.mainText.paragraph3}
          </StyledBio>
          <div>
            <p>Technical skills:</p>
            <ul>{AboutData.technicalSkills.map(technicalSkill)}</ul>
          </div>
        </Container1>
      </FadeIn>
      <p>Soft skills:</p>
      <Container2>{AboutData.softSkills.map(softSkillListItem)}</Container2>
    </Wrapper>
  );
};

export default About;
