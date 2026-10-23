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
import { motionsOff } from "./lib/motion";
import "./App.css";

function App() {
  useEffect(() => {
    document.title = siteMeta.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", siteMeta.description);
  }, []);

  // Gentle section reveals. Content is visible by default; the hidden
  // state lives behind `html.js` so it can never hide content if JS fails.
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll("[data-reveal]"));
    const reduced = motionsOff();

    if (!("IntersectionObserver" in window) || reduced) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      /* No bottom inset: content pinned to the end of the page (the footer
         row) must still reveal when the page is scrolled all the way down. */
      { threshold: 0.08 }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
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
