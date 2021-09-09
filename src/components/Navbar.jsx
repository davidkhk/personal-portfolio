import React from "react";
import { FaRegFilePdf } from "react-icons/fa";
import Resume from "./resume.pdf";


function Navbar(){
    return (
      <nav className="navbar">
        <h4 className="navbar-name">David Kang</h4>
        <ul>
          <li><a href="#home">HOME</a></li>
          <li><a href="#work">WORK</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#contact">CONTACT</a></li>
          <li className="resume"><a href={Resume} target="_blank">RESUME  <FaRegFilePdf /></a></li>
        </ul>
      </nav>
)}

export default Navbar;