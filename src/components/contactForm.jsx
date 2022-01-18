import React, { useState } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin-top: 2.5%;

  input, textarea {
    color: var(--clr-dark-blue);
    background-color: var(--clr-blue);
    border: 1px solid var(--clr-secondary1);
    border-radius: var(--border-radius);
    text-align: center;
    font-family: 'Futura', 'Mr Eaves Sans', 'Futura PT Book';
    padding-block: 1%;
    width: 60%;
    margin: 0.5% 0;
    :focus {
    outline-width: 0;
  }
  
  ::placeholder {
      color: var(--clr-dark-blue);
    }
}
  button{
    color: var(--clr-dark-blue);
    background-color: var(--clr-blue);
    border: 1px solid var(--clr-secondary1);
    width: 15%;
    height: 30px;
    border-radius: var(--border-radius);
    margin: 2% 0 10% 0;
    text-align: center;
    font-family: 'Futura', 'Mr Eaves Sans', 'Futura PT Book';
    transition: 0.3s;
  }
  button:hover {
    color: var(--clr-blue);
    background: var(--clr-dark-blue);
    border: 1px var(--clr-blue) solid;
}

@media (max-width: 600px) {
  width: 100%;
}
`

const ContactForm = () => {
  const [status, setStatus] = useState('Send');
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(details),
    });
    setStatus('Send');
    let result = await response.json();
    alert(result.status);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <>
        <label htmlFor='name'></label>
        <input type='text' id='name' placeholder="What's yout name?" required />
      </>
      <>
        <label htmlFor='email'></label>
        <input type='email' id='email' placeholder="What's your email?" required />
      </>
      <>
        <label htmlFor='message'></label>
        <textarea textarea id='message' placeholder='Type your message!' rows='8' required />
      </>
      <button type='submit'>{status}</button>
    </StyledForm>
  );
};

export default ContactForm;