import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";

function About(){
return (
    <section id="about" className="section-about">
      <h1>About me</h1>
      <div className="about-container">
        <div className="about-container-inner">
        <p>Son of Korean immigrant parents, born and raised in São Paulo, Brazil. Lived in New York City for 7 years studying finance at CUNY - Baruch College and working in consulting.</p>
        <p>Self taught programmer, I'm currently back in São Paulo freelancing as a software engineer.</p>
        <p>Aside from coding, I'm interested in entrepreneurship (opened a coffee shop business in 2020), specialty coffee and travelling (visited 10+ countries).</p>
        </div>
        <div className="about-container-inner">
        <p>Skills:</p>
        <ul>
          <li><FaHtml5 /> HTML</li>
          <li><FaCss3Alt /> CSS</li>
          <li><FaJsSquare /> Javascript</li>
          <li><FaNodeJs /> Node.js</li>
          <li><FaReact /> React</li>
          <li><FaWordpress /> Wordpress</li>
        </ul>
        </div>
      </div>
    </section>
)
}

export default About;