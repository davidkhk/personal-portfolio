import styled from 'styled-components';

export const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: linear-gradient(180deg, #837d7d 0%, #d6d0b8 100%); */
  background: linear-gradient(180deg, #cacaca 0%, #f5efe3 100%);

  a {
    -moz-animation: bounce 2s infinite;
    -webkit-animation: bounce 2s infinite;
    animation: bounce 2s infinite;
    position: absolute;
    bottom: 2%;
    color: var(--clr-text1);
  }
  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;

  @media (max-width: 600px) {
    width: 50%;
    margin-left: 60px;

    h3 {
      font-size: 0.8rem;
    }
    h1 {
      font-size: 2.8rem;
    }
  }
`;
