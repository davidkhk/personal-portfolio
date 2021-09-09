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
      <a href="#work"><span className="arrow bounce"><FaAngleDown /></span></a>
    </section>
)
}

export default Home;