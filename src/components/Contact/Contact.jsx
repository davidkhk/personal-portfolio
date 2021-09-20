import React from "react";
import styled from "styled-components";
import ContactForm from "./ContactForm"
import { FaGithub, FaLinkedinIn, FaAngellist } from "react-icons/fa";

const Wrapper = styled.section`
  background-color: var(--clr-light-blue);
  color: var(--clr-navy-blue);
  display: flex;
  flex-direction: column;
  align-items:center;
  padding: 4% 0 1.03% 0;
  width: 100%;

  p {
    margin: 2px;
  }
  div {
    display: flex;
    justify-content: space-between;
    width: 20%;
  }
  
  a {
    color: var(--clr-navy-blue);
    font-size: 1.5rem;
    transition: 0.3s;

    :hover {
    color: var(--clr-red);
    }
  }
`

function Contact(){
    return(
        <Wrapper id="contact">
            <h1>Contact</h1>
            <p>Have a question or just want to say hi?</p>
            <p>Feel free to get in touch!</p>
            <ContactForm />
            <div>
              <a href="https://github.com/davidkhk" target="_blank" rel="noreferrer" className="icon"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/davidkhk/" target="_blank" rel="noreferrer" className="icon"><FaLinkedinIn /></a>
              <a href="https://angel.co/u/davidkhk" target="_blank" rel="noreferrer" className="icon"><FaAngellist /></a>
            </div>
        </Wrapper>
    )
}

export default Contact;