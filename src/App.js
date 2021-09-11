import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About"
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
// import "./App.css";

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