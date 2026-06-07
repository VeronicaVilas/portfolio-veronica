'use client'

import Hero from "../components/sections/hero";
import TechTicker from "../components/sections/TechTicker";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Education from "../components/sections/Education";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <TechTicker />
      <About />
      <Experience />
      <TechTicker reverse />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
