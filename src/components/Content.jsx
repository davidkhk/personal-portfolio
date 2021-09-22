import React, { useEffect } from "react";
import WebFont from 'webfontloader';
import Navbar from "./navbar/navbar";
import Home from "./home/home";
import About from "./about/about"
import Work from "./work/work";
import Contact from "./contact/contact";
import Footer from "./footer/footer";

   function Content() {
    useEffect(() => {
      WebFont.load({
        google: {
          families: ['Futura PT', 'Mr Eaves Sans', 'Futura PT Book']
        }
      });
     }, []);
     
    return (
      <>
        <Navbar />
        <Home />
        <Work />
        <About />
        <Contact />
        <Footer />
      </>
    );
  }
  
  export default Content;