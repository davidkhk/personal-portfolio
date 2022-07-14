import React from 'react';
import { Wrapper } from './index-style';
import Project from './components/Project/index';
import { projectsData } from '../../utils/data';

const createProject = (projectsData) => {
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
};

function Work() {
  return (
    <Wrapper id='work'>
      <h1>Work</h1>
      {projectsData.map(createProject)}
    </Wrapper>
  );
}

export default Work;
