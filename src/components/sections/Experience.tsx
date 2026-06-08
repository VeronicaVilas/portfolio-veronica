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

function TlCard({ item, onDetails }: { item: ExpItem; onDetails: () => void }) {
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
            <div className="tl-card-footer">
                <div className="tl-techs">
                    {item.techs.map(tech => (
                        <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                </div>
                {(item.detailsPt || item.detailsEn) && (
                    <button
                        className="tl-details-btn"
                        onClick={(e) => { e.stopPropagation(); onDetails() }}
                        aria-label={t(`Ver detalhes de ${item.company}`, `See details for ${item.company}`)}
                    >
                        {t('ver detalhes', 'see details')}
                        <span className="tl-details-arrow">→</span>
                    </button>
                )}
            </div>
        </div>
    )
}

function TlItem({
    item,
    delay = 0,
    isOther = false,
    onDetails,
}: {
    item: ExpItem
    delay?: 0 | 1 | 2 | 3 | 4
    isOther?: boolean
    onDetails: () => void
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
            <TlCard item={item} onDetails={onDetails} />
        </div>
    )
}

function ExpModal({ item, onClose }: { item: ExpItem; onClose: () => void }) {
    const { lang } = useLang()
    const t = (pt: string, en: string) => lang === 'pt' ? pt : en
    const listRef = useRef<HTMLUListElement>(null)

    const details = lang === 'pt' ? item.detailsPt : item.detailsEn

    const periodDisplay = item.isCurrent
        ? `${item.period} – ${t('atual', 'present')}`
        : item.period

    useEffect(() => {
        const items = listRef.current?.querySelectorAll<HTMLElement>('.exp-modal-detail-item')
        if (!items) return
        items.forEach((el, i) => {
            el.style.opacity = '0'
            el.style.transform = 'translateX(-10px)'
            el.style.transition = `opacity .4s ${i * 0.07}s, transform .4s ${i * 0.07}s`
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    el.style.opacity = ''
                    el.style.transform = ''
                })
            })
        })
    }, [])

    return (
        <div className="modal-box">
            <div className="modal-header">
                <div>
                    <div className="modal-eyebrow">
                        {item.company} · {item.location}
                    </div>
                    <h3 className="modal-title">{t(item.rolePt, item.roleEn)}</h3>
                    <div className="exp-modal-meta">
                        <span className="tl-badge" style={{ marginTop: '6px' }}>
                            {t(item.badgePt, item.badgeEn)}
                        </span>
                        <span className="exp-modal-period">{periodDisplay}</span>
                    </div>
                </div>
                <button
                    className="modal-close"
                    onClick={onClose}
                    aria-label={t('Fechar modal', 'Close modal')}
                >
                    ✕
                </button>
            </div>

            <div className="modal-body">
                <div className="exp-modal-section">
                    <div className="exp-modal-section-label">
                        {t('resumo', 'summary')}
                    </div>
                    <p className="exp-modal-summary">{t(item.descPt, item.descEn)}</p>
                </div>

                <div className="exp-modal-section">
                    <div className="exp-modal-section-label">
                        {t('tecnologias & ferramentas', 'technologies & tools')}
                    </div>
                    <div className="tl-techs" style={{ marginTop: '8px' }}>
                        {item.techs.map(tech => (
                            <span key={tech} className="tech-tag">{tech}</span>
                        ))}
                    </div>
                </div>

                {details && details.length > 0 && (
                    <div className="exp-modal-section">
                        <div className="exp-modal-section-label">
                            {t('responsabilidades & entregas', 'responsibilities & deliverables')}
                        </div>
                        <ul ref={listRef} className="exp-modal-details-list">
                            {details.map((detail, i) => (
                                <li key={i} className="exp-modal-detail-item">
                                    <span className="exp-modal-detail-dot" />
                                    <span>{detail}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            <div className="modal-footer">
                <span />
                <button className="btn-ghost" onClick={onClose}>
                    {t('Fechar', 'Close')}
                </button>
            </div>
        </div>
    )
}

export default function Experience() {
    const { lang } = useLang()
    const t = (pt: string, en: string) => lang === 'pt' ? pt : en

    const [open, setOpen] = useState(false)
    const [activeItem, setActiveItem] = useState<ExpItem | null>(null)
    const wrapRef = useRef<HTMLDivElement>(null)
    const innerRef = useRef<HTMLDivElement>(null)

    const eyebrowRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const toggleRef = useRef<HTMLDivElement>(null)

    useReveal(eyebrowRef as React.RefObject<HTMLElement>)
    useReveal(titleRef as React.RefObject<HTMLElement>)
    useReveal(toggleRef as React.RefObject<HTMLElement>)

    const openModal = useCallback((item: ExpItem) => {
        setActiveItem(item)
        document.body.style.overflow = 'hidden'
        document.documentElement.style.overflow = 'hidden'
    }, [])

    const closeModal = useCallback(() => {
        setActiveItem(null)
        document.body.style.overflow = ''
        document.documentElement.style.overflow = ''
    }, [])

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeModal() }
        document.addEventListener('keydown', onKey)
        return () => document.removeEventListener('keydown', onKey)
    }, [closeModal])

    useEffect(() => () => {
        document.body.style.overflow = ''
        document.documentElement.style.overflow = ''
    }, [])

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
        <>
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
                            onDetails={() => openModal(item)}
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
                                    onDetails={() => openModal(item)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <div
                className={`modal-overlay${activeItem ? ' open' : ''}`}
                onClick={(e) => { if (e.target === e.currentTarget) closeModal() }}
                aria-modal="true"
                role="dialog"
                aria-labelledby="modal-exp-title"
            >
                {activeItem && <ExpModal item={activeItem} onClose={closeModal} />}
            </div>
        </>
    )
}
