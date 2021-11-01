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
    margin: 10%;
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
    margin: 3px 3px 3px 0;
    padding: 3px;
  }

  @media (max-width: 800px) {
    margin: 2%;
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
        <p>{props.subtitle}</p>
        <div>{props.techStack}</div>
        <p>{props.description}</p>
        <StyledLinks href={props.seeLiveLink} target='_blank' rel='noreferrer'>{props.seeLive}</StyledLinks>
        <StyledLinks href={props.sourceCodeLink} target='_blank' rel='noreferrer'>{props.sourceCode}</StyledLinks>
      </StyledDiv>
      <img src={props.image} alt='...'/>
    </Wrapper>
)}

export default Project;