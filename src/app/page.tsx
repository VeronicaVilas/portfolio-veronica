'use client'

import Hero from "../components/sections/hero";
import TechTicker from "../components/sections/TechTicker";
import About from "../components/sections/About";

export default function Home() {
  return (
    <main>
      <Hero />
      <TechTicker />
      <About />
    </main>
  );
}
