import React from "react";
import styled from "styled-components"

const Wrapper = styled.div`
  border: 1px var(--clr-navy-blue) dotted;
  border-radius: var(--border-radius);
  margin: 2% 5%;
  display: flex;
  flex-direction: row;

  img {
    margin: 2%;
    width: 50%;
  }

  @media (max-width: 600px) {
    flex-wrap: wrap;
    
    img {
      width: 100%;
      margin: 2%;
    }
  }
  `

const StyledDiv = styled.div`
  margin-inline: 2%;
  
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
    transition: all .2s ease-in;
  }
    a:hover {
    background-color: var(--clr-red);
    color: var(--clr-yellow);
    border: 1px var(--clr-yellow) dotted;
}
`


function Project(props){
  return (
    <Wrapper>
      <StyledDiv>
        <h2>{props.title}</h2>
        {props.techStack}
        <p>{props.description}</p>
        <a href={props.seeLive} target="_blank" rel="noreferrer">See live</a>
        <a href={props.sourceCode} target="_blank" rel="noreferrer">Source code</a>
      </StyledDiv>
      <img src={props.image} alt="..."/>
    </Wrapper>
)}

export default Project;