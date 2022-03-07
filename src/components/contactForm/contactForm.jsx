import React from 'react';
import styled from 'styled-components';
import './styles.css';

const StyledButton = styled.button`
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
`

const ContactForm = () => {
  return (
    <form className="form" name='contact' method='post'>
      <input className="input" type="hidden" name="form-name" value="contact" />
      <>
        <label htmlFor='name'></label>
        <input className="input" type='text' id='name' name='name' placeholder="What's your name?" required />
      </>
      <>
        <label htmlFor='email'></label>
        <input className="input" type='email' id='email' name='email' placeholder="What's your email?" required />
      </>
      <>
        <label htmlFor='message'></label>
        <textarea className="input" id='message' name='message' placeholder='Type your message!' rows='8' required />
      </>
      <StyledButton type='submit'>Send</StyledButton>
    </form>
  );
};

export default ContactForm;