import styled from 'styled-components';

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 15%;
  left: 2%;
  z-index: 100;

  a {
    color: var(--clr-text1);
    font-size: 1.5rem;
    transition: 0.3s;
    padding-block: 20%;

    &:hover {
      color: var(--clr-text2);
    }
  }

  @media (max-width: 600px) {
    bottom: 8%;
    left: 1.8%;
  }
`;
