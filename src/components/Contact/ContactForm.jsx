import React, { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  padding: 3%;

  input, textarea {
    color: var(--clr-red);
    background-color: var(--clr-light-blue);
    border: 1px solid var(--clr-navy);
    width: 90%;
    border-radius: 5px;
    padding: 2% 3.5%;
    margin: 0 auto 2.2% auto;
    display: block;
    text-align: center;
    font-family: "futura";
    font-size: 1.2rem;
  }
  button{
    color: var(--clr-light-blue);
    background-color: var(--clr-navy);
    border: 1px solid var(--clr-navy);
    width: 20%;
    border-radius: 5px;
    padding: 2.3% 3.4%;
    margin: 0 auto 2.3% auto;
    display: block;
    text-align: center;
    font-family: "futura";
    font-size: 1.2rem;
    transition: 0.3s;
  }
  button:hover {
    color: var(--clr-yellow);
    background: var(--clr-red);
    border: 1px var(--clr-red) solid;
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
      <div>
        <label htmlFor="name"></label>
        <input type="text" id="name" placeholder="What's yout name?" required />
      </div>
      <div>
        <label htmlFor="email"></label>
        <input type="email" id="email" placeholder="What's your email?" required />
      </div>
      <div>
        <label htmlFor="message"></label>
        <textarea id="message" placeholder="Type your message" rows="8" required />
      </div>
      <button type="submit">{status}</button>
    </StyledForm>
  );
};

export default ContactForm;