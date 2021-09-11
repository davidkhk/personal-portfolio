import React from "react";
import { FaRegCopyright } from "react-icons/fa";

function Footer(){
  const year = new Date().getFullYear();
    return (
      <footer>
        <p><a href="https://github.com/davidkhk/personal-portfolio" target="_blank" rel="noreferrer">Designed & built by David Kang</a></p>
        <p className="year"><FaRegCopyright /> {year}</p>
      </footer>
    )}

export default Footer;