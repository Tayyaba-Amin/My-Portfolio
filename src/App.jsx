import { useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Interests from "./components/sections/Interests";
import Contact from "./components/sections/Contact";
import { siteMeta } from "./config/siteData";
import "./App.css";

function App() {
  useEffect(() => {
    document.title = siteMeta.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", siteMeta.description);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
