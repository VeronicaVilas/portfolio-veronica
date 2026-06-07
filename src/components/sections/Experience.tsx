'use client'

import { useRef, useEffect, useState, useCallback } from 'react'
import { useLang } from '../../hooks/useLang'
import { MAIN_EXP, OTHER_EXP, type ExpItem } from '../../data/experience'

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

function TlCard({ item }: { item: ExpItem }) {
    const { lang } = useLang()
    const t = (pt: string, en: string) => lang === 'pt' ? pt : en
    const cardRef = useRef<HTMLDivElement>(null)

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current
        if (!card) return
        const r = card.getBoundingClientRect()
        card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100).toFixed(1) + '%')
        card.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100).toFixed(1) + '%')
    }, [])

    const periodDisplay = item.isCurrent
        ? `${item.period} – ${t('atual', 'present')}`
        : item.period

    const cardClass = ['tl-card', item.isEdu ? 'tl-card-edu' : ''].filter(Boolean).join(' ')

    return (
        <div ref={cardRef} className={cardClass} onMouseMove={handleMouseMove}>
            <div className="tl-header">
                <div className="tl-header-left">
                    <div className="tl-role">{t(item.rolePt, item.roleEn)}</div>
                    <div className="tl-company">{item.company}</div>
                    <div className="tl-loc">{item.location}</div>
                </div>
                <div className="tl-header-right">
                    <div className="tl-period">{periodDisplay}</div>
                    <span className="tl-badge">{t(item.badgePt, item.badgeEn)}</span>
                </div>
            </div>
            <p className="tl-desc">{t(item.descPt, item.descEn)}</p>
            <div className="tl-techs">
                {item.techs.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                ))}
            </div>
        </div>
    )
}

function TlItem({
    item,
    delay = 0,
    isOther = false,
}: {
    item: ExpItem
    delay?: 0 | 1 | 2 | 3 | 4
    isOther?: boolean
}) {
    const itemRef = useRef<HTMLDivElement>(null)
    useReveal(itemRef as React.RefObject<HTMLElement>)

    const itemClass = [
        'tl-item reveal',
        delay > 0 ? `rd${delay}` : '',
        item.isCurrent ? 'current' : '',
        isOther ? 'tl-other' : '',
        item.isEdu ? 'edu' : '',
    ].filter(Boolean).join(' ')

    return (
        <div ref={itemRef} className={itemClass}>
            <div className="tl-dot" />
            <TlCard item={item} />
        </div>
    )
}

export default function Experience() {
    const { lang } = useLang()
    const t = (pt: string, en: string) => lang === 'pt' ? pt : en

    const [open, setOpen] = useState(false)
    const wrapRef = useRef<HTMLDivElement>(null)
    const innerRef = useRef<HTMLDivElement>(null)

    const eyebrowRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const toggleRef = useRef<HTMLDivElement>(null)

    useReveal(eyebrowRef as React.RefObject<HTMLElement>)
    useReveal(titleRef as React.RefObject<HTMLElement>)
    useReveal(toggleRef as React.RefObject<HTMLElement>)

    const handleToggle = () => {
        const wrap = wrapRef.current
        const inner = innerRef.current
        if (!wrap || !inner) return

        if (open) {
            wrap.style.maxHeight = wrap.scrollHeight + 'px'
            requestAnimationFrame(() => {
                requestAnimationFrame(() => { wrap.style.maxHeight = '0' })
            })
            setOpen(false)
        } else {
            setOpen(true)
            wrap.style.maxHeight = inner.scrollHeight + 32 + 'px'
        }
    }

    return (
        <section id="experiencia">
            <div ref={eyebrowRef} className="sec-eyebrow reveal">
                <span className="sec-num">01</span>
                <div className="sec-dash" />
                <span className="sec-label">{t('trajetória profissional', 'professional journey')}</span>
            </div>
            <h2 ref={titleRef} className="sec-title reveal">
                <em>{t('Experiência', 'Professional')}</em><br />
                <span>{t('Profissional', 'Experience')}</span>
            </h2>

            {/* Main timeline */}
            <div className="timeline-wrap">
                <div className="timeline-spine" />
                {MAIN_EXP.map((item, i) => (
                    <TlItem
                        key={item.id}
                        item={item}
                        delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
                    />
                ))}
            </div>

            {/* Toggle button */}
            <div ref={toggleRef} className="other-exp-toggle reveal" style={{ marginTop: '2.5rem' }}>
                <button
                    className={`other-exp-btn${open ? ' open' : ''}`}
                    onClick={handleToggle}
                    aria-expanded={open}
                >
                    <span className="other-exp-btn-inner">
                        <span className="other-exp-icon">
                            <span className="oei-line" />
                            <span className="oei-line" />
                        </span>
                        <span className="other-exp-label">
                            {t('Outras experiências', 'Other experiences')}
                        </span>
                        <span className="other-exp-count">{OTHER_EXP.length}</span>
                        <span className="other-exp-arrow">↓</span>
                    </span>
                    <span className="other-exp-hint">
                        {t(
                            'Atento · UCSal — antes da transição para tech',
                            'Atento · UCSal — before the tech transition'
                        )}
                    </span>
                </button>
            </div>

            {/* Collapsible other experiences */}
            <div
                ref={wrapRef}
                className={`other-exp-wrap${open ? ' open' : ''}`}
                aria-hidden={!open}
            >
                <div ref={innerRef} className="other-exp-inner">
                    <div className="timeline-wrap" style={{ marginTop: '1.5rem' }}>
                        <div
                            className="timeline-spine"
                            style={{ background: 'linear-gradient(to bottom, transparent, var(--muted), transparent)' }}
                        />
                        {OTHER_EXP.map((item, i) => (
                            <TlItem
                                key={item.id}
                                item={item}
                                delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
                                isOther
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
