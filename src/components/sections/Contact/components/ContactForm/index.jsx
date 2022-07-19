import React from 'react';
import { StyledForm, StyledButton } from './index-style';

const ContactForm = () => {
  return (
    <StyledForm className='form' name='contact' method='post'>
      <input className='input' type='hidden' name='form-name' value='contact' />
      <>
        <label htmlFor='name'></label>
        <input
          className='input'
          type='text'
          id='name'
          name='name'
          placeholder="What's your name?"
          required
        />
      </>
      <>
        <label htmlFor='email'></label>
        <input
          className='input'
          type='email'
          id='email'
          name='email'
          placeholder="What's your email?"
          required
        />
      </>
      <>
        <label htmlFor='message'></label>
        <textarea
          className='input'
          id='message'
          name='message'
          placeholder='Type your message!'
          rows='8'
          required
        />
      </>
      <StyledButton type='submit'>Send</StyledButton>
    </StyledForm>
  );
};

export default ContactForm;
