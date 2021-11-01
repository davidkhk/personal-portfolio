import React from 'react';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Home from './components/sections/home';
import About from './components/sections/about';
import Work from './components/sections/work';
import Contact from './components/sections/contact';
import Footer from './components/sections/footer';

function App() {   
  return (
    <>
      <Navbar />
      <Sidebar />
      <Home />
      <Work />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;