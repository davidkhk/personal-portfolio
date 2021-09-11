import React from "react";
import styled from "styled-components"

const Wrapper = styled.div`
  border: 1px var(--clr-navy) dotted;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  margin: 3%;

  div {
    width: 50%;
    margin: 2%;
  }
  ul {
    padding: 0;
    margin: 0;
  }
  li {
    display: inline-block;
    border: 1px var(--clr-navy) dotted;
    border-radius: 5px;
    text-align: center;
    margin-right: 1%;
    padding: 4px;
  }
  img {
    width: 50%;
    margin: 2%;
  }
  a {
    text-decoration: none;
    color: var(--clr-light-blue);
    border: 1px var(--clr-yellow) dotted;
    background: var(--clr-navy);
    margin-right: 5px;
    padding: 5px;
    border-radius: 5px;
    transition: 0.3s;
  }
    a:hover {
    background-color: var(--clr-yellow);
    color: var(--clr-red);
    border: 1px var(--clr-navy) dotted;
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