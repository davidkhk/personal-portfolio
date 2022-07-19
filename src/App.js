import React from 'react';
import {
  Navbar,
  Sidebar,
  Home,
  About,
  Work,
  Contact,
  Footer,
} from './components/sections';

const App = () => {
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
};

export default App;
