'use client'

import { useRef, useEffect, useState } from 'react'
import { useLang } from '../../hooks/useLang'
import { PROJECTS, FILTER_TAGS, type Project } from '../../data/projects'

function useReveal(ref: React.RefObject<HTMLElement | null>) {
    const [revealed, setRevealed] = useState(false)
    useEffect(() => {
        const el = ref.current
        if (!el) return
        const io = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setRevealed(true); io.disconnect() } },
            { threshold: 0.1 }
        )
        io.observe(el)
        return () => io.disconnect()
    }, [])
    return revealed
}

function ProjectCard({
    project,
    lang,
    filtered,
    delay,
}: {
    project: Project
    lang: 'pt' | 'en'
    filtered: boolean
    delay?: 1 | 2 | 3
}) {
    const cardRef = useRef<HTMLDivElement>(null)
    const revealed = useReveal(cardRef as React.RefObject<HTMLElement>)

    const t = (pt: string, en: string) => lang === 'pt' ? pt : en

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current
        if (!card) return
        const r = card.getBoundingClientRect()
        card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100).toFixed(1) + '%')
        card.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100).toFixed(1) + '%')
    }

    const delayClass = delay ? ` rd${delay}` : ''
    const revealedClass = revealed ? ' visible' : ''
    const filteredClass = filtered ? ' filtered-out' : ''

    if (project.wide) {
        return (
            <div
                ref={cardRef}
                className={`proj-card proj-card-wide reveal${revealedClass}${filteredClass}`}
                onMouseMove={handleMouseMove}
            >
                <div>
                    <div className="proj-icon-wrap">{project.icon}</div>
                    <span className="proj-tag">{t(project.tagPt, project.tagEn)}</span>
                    <div className="proj-name">{t(project.namePt, project.nameEn)}</div>
                    <p className="proj-desc">{t(project.descPt, project.descEn)}</p>
                    <div className="proj-techs">
                        {project.techs.map(tech => (
                            <span key={tech} className="tech-tag">{tech}</span>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="proj-divider" />
                    <div className="proj-impact-label">{t('sobre o projeto', 'about the project')}</div>
                    {project.impactListPt ? (
                        <ul className="proj-impact-list">
                            {(lang === 'pt' ? project.impactListPt : (project.impactListEn ?? project.impactListPt)).map((item) => (
                                <li key={item} className="proj-impact-list-item">
                                    <span className="proj-impact-list-dot" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="proj-impact-text">{t(project.impactPt ?? '', project.impactEn ?? '')}</p>
                    )}
                    {project.link && (
                        <div style={{ marginTop: '1.5rem' }}>
                            <a
                                className="btn-primary"
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {t('Ver projeto →', 'View project →')}
                            </a>
                        </div>
                    )}
                </div>
            </div>
        )
    }

    return (
        <div
            ref={cardRef}
            className={`proj-card reveal${delayClass}${revealedClass}${filteredClass}`}
            onMouseMove={handleMouseMove}
        >
            {(project.github || project.link) && (
                <div className="proj-card-actions">
                    {project.github && (
                        <a className="proj-action-btn" href={project.github} target="_blank" rel="noopener noreferrer" aria-label="Ver código no GitHub">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                            </svg>
                        </a>
                    )}
                    {project.link && (
                        <a className="proj-action-btn" href={project.link} target="_blank" rel="noopener noreferrer" aria-label="Ver deploy">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                <polyline points="15 3 21 3 21 9"/>
                                <line x1="10" y1="14" x2="21" y2="3"/>
                            </svg>
                        </a>
                    )}
                </div>
            )}
            <div className="proj-icon-wrap">{project.icon}</div>
            <span className="proj-tag">{t(project.tagPt, project.tagEn)}</span>
            <div className="proj-name">{t(project.namePt, project.nameEn)}</div>
            <p className="proj-desc">{t(project.descPt, project.descEn)}</p>
            <div className="proj-techs">
                {project.techs.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                ))}
            </div>
        </div>
    )
}

const CARD_DELAYS = [undefined, 1, 2, 3] as const

export default function Projects() {
    const { lang } = useLang()
    const t = (pt: string, en: string) => lang === 'pt' ? pt : en
    const [activeFilter, setActiveFilter] = useState<string>('all')

    const eyebrowRef = useRef<HTMLDivElement>(null)
    const titleRef   = useRef<HTMLHeadingElement>(null)
    const filtersRef = useRef<HTMLDivElement>(null)

    const eyebrowRevealed = useReveal(eyebrowRef as React.RefObject<HTMLElement>)
    const titleRevealed   = useReveal(titleRef   as React.RefObject<HTMLElement>)
    const filtersRevealed = useReveal(filtersRef as React.RefObject<HTMLElement>)

    const isFiltered = (project: Project) => {
        if (activeFilter === 'all') return false
        return !project.techs.includes(activeFilter)
    }

    const visibleCount = PROJECTS.filter(p => !isFiltered(p)).length

    return (
        <section id="projetos">
            <div ref={eyebrowRef} className={`sec-eyebrow reveal${eyebrowRevealed ? ' visible' : ''}`}>
                <span className="sec-num">03</span>
                <div className="sec-dash" />
                <span className="sec-label">{t('portfólio', 'portfolio')}</span>
            </div>
            <h2 ref={titleRef} className={`sec-title reveal${titleRevealed ? ' visible' : ''}`}>
                <span>{t('Projetos em', 'Featured')}</span><br />
                <em>{t('Destaque', 'Projects')}</em>
            </h2>

            <div ref={filtersRef} className={`proj-filters reveal${filtersRevealed ? ' visible' : ''}`}>
                <button
                    className={`pf-btn${activeFilter === 'all' ? ' active' : ''}`}
                    onClick={() => setActiveFilter('all')}
                >
                    {t('Todos', 'All')}
                </button>
                {FILTER_TAGS.map(tag => (
                    <button
                        key={tag}
                        className={`pf-btn${activeFilter === tag ? ' active' : ''}`}
                        onClick={() => setActiveFilter(tag)}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            <div className="proj-grid">
                {PROJECTS.map((project, i) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        lang={lang}
                        filtered={isFiltered(project)}
                        delay={CARD_DELAYS[i]}
                    />
                ))}
            </div>

            {visibleCount === 0 && (
                <div className="proj-empty">
                    <div className="proj-empty-icon">🔍</div>
                    <div className="proj-empty-text">
                        {t('Nenhum projeto com essa tecnologia ainda.', 'No projects with this technology yet.')}
                    </div>
                </div>
            )}

            <div className="proj-formacao-triangle" aria-hidden="true" />
        </section>
    )
}
