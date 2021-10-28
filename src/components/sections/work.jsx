import React from 'react';
import styled from 'styled-components';
import Project from '../project';
import projectsData from '../projectsData';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(to bottom, #284e78, #1e4266, #153654, #0e2b43, #082032);
  padding-block: 4%;
  width: 100%;
`

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
)}

function Work(){
    return(
        <Wrapper id='work'>
            <h1>Work</h1>
            {projectsData.map(createProject)}
        </Wrapper>
    )
}

export default Work;