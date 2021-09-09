import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About"
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Work />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;