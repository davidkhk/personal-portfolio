import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: var(--clr-primary1);
  border-radius: var(--border-radius);
  margin: 2% 10%;
  display: flex;
  flex-direction: row;

  img {
    margin: 2%;
    object-fit: contain;
    width: 50%;
  }

  @media (max-width: 800px) {
    flex-wrap: wrap;
    
    img {
      width: 95%;
      object-fit: contain;
    }
  }
  `

const StyledDiv = styled.div`
  padding: 2%;
  margin-bottom: 2%;
  
  ul {
    padding: 0;
    margin: 0;
  }
  li {
    display: inline-block;
    border: 1px var(--clr-secondary2) solid;
    border-radius: var(--border-radius);
    text-align: center;
    margin-right: 1%;
    padding: 3px;
  }
`
const StyledLinks = styled.a`
  text-decoration: none;
  color: var(--clr-secondary2);
  border: 1px var(--clr-secondary1) solid;
  background: var(--clr-primary1);
  margin-right: 10px;
  padding: 5px;
  border-radius: var(--border-radius);
  transition: all .2s ease-in;

  :hover {
    background-color: var(--clr-secondary2);
    color: var(--clr-secondary1);
    border: 1px var(--clr-secondary1) solid;
}
`


function Project(props){
  return (
    <Wrapper>
      <StyledDiv>
        <h2>{props.title}</h2>
        <div>{props.techStack}</div>
        <p>{props.description}</p>
        <StyledLinks href={props.seeLive} target='_blank' rel='noreferrer'>See live</StyledLinks>
        <StyledLinks href={props.sourceCode} target='_blank' rel='noreferrer'>Source code</StyledLinks>
      </StyledDiv>
      <img src={props.image} alt='...'/>
    </Wrapper>
)}

export default Project;