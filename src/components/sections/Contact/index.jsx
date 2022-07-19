import React from 'react';
import { Wrapper } from './index-style';
import ContactForm from './components/ContactForm/index';

const Contact = () => {
  return (
    <Wrapper id='contact'>
      <h1>Contact</h1>
      <p>Have a question or just want to say hi?</p>
      <p>Feel free to get in touch!</p>
      <ContactForm />
    </Wrapper>
  );
};

export default Contact;
