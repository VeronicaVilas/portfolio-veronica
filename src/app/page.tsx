'use client'

import { useState } from "react";
import Hero from "../components/sections/hero";


export default function Home() {

  const [lang, setLang] = useState<'pt' | 'en'>('pt')
  return (
    <main>
      <Hero lang={lang} />
    </main>
  );
}
