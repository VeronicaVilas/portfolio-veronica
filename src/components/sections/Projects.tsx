'use client'

import { useRef, useEffect, useState } from 'react'
import { useLang } from '../../hooks/useLang'
import { PROJECTS, FILTER_TAGS, type Project } from '../../data/projects'

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
    useReveal(cardRef as React.RefObject<HTMLElement>)

    const t = (pt: string, en: string) => lang === 'pt' ? pt : en

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current
        if (!card) return
        const r = card.getBoundingClientRect()
        card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100).toFixed(1) + '%')
        card.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100).toFixed(1) + '%')
    }

    const delayClass = delay ? ` rd${delay}` : ''
    const filteredClass = filtered ? ' filtered-out' : ''

    if (project.wide) {
        return (
            <div
                ref={cardRef}
                className={`proj-card proj-card-wide reveal${filteredClass}`}
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
                    <p className="proj-impact-text">{t(project.impactPt ?? '', project.impactEn ?? '')}</p>
                    {project.link && (
                        <div style={{ marginTop: '1.5rem' }}>
                            <button
                                className="btn-primary"
                                onClick={() => window.open(project.link, '_blank')}
                            >
                                {t('Ver projeto →', 'View project →')}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        )
    }

    return (
        <div
            ref={cardRef}
            className={`proj-card reveal${delayClass}${filteredClass}`}
            onMouseMove={handleMouseMove}
        >
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

    useReveal(eyebrowRef as React.RefObject<HTMLElement>)
    useReveal(titleRef   as React.RefObject<HTMLElement>)
    useReveal(filtersRef as React.RefObject<HTMLElement>)

    const isFiltered = (project: Project) => {
        if (activeFilter === 'all') return false
        return !project.techs.includes(activeFilter)
    }

    const visibleCount = PROJECTS.filter(p => !isFiltered(p)).length

    return (
        <section id="projetos">
            <div ref={eyebrowRef} className="sec-eyebrow reveal">
                <span className="sec-num">03</span>
                <div className="sec-dash" />
                <span className="sec-label">{t('portfólio', 'portfolio')}</span>
            </div>
            <h2 ref={titleRef} className="sec-title reveal">
                <span>{t('Projetos em', 'Featured')}</span><br />
                <em>{t('Destaque', 'Projects')}</em>
            </h2>

            <div ref={filtersRef} className="proj-filters reveal">
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
        </section>
    )
}
