import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4% 0 1.03% 0;
  width: 100%;
  background: linear-gradient(
    180deg,
    var(--clr-background2) 0%,
    var(--clr-background1) 100%
  );

  p {
    margin: 2px;
  }
`;
