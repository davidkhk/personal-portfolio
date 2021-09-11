import React from "react";
import { FaAngleDown } from "react-icons/fa";

function Home(){
return (
    <section id="home" className="section-home">
      <div className="greetings-container">
        <h3>Hi there! My name is</h3>
        <h1>David Kang</h1>
        <p>web developer</p>
      </div>
      <a href="#work" className="arrow bounce"><FaAngleDown /></a>
    </section>
)
}

export default Home;