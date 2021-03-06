import styled from 'styled-components';

export const Wrapper = styled.div`
  border-radius: var(--border-radius);
  margin: 2% 10%;
  display: flex;
  flex-direction: row;
  box-shadow: 3px 3px 10px var(--clr-dark-blue);

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
`;

export const StyledDiv = styled.div`
  padding: 2%;
  margin-bottom: 2%;

  ul {
    padding: 0;
    margin: 0;
  }
  li {
    display: inline-block;
    border: 1px var(--clr-secondary1) solid;
    border-radius: var(--border-radius);
    text-align: center;
    margin: 3px 3px 3px 0;
    padding: 3px;
  }

  @media (max-width: 800px) {
    margin: 2%;
  }
`;
export const StyledLinks = styled.a`
  text-decoration: none;
  color: var(--clr-dark-blue);
  border: 1px var(--clr-secondary1) solid;
  margin-right: 10px;
  padding: 5px;
  border-radius: var(--border-radius);
  transition: all 0.2s ease-in;

  :hover {
    background-color: var(--clr-dark-blue);
    color: var(--clr-secondary1);
    border: 1px var(--clr-secondary1) solid;
  }
`;
