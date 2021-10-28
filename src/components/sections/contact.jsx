import React from 'react';
import styled from 'styled-components';
import ContactForm from '../contactForm';

const Wrapper = styled.section`
  background-image: linear-gradient(to bottom, #284e78, #1e4266, #153654, #0e2b43, #082032);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4% 0 1.03% 0;
  width: 100%;

  p {
    margin: 2px;
  }
  a {
    color: var(--clr-secondary2);
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