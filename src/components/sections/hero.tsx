'use client'

import { useRef, useEffect } from 'react'
import type { HeroProps, Star } from '../../types'

function createStars(width: number, height: number): Star[] {
    return Array.from({ length: 120 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.6 + 0.2,
        speed: Math.random() * 0.3 + 0.05,
    }))
}

function drawStar(ctx: CanvasRenderingContext2D, s: Star, rgb: string) {
    s.y -= s.speed
    if (s.y < 0) s.y = ctx.canvas.height
    ctx.beginPath()
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(${rgb},${s.opacity})`
    ctx.fill()
}

const STATS = [
    { value: 2,  suffix: '+', labelPt: 'anos dev',     labelEn: 'years dev'   },
    { value: 4,  suffix: '',  labelPt: 'empresas',     labelEn: 'companies'   },
    { value: 20, suffix: '+', labelPt: 'tecnologias',  labelEn: 'technologies'},
]

export default function Hero({ lang }: HeroProps) {

    const t = (pt: string, en: string) => lang === 'pt' ? pt : en

    const canvasRef   = useRef<HTMLCanvasElement>(null)
    const parallaxRef = useRef<HTMLDivElement>(null)
    const statsRef    = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')!
        let raf: number
        let stars: Star[] = []

        const resize = () => {
            canvas.width  = canvas.offsetWidth
            canvas.height = canvas.offsetHeight
            stars = createStars(canvas.width, canvas.height)
        }

        const animate = () => {
            const isLight = document.documentElement.getAttribute('data-theme') === 'light'
            const rgb = isLight ? '124,92,58' : '255,255,255'
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            stars.forEach(s => drawStar(ctx, s, rgb))
            raf = requestAnimationFrame(animate)
        }

        resize()
        animate()
        window.addEventListener('resize', resize)

        return () => {
            cancelAnimationFrame(raf)
            window.removeEventListener('resize', resize)
        }
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            if (!parallaxRef.current) return
            const offset = window.scrollY * 0.28
            parallaxRef.current.style.transform = `translateY(calc(-50% + ${offset}px))`
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    function animateCount(el: HTMLElement, target: number, duration: number) {
        const start = performance.now()
        const tick = (now: number) => {
            const p    = Math.min((now - start) / duration, 1)
            const ease = 1 - (1 - p) ** 2
            el.textContent = String(Math.round(ease * target))
            if (p < 1) requestAnimationFrame(tick)
            else el.textContent = String(target)
        }
        requestAnimationFrame(tick)
    }

    useEffect(() => {
        const el = statsRef.current
        if (!el) return

        const observer = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) return
            el.querySelectorAll<HTMLElement>('[data-count]').forEach(node => {
                animateCount(node, Number(node.getAttribute('data-count')), 1800)
            })
            observer.disconnect()
        }, { threshold: 0.3 })

        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return (
        <section id="hero" className="relative min-h-screen overflow-hidden ">
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
                        {STATS.map((s, i) => (
                            <div key={i} className="hstat">
                                <div className="hstat-n">
                                    <span data-count={s.value}>0</span>{s.suffix}
                                </div>
                                <div className="hstat-l">{t(s.labelPt, s.labelEn)}</div>
                            </div>
                        ))}
                    </div>

                    <div className="hero-btns">
                        <button
                            className="btn-ghost"
                            onClick={() => window.open('https://linkedin.com/in/veronica-vilas', '_blank')}
                        >
                            LinkedIn →
                        </button>
                        <button
                            className="btn-ghost"
                            onClick={() => window.open('https://github.com/VeronicaVilas', '_blank')}
                        >
                            GitHub →
                        </button>
                        <a className="btn-cv-hero" href="/Curriculo_Veronica_Vilas.pdf" download>
                            ↓ {t('Baixar CV', 'Download Resume')}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
