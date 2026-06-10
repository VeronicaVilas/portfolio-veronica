'use client'

import { useRef, useEffect, memo } from 'react'
import { useLang, useT, type Lang } from '../../hooks/useLang'
import { useReveal } from '../../hooks/useReveal'
import { SKILL_BARS, SKILL_PILLS, type SkillBar } from '../../data/skills'

const SkillRow = memo(function SkillRow({ skill, delay, lang }: {
    skill: SkillBar
    delay: 1 | 2 | 3 | 4
    lang: Lang
}) {
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

    const years = new Date().getFullYear() - skill.since
    const label = lang === 'pt'
        ? (years === 1 ? '1 ano' : `${years} anos`)
        : (years === 1 ? '1 year' : `${years} years`)

    return (
        <div ref={rowRef} className={`skill-row reveal rd${delay}`}>
            <span className="skill-name">{skill.name}</span>
            <div className="skill-track">
                <div ref={fillRef} className="skill-fill" style={{ width: 0 }} />
            </div>
            <span className="skill-pct">{label}</span>
        </div>
    )
})

export default function Skills() {
    const t          = useT()
    const { lang }   = useLang()

    const eyebrowRef    = useRef<HTMLDivElement>(null)
    const titleRef      = useRef<HTMLHeadingElement>(null)
    const leftLabelRef  = useRef<HTMLDivElement>(null)
    const rightLabelRef = useRef<HTMLDivElement>(null)
    const pillsRef      = useRef<HTMLDivElement>(null)

    useReveal(eyebrowRef)
    useReveal(titleRef)
    useReveal(leftLabelRef)
    useReveal(rightLabelRef)
    useReveal(pillsRef)

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
                            lang={lang}
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
