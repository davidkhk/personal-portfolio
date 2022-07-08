import React from 'react';
import { Wrapper, StyledDiv, StyledLinks } from './index-style';

const Project = (props) => {
  return (
    <Wrapper>
      <StyledDiv>
        <h2>{props.title}</h2>
        <p>{props.subtitle}</p>
        <div>{props.techStack}</div>
        <p>{props.description}</p>
        <StyledLinks href={props.seeLiveLink} target='_blank' rel='noreferrer'>
          {props.seeLive}
        </StyledLinks>
        <StyledLinks
          href={props.sourceCodeLink}
          target='_blank'
          rel='noreferrer'
        >
          {props.sourceCode}
        </StyledLinks>
      </StyledDiv>
      <img src={props.image} alt='...' />
    </Wrapper>
  );
};

export default Project;
