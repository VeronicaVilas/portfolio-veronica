'use client'

import Hero from "../components/sections/hero";
import { useLang } from "../hooks/useLang";

export default function Home() {
  const { lang } = useLang()
  return (
    <main>
      <Hero lang={lang} />
    </main>
  );
}
