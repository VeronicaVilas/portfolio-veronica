'use client'

import Hero from "../components/sections/hero";
import TechTicker from "../components/sections/TechTicker";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";

export default function Home() {
  return (
    <main>
      <Hero />
      <TechTicker />
      <About />
      <Experience />
      <TechTicker reverse />
    </main>
  );
}
