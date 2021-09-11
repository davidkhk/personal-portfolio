import React from "react";

function Project(props){
  return (
    <div className="project-item-container">
      <div className="project-item">
        <h2>{props.title}</h2>
        <div className="tech-stack">{props.techStack}</div>
        <p>{props.description}</p>
        <a className="btn" href={props.seeLive} target="_blank" rel="noreferrer">See live</a>
        <a className="btn" href={props.sourceCode} target="_blank" rel="noreferrer">Source code</a>
      </div>
      {props.image}
    </div>
)}

export default Project;