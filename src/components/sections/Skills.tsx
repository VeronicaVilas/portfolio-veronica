'use client'

import { useRef, useEffect } from 'react'
import { useLang } from '../../hooks/useLang'
import { SKILL_BARS, SKILL_PILLS, type SkillBar } from '../../data/skills'

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

function SkillRow({ skill, delay }: { skill: SkillBar; delay: 1 | 2 | 3 | 4 }) {
    const rowRef  = useRef<HTMLDivElement>(null)
    const fillRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const el   = rowRef.current
        const fill = fillRef.current
        if (!el || !fill) return
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('visible')
                    fill.style.width = skill.pct + '%'
                    io.disconnect()
                }
            },
            { threshold: 0.1 }
        )
        io.observe(el)
        return () => io.disconnect()
    }, [skill.pct])

    return (
        <div ref={rowRef} className={`skill-row reveal rd${delay}`}>
            <span className="skill-name">{skill.name}</span>
            <div className="skill-track">
                <div ref={fillRef} className="skill-fill" style={{ width: 0 }} />
            </div>
            <span className="skill-pct">{skill.pct}%</span>
        </div>
    )
}

export default function Skills() {
    const { lang } = useLang()
    const t = (pt: string, en: string) => lang === 'pt' ? pt : en

    const eyebrowRef    = useRef<HTMLDivElement>(null)
    const titleRef      = useRef<HTMLHeadingElement>(null)
    const leftLabelRef  = useRef<HTMLDivElement>(null)
    const rightLabelRef = useRef<HTMLDivElement>(null)
    const pillsRef      = useRef<HTMLDivElement>(null)

    useReveal(eyebrowRef    as React.RefObject<HTMLElement>)
    useReveal(titleRef      as React.RefObject<HTMLElement>)
    useReveal(leftLabelRef  as React.RefObject<HTMLElement>)
    useReveal(rightLabelRef as React.RefObject<HTMLElement>)
    useReveal(pillsRef      as React.RefObject<HTMLElement>)

    return (
        <section id="skills">
            <div ref={eyebrowRef} className="sec-eyebrow reveal">
                <span className="sec-num">02</span>
                <div className="sec-dash" />
                <span className="sec-label">{t('stack técnico', 'technical stack')}</span>
            </div>
            <h2 ref={titleRef} className="sec-title reveal">
                <span>{t('Habilidades', 'Technical')}</span><br />
                <em>{t('Técnicas', 'Skills')}</em>
            </h2>

            <div className="skills-layout">
                <div>
                    <div ref={leftLabelRef} className="skill-group-title reveal">
                        {t('stack principal', 'main stack')}
                    </div>
                    {SKILL_BARS.map((skill, i) => (
                        <SkillRow
                            key={skill.name}
                            skill={skill}
                            delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
                        />
                    ))}
                </div>

                <div>
                    <div ref={rightLabelRef} className="skill-group-title reveal">
                        {t('ferramentas & metodologias', 'tools & methodologies')}
                    </div>
                    <div ref={pillsRef} className="pill-cloud reveal rd1">
                        {SKILL_PILLS.map(pill => (
                            <span key={pill.label} className={`pill${pill.hot ? ' hot' : ''}`}>
                                {pill.label}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
