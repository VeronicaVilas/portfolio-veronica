'use client'

import { useRef, useEffect } from 'react'
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

        {/* Right: chibi illustration */}
        <div ref={illustrationRef} className="contact-right reveal rd2">
          <div className="chibi-placeholder">
            <svg className="chibi-svg" viewBox="0 0 260 320" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <ellipse cx="130" cy="300" rx="80" ry="14" fill="var(--terra)" opacity="0.18"/>
              <rect x="72" y="200" width="116" height="72" rx="14" fill="var(--bg3)" stroke="var(--border2)" strokeWidth="1"/>
              <rect x="44" y="240" width="172" height="8" rx="4" fill="var(--terra)" opacity="0.6"/>
              <rect x="52" y="248" width="8" height="44" rx="4" fill="var(--terra)" opacity="0.4"/>
              <rect x="200" y="248" width="8" height="44" rx="4" fill="var(--terra)" opacity="0.4"/>
              <rect x="76" y="204" width="108" height="68" rx="8" fill="var(--bg4)" stroke="var(--border2)" strokeWidth="1"/>
              <rect x="82" y="210" width="96" height="52" rx="5" fill="var(--bg)" stroke="var(--border)" strokeWidth="0.5"/>
              <rect x="90" y="220" width="38" height="3" rx="1.5" fill="var(--sand)" opacity="0.7"/>
              <rect x="90" y="228" width="55" height="3" rx="1.5" fill="var(--terra)" opacity="0.8"/>
              <rect x="90" y="236" width="44" height="3" rx="1.5" fill="var(--sand)" opacity="0.5"/>
              <rect x="90" y="244" width="32" height="3" rx="1.5" fill="var(--gold)" opacity="0.6"/>
              <rect x="90" y="252" width="48" height="3" rx="1.5" fill="var(--terra)" opacity="0.5"/>
              <rect x="142" y="252" width="2" height="10" rx="1" fill="var(--sand)" opacity="0.9">
                <animate attributeName="opacity" values="0.9;0;0.9" dur="1.1s" repeatCount="indefinite"/>
              </rect>
              <rect x="76" y="268" width="108" height="5" rx="2.5" fill="var(--bg3)" stroke="var(--border)" strokeWidth="0.5"/>
              <ellipse cx="130" cy="148" rx="38" ry="40" fill="#3D2B14"/>
              <ellipse cx="130" cy="116" rx="38" ry="20" fill="#3D2B14"/>
              <ellipse cx="105" cy="122" rx="14" ry="18" fill="#3D2B14"/>
              <ellipse cx="155" cy="122" rx="14" ry="18" fill="#3D2B14"/>
              <path d="M92 130 Q85 155 88 175" stroke="#3D2B14" strokeWidth="10" strokeLinecap="round" fill="none"/>
              <path d="M168 130 Q175 155 172 175" stroke="#3D2B14" strokeWidth="10" strokeLinecap="round" fill="none"/>
              <ellipse cx="116" cy="150" rx="6" ry="7" fill="#3D2B14"/>
              <ellipse cx="144" cy="150" rx="6" ry="7" fill="#3D2B14"/>
              <circle cx="118" cy="147" r="2" fill="white" opacity="0.8"/>
              <circle cx="146" cy="147" r="2" fill="white" opacity="0.8"/>
              <rect x="110" y="147" width="12" height="8" rx="4" fill="#3D2B14" opacity="0">
                <animate attributeName="opacity" values="0;0;0;0;1;0" dur="4s" repeatCount="indefinite"/>
              </rect>
              <rect x="138" y="147" width="12" height="8" rx="4" fill="#3D2B14" opacity="0">
                <animate attributeName="opacity" values="0;0;0;0;1;0" dur="4s" repeatCount="indefinite"/>
              </rect>
              <ellipse cx="108" cy="162" rx="8" ry="5" fill="var(--gold)" opacity="0.25"/>
              <ellipse cx="152" cy="162" rx="8" ry="5" fill="var(--gold)" opacity="0.25"/>
              <path d="M120 170 Q130 178 140 170" stroke="#3D2B14" strokeWidth="2" strokeLinecap="round" fill="none"/>
              <rect x="120" y="185" width="20" height="18" rx="5" fill="#3D2B14"/>
              <path d="M88 200 Q95 190 130 188 Q165 190 172 200 L172 272 Q130 278 88 272 Z" fill="var(--terra)" opacity="0.8"/>
              <path d="M115 188 L130 202 L145 188" stroke="var(--sand)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M88 205 Q68 220 72 248" stroke="#3D2B14" strokeWidth="16" strokeLinecap="round" fill="none"/>
              <path d="M172 205 Q192 220 188 248" stroke="#3D2B14" strokeWidth="16" strokeLinecap="round" fill="none"/>
              <ellipse cx="76" cy="250" rx="10" ry="7" fill="#3D2B14"/>
              <ellipse cx="184" cy="250" rx="10" ry="7" fill="#3D2B14"/>
              <g opacity="0.55">
                <text x="20" y="100" fontFamily="monospace" fontSize="11" fill="var(--sand)">
                  {'</>'}
                  <animateTransform attributeName="transform" type="translate" values="0,0;0,-8;0,0" dur="3s" repeatCount="indefinite"/>
                </text>
                <text x="210" y="130" fontFamily="monospace" fontSize="10" fill="var(--terra)">
                  {'{ }'}
                  <animateTransform attributeName="transform" type="translate" values="0,0;0,-6;0,0" dur="3.8s" repeatCount="indefinite"/>
                </text>
                <text x="30" y="190" fontFamily="monospace" fontSize="9" fill="var(--gold)" opacity="0.7">
                  {'fn()'}
                  <animateTransform attributeName="transform" type="translate" values="0,0;0,-5;0,0" dur="2.6s" repeatCount="indefinite"/>
                </text>
                <text x="205" y="200" fontFamily="monospace" fontSize="9" fill="var(--sand)" opacity="0.6">
                  {'[]'}
                  <animateTransform attributeName="transform" type="translate" values="0,0;0,-7;0,0" dur="4.2s" repeatCount="indefinite"/>
                </text>
              </g>
              <g>
                <path d="M58 96 L60 90 L62 96 L68 98 L62 100 L60 106 L58 100 L52 98 Z" fill="var(--gold)" opacity="0.7">
                  <animate attributeName="opacity" values="0.7;0.2;0.7" dur="2.2s" repeatCount="indefinite"/>
                </path>
                <path d="M192 88 L193.5 83 L195 88 L200 89.5 L195 91 L193.5 96 L192 91 L187 89.5 Z" fill="var(--sand)" opacity="0.6">
                  <animate attributeName="opacity" values="0.6;0.15;0.6" dur="2.8s" repeatCount="indefinite"/>
                </path>
                <circle cx="175" cy="72" r="3" fill="var(--gold)" opacity="0.5">
                  <animate attributeName="r" values="3;2;3" dur="1.8s" repeatCount="indefinite"/>
                </circle>
                <circle cx="82" cy="80" r="2" fill="var(--sand)" opacity="0.5">
                  <animate attributeName="r" values="2;1;2" dur="2.4s" repeatCount="indefinite"/>
                </circle>
              </g>
            </svg>
            <div className="chibi-tooltip">
              {t('troque por sua foto chibi ou gif! 🎨', 'replace with your chibi or gif! 🎨')}
            </div>
          </div>
        </div>
      </div>
      <div className="contact-edu-triangle" aria-hidden="true" />
    </section>
  )
}
