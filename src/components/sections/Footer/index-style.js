import styled, { css } from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  padding-inline: 2%;
  background-color: var(--clr-background1);
  border-top: 1px var(--clr-text2) solid;
  padding-block: 1%;

  a {
    color: var(--clr-text1);
    text-decoration: none;
    padding: 3px;
    transition: all 0.3s ease-in;

    &:hover {
      color: var(--clr-text2);
      background: var(--clr-fill1);
      border-radius: var(--border-radius);
    }
  }
`;

export const StyledP = styled.p`
  font-size: 1rem;
  padding-block: 0.2%;
  margin: 0%;

  ${(props) =>
    props.year &&
    css`
      font-size: 0.7rem;
    `};

  @media (max-width: 425px) {
    font-size: 0.7rem;
  }
`;
