import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin-top: 2.5%;

  input,
  textarea {
    color: var(--clr-dark-blue);
    background-color: var(--clr-blue);
    border: 1px solid var(--clr-secondary1);
    border-radius: var(--border-radius);
    text-align: center;
    font-family: 'Futura', 'Mr Eaves Sans', 'Futura PT Book';
    padding-block: 1%;
    width: 60%;
    margin: 0.5% 0;
  }
  input:focus {
    outline-width: 0;
  }
  input,
  textarea {
    ::placeholder {
      color: var(--clr-dark-blue);
      font-family: 'Futura', 'Mr Eaves Sans', 'Futura PT Book';
    }

    @media (max-width: 600px) {
      .input {
        width: 100%;
      }
    }
  }
`;

export const StyledButton = styled.button`
  color: var(--clr-dark-blue);
  background-color: var(--clr-blue);
  border: 1px solid var(--clr-secondary1);
  width: 15%;
  height: 30px;
  border-radius: var(--border-radius);
  margin: 2% 0 2% 0;
  text-align: center;
  cursor: pointer;
  font-family: 'Futura', 'Mr Eaves Sans', 'Futura PT Book';
  transition: 0.3s;

  :hover {
    color: var(--clr-blue);
    background: var(--clr-dark-blue);
    border: 1px var(--clr-blue) solid;
  }

  @media (max-width: 600px) {
    width: 30%;
  }
`;
