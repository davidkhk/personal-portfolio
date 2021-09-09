import React from "react";
import Project from "./project";
import projectsList from "./Projects-list"

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
        <div id="work" className="section-work">
            <h1>Work</h1>
            <div className="projects-container">
              {projectsList.map(createProject)}
            </div>
        </div>
    )
}

export default Work;