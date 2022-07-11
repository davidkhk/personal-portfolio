import styled from 'styled-components';

export const Wrapper = styled.section`
  background-image: linear-gradient(
    to bottom,
    #a1cae2,
    #b6d1e8,
    #c8d8ec,
    #d9e0ef,
    #e7e9f2,
    #ededf3,
    #f2f1f5,
    #f6f6f6,
    #f6f6f6,
    #f6f6f6,
    #f6f6f6,
    #f6f6f6
  );
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    -moz-animation: bounce 2s infinite;
    -webkit-animation: bounce 2s infinite;
    animation: bounce 2s infinite;
    position: absolute;
    bottom: 2%;
    color: var(--clr-dark-blue);
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
  width: 35%;
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
