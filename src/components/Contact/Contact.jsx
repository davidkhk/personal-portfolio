import React from "react";
import styled, { css } from "styled-components";
import ContactForm from "./ContactForm"
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaAngellist } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

const Wrapper = styled.section`
  background-color: var(--clr-light-blue);
  color: var(--clr-navy);
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
    margin: 3%;
  }
  `
  const StyledA = styled.a`
    color: var(--clr-navy);
    font-size: 2rem;
    transition: 0.3s;

    a:hover {
    color: var(--clr-red);
    }

    ${props =>
    props.arrow &&
    css`
    -moz-animation: bounce 2s infinite;
    -webkit-animation: bounce 2s infinite;
    font-size: 1rem;
    animation: bounce 2s infinite;
    color: var(--clr-navy);
    padding-top: 5%;
    `};
`

function Contact(){
    return(
        <Wrapper id="contact">
            <h1>Contact</h1>
            <p>Have a question or just want to say hi?</p>
            <p>Feel free to get in touch!</p>
            <ContactForm />
            <div>
              <StyledA href="https://github.com/davidkhk" target="_blank" rel="noreferrer" className="icon"><FaGithub /></StyledA>
              <StyledA href="https://www.linkedin.com/in/davidkhk/" target="_blank" rel="noreferrer" className="icon"><FaLinkedinIn /></StyledA>
              <StyledA href="https://angel.co/u/davidkhk" target="_blank" rel="noreferrer" className="icon"><FaAngellist /></StyledA>
            </div>
            <StyledA arrow href="#home"><FaAngleUp /></StyledA>
        </Wrapper>
    )
}

export default Contact;