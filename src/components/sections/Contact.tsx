'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { useLang } from '../../hooks/useLang'

function useReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); io.disconnect() } },
      { threshold: 0.1 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
}

export default function Contact() {
  const { lang } = useLang()
  const t = (pt: string, en: string) => lang === 'pt' ? pt : en

  const eyebrowRef     = useRef<HTMLDivElement>(null)
  const titleRef       = useRef<HTMLDivElement>(null)
  const linksRef       = useRef<HTMLDivElement>(null)
  const illustrationRef = useRef<HTMLDivElement>(null)

  useReveal(eyebrowRef      as React.RefObject<HTMLElement>)
  useReveal(titleRef        as React.RefObject<HTMLElement>)
  useReveal(linksRef        as React.RefObject<HTMLElement>)
  useReveal(illustrationRef as React.RefObject<HTMLElement>)

  return (
    <section id="contato">
      <div ref={eyebrowRef} className="sec-eyebrow reveal">
        <span className="sec-num">05</span>
        <div className="sec-dash" />
        <span className="sec-label">{t('vamos trabalhar juntos', "let's work together")}</span>
      </div>

      <div className="contact-layout">
        {/* Left: title + links */}
        <div className="contact-left">
          <div ref={titleRef} className="contact-big reveal">
            <span>{t('Vamos construir', 'Shall we build')}</span>
            <em>{t('algo incrível?', 'something great?')}</em>
          </div>

          <div ref={linksRef} className="contact-links reveal">
            <a className="clink" href="mailto:veuvilas@gmail.com">
              <span className="clink-icon">✉</span>
              veuvilas@gmail.com
            </a>
            <a className="clink" href="tel:+5571986622097">
              <span className="clink-icon">☎</span>
              (71) 98662-2097
            </a>
            <a className="clink" href="https://linkedin.com/in/veronica-vilas" target="_blank" rel="noopener noreferrer">
              <span className="clink-icon">in</span>
              linkedin.com/in/veronica-vilas
            </a>
            <a className="clink" href="https://github.com/VeronicaVilas" target="_blank" rel="noopener noreferrer">
              <span className="clink-icon">⌥</span>
              github.com/VeronicaVilas
            </a>
            <div className="cv-download-big">
              <a className="btn-primary" href="/Curriculo_Veronica_Vilas.pdf" download>
                ↓ {t('Baixar Currículo', 'Download Resume')}
              </a>
              <button
                className="btn-ghost"
                onClick={() => window.open('https://linkedin.com/in/veronica-vilas', '_blank')}
              >
                {t('Ver LinkedIn', 'View LinkedIn')} →
              </button>
            </div>
          </div>
        </div>

        <div ref={illustrationRef} className="contact-right reveal rd2">
          <div className="photo-orbital contact-chibi-orbital">
            <div className="orb-ring orb-ring-1" />
            <div className="orb-ring orb-ring-2" />
            <div className="orb-ring orb-ring-3" />
            <div className="orb-orbit orb-orbit-1"><div className="orb-dot" /></div>
            <div className="orb-orbit orb-orbit-2">
              <div className="orb-dot" />
              <div className="orb-dot orb-dot-2" />
            </div>
            <div className="orb-orbit orb-orbit-3">
              <div className="orb-dot" />
              <div className="orb-dot orb-dot-2" />
            </div>
            <div className="chibi-placeholder">
              <Image
                src="/chibiveronica.png"
                alt="Verônica Vilas chibi"
                width={280}
                height={340}
                className="chibi-img"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className="contact-edu-triangle" aria-hidden="true" />
    </section>
  )
}
