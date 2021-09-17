import React from "react";
import styled from "styled-components"
import Project from "./project";
import projectsList from "./Projects-list"

const Wrapper = styled.section`
  background-color: var(--clr-light-blue);
  color: var(--clr-navy-blue);
  padding-block: 4%;
  width: 100%;
`

function createProject(projectsList) {
  return (
  <Project 
    title={projectsList.title}
    techStack={projectsList.techStack}
    description={projectsList.description}
    image={projectsList.image}
    seeLive={projectsList.seeLive}
    sourceCode={projectsList.sourceCode}
  />
)}

function Work(){
    return(
        <Wrapper id="work">
            <h1>Work</h1>
            {projectsList.map(createProject)}
        </Wrapper>
    )
}

export default Work;