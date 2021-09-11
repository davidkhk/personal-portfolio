import React, { useState } from "react";

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
    <form onSubmit={handleSubmit} className="contact-form">
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
    </form>
  );
};

export default ContactForm;