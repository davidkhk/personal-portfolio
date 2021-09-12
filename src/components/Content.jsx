import React, { useEffect } from "react";
import WebFont from 'webfontloader';
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import About from "./About/About"
import Work from "./Work/Work";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

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