import { useState } from "react";
import "./App.css";
import Navbar from "./Componenet/Navbar";
import Hero from "./Componenet/Hero/Hero";
import About from "./Componenet/About/About";
import Service from "./Componenet/Services/Service";
import Footer from "./Componenet/Footer/Footer";
import Work from "./Componenet/Work/Work";
import Contact from "./Componenet/Contact/Contact";

// import Photo from './Componenet/Photo';
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Work/>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
