import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4%;
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

  span {
    color: var(--clr-secondary1);
  }
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    padding: 2px 0;
  }
`;

export const Container1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 3% 5%;

  p {
    margin-top: 0;
  }

  @media (max-width: 500px) {
    flex-wrap: wrap;
    margin: 10% 10% 0 10%;
  }
`;

export const StyledBio = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;

  @media (max-width: 500px) {
    width: 100%;
    margin-bottom: 10%;
  }

  a {
    color: var(--clr-secondary2);
    text-decoration: none;
    padding: 2px;

    :visited {
      color: var(--clr-secondary2);
    }

    :hover {
      padding: 2px;
      color: white;
      background-color: black;
      transition: 0.3s;
    }
  }
`;

export const Container2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;

  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
`;
