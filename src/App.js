import React from 'react';
import {
  Navbar,
  Sidebar,
  Home,
  About,
  Work,
  Contact,
  Footer,
} from './components';
import GlobalStyles from './styles/globalStyles';

const App = () => {
  return (
    <>
      <>
        <GlobalStyles />
        <Navbar />
        <Sidebar />
        <Home />
        <Work />
        <About />
        <Contact />
        <Footer />
      </>
    </>
  );
};

export default App;
