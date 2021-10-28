import React, { useEffect } from 'react';
import WebFont from 'webfontloader';
import GlobalStyle from './styles/globalStyle';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Home from './components/sections/home';
import About from './components/sections/about';
import Work from './components/sections/work';
import Contact from './components/sections/contact';
import Footer from './components/sections/footer';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Futura PT', 'Mr Eaves Sans', 'Futura PT Book']
      }
    });
   }, []);
   
  return (
    <>
      <GlobalStyle/>
      <Navbar />
      <Sidebar/>
      <Home />
      <Work />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;