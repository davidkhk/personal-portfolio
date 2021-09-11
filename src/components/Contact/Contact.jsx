import React from "react";
import ContactForm from "./ContactForm"
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaAngellist } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

function Contact(){

    return(
        <section id="contact" className="section-contact">
            <h1>Contact</h1>
            <p>Have a question or just want to say hi?</p>
            <p>Feel free to get in touch!</p>
            <ContactForm />
            <div className="contact-icons">
              <a href="https://github.com/davidkhk" target="_blank" rel="noreferrer" className="icon"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/davidkhk/" target="_blank" rel="noreferrer" className="icon"><FaLinkedinIn /></a>
              <a href="https://angel.co/u/davidkhk" target="_blank" rel="noreferrer" className="icon"><FaAngellist /></a>
            </div>
            <a href="#home"><span className="up-arrow"><FaAngleUp /></span></a>
        </section>
    )
}

export default Contact;