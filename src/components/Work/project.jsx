import React from "react";
import styled from "styled-components"

const Wrapper = styled.div`
  border: 1px var(--navy) dotted;
  border-radius: var(--border-radius);
  display: flex;
  justify-content: space-between;
  margin: 2% 5%;

  div {
    margin: 2%;
  }

  ul {
    padding: 0;
    margin: 0;
  }
  li {
    display: inline-block;
    border: 1px var(--navy) dotted;
    border-radius: var(--border-radius);
    text-align: center;
    margin-right: 1%;
    padding: 3px;
  }
  img {
    width: 50%;
    margin: 2%;
  }
  a {
    text-decoration: none;
    color: var(--light-blue);
    border: 1px var(--yellow) dotted;
    background: var(--navy);
    margin-right: 5px;
    padding: 5px;
    border-radius: var(--border-radius);
    transition: 0.3s;
  }
    a:hover {
    background-color: var(--yellow);
    color: var(--red);
    border: 1px var(--navy) dotted;
}
`

function Project(props){
  return (
    <Wrapper>
      <div>
        <h2>{props.title}</h2>
        {props.techStack}
        <p>{props.description}</p>
        <a href={props.seeLive} target="_blank" rel="noreferrer">See live</a>
        <a href={props.sourceCode} target="_blank" rel="noreferrer">Source code</a>
      </div>
      {props.image}
    </Wrapper>
)}

export default Project;