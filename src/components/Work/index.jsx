import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Project from './components/Project/index';
import { projectsData } from '../../utils/data';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(
    to bottom,
    #f6f6f6,
    #f6f6f6,
    #f6f6f6,
    #f6f6f6,
    #f6f6f6,
    #f2f1f5,
    #ededf3,
    #e7e9f2,
    #d9e0ef,
    #c8d8ec,
    #b6d1e8,
    #a1cae2
  );
  padding-block: 4%;
  width: 100%;
`;

function createProject(projectsData) {
  return (
    <Project
      title={projectsData.title}
      subtitle={projectsData.subtitle}
      techStack={projectsData.techStack}
      description={projectsData.description}
      image={projectsData.image}
      seeLiveLink={projectsData.seeLiveLink}
      sourceCodeLink={projectsData.sourceCodeLink}
      seeLive={projectsData.seeLive}
      sourceCode={projectsData.sourceCode}
    />
  );
}

function Work() {
  return (
    <Wrapper id='work'>
      <h1>Work</h1>
      <Fade left>{projectsData.map(createProject)}</Fade>
    </Wrapper>
  );
}

export default Work;
