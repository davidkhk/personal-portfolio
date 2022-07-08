import styled, { css } from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  padding-inline: 2%;
  background-color: var(--clr-blue);
  border-top: 1px var(--clr-primary2) solid;
  padding-block: 1%;

  a {
    color: var(--clr-dark-blue);
    text-decoration: none;
    padding: 3px;
    transition: all 0.3s ease-in;
  }
  a:hover {
    color: var(--clr-blue);
    background: var(--clr-secondary1);
    border-radius: var(--border-radius);
  }
`;

export const StyledP = styled.p`
  font-size: 1rem;
  padding-block: 0.2%;
  margin: 0%;

  ${(props) =>
    props.year &&
    css`
      font-size: 0.7em;
    `};

  @media (max-width: 425px) {
    font-size: 0.7rem;
  }
`;
