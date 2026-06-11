'use client'

import { useRef } from 'react'
import { useT } from '../../hooks/useLang'
import { useStarCanvas } from '../../hooks/useStarCanvas'
import { useParallax } from '../../hooks/useParallax'
import { useCountUp } from '../../hooks/useCountUp'
import { STATS } from '../../data/stats'

export default function Hero() {
    const t = useT()

    const canvasRef   = useRef<HTMLCanvasElement>(null)
    const parallaxRef = useRef<HTMLDivElement>(null)
    const statsRef    = useRef<HTMLDivElement>(null)

    useStarCanvas(canvasRef)
    useParallax(parallaxRef)
    useCountUp(statsRef)

    return (
        <section id="hero" className="relative overflow-hidden">
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none"
                aria-hidden="true"
            />

            <div ref={parallaxRef} aria-hidden="true" className="hero-parallax-num">
                VV
            </div>

            <h1 className="hero-title">
                <span className="line"><span className="word">VERÔNICA</span></span>
                <span className="line"><span className="word">VILAS</span></span>
                <span className="line"><span className="word">DEV.</span></span>
            </h1>

            <div className="hero-bottom" ref={statsRef}>
                <p
                    className="hero-bio"
                    dangerouslySetInnerHTML={{
                        __html: t(
                            'Desenvolvedora <strong>Full Stack</strong>, com formação em <strong>Engenharia Química</strong>, apaixonada por criar soluções que fazem sentido para as pessoas. Trabalho com desenvolvimento web, integrações, automações e produtos digitais, sempre buscando evoluir código, processos e experiências.',
                            '<strong>Full Stack</strong> Developer with a background in <strong>Chemical Engineering</strong>, passionate about creating solutions that make sense to people. I work with web development, integrations, automation, and digital products, always seeking to evolve code, processes, and experiences.'
                        )
                    }}
                />

                <div className="hero-right">
                    <div className="hero-stats">
                        {STATS.map((s, i) => {
                            const n = typeof s.count === 'function' ? s.count() : s.count
                            return (
                                <div key={i} className="hstat">
                                    <div className="hstat-n">
                                        <span data-count={n}>0</span>{s.suffix}
                                    </div>
                                    <div className="hstat-l">{t(s.labelPt, s.labelEn)}</div>
                                </div>
                            )
                        })}
                    </div>

                    <div className="hero-btns">
                        <a className="btn-ghost" href="/Curriculo_Veronica_Vilas.pdf" download>
                            ↓ {t('Baixar CV', 'Download Resume')}
                        </a>
                        <button
                            className="btn-ghost"
                            onClick={() => window.open('https://github.com/VeronicaVilas', '_blank')}
                        >
                            GitHub →
                        </button>
                        <button
                            className="btn-primary"
                            onClick={() => window.open('https://linkedin.com/in/veronica-vilas', '_blank')}
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                            </svg>
                            {t('Vamos conversar?', "Let's talk?")}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
