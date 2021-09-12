import React, { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin-top: 2.5%;

  input, textarea {
    color: var(--red);
    background-color: var(--light-blue);
    border: 1px solid var(--navy);
    border-radius: var(--border-radius);
    text-align: center;
    font-family: "futura";
    font-size: 1.2rem;
    padding-block: 1%;
    width: 60%;
    margin: 1% 0;
}
  button{
    color: var(--light-blue);
    background-color: var(--navy);
    border: 1px solid var(--navy);
    width: 15%;
    height: 35px;
    border-radius: var(--border-radius);
    margin-bottom: 10%;
    text-align: center;
    font-family: "futura";
    font-size: 1.2rem;
    transition: 0.3s;
  }
  button:hover {
    color: var(--yellow);
    background: var(--red);
    border: 1px var(--red) solid;
}
`

const ContactForm = () => {
  const [status, setStatus] = useState("Send");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Send");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <>
        <label htmlFor="name"></label>
        <input type="text" id="name" placeholder="What's yout name?" required />
      </>
      <>
        <label htmlFor="email"></label>
        <input type="email" id="email" placeholder="What's your email?" required />
      </>
      <>
        <label htmlFor="message"></label>
        <textarea textarea id="message" placeholder="Type your message" rows="8" required />
      </>
      <button type="submit">{status}</button>
    </StyledForm>
  );
};

export default ContactForm;