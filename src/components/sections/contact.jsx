import React from 'react';
import styled from 'styled-components';
import ContactForm from '../contactForm';

const Wrapper = styled.section`
  background-image: linear-gradient(to bottom, #f6f6f6, #f6f6f6, #f6f6f6, #f6f6f6, #f6f6f6, #f2f1f5, #ededf3, #e7e9f2, #d9e0ef, #c8d8ec, #b6d1e8, #a1cae2);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4% 0 1.03% 0;
  width: 100%;

  p {
    margin: 2px;
  }
  a {
    color: var(--clr-dark-blue);
    font-size: 1.5rem;
    transition: 0.3s;

    :hover {
    color: var(--clr-secondary1);
    }
  }
`

function Contact(){
    return(
        <Wrapper id='contact'>
            <h1>Contact</h1>
            <p>Have a question or just want to say hi?</p>
            <p>Feel free to get in touch!</p>
            <ContactForm />
        </Wrapper>
    )
}

export default Contact;