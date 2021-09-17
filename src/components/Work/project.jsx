import React from "react";
import styled from "styled-components"

const Wrapper = styled.div`
  border: 1px var(--clr-navy-blue) dotted;
  border-radius: var(--border-radius);
  display: flex;
  justify-content: space-between;
  margin: 2% 5%;

  ul {
    padding: 0;
    margin: 0;
  }
  li {
    display: inline-block;
    border: 1px var(--clr-navy-blue) dotted;
    border-radius: var(--border-radius);
    text-align: center;
    margin-right: 1%;
    padding: 3px;
  }
  a {
    text-decoration: none;
    color: var(--clr-light-blue);
    border: 1px var(--clr-yellow) dotted;
    background: var(--clr-navy-blue);
    margin-right: 5px;
    padding: 5px;
    border-radius: var(--border-radius);
    transition: 0.3s;
  }
    a:hover {
    background-color: var(--clr-yellow);
    color: var(--clr-red);
    border: 1px var(--clr-navy-blue) dotted;
}
    div {
    border: 1px solid red;
    margin: 1%;
    width: 45%;
}

    img {
    border: 1px solid green;
    margin: 2%;
    width: 50%;
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
      <img src={props.image} alt="..."/>
    </Wrapper>
)}

export default Project;