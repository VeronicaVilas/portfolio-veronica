'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { useLang } from '../../hooks/useLang'

const BIO_1 = {
    pt: 'Minha trajetória profissional é marcada pela capacidade de me reinventar, aprender rapidamente e transformar desafios em oportunidades. Sou Desenvolvedora <strong>Full Stack</strong> com formação em <strong>Engenharia Química</strong>, uma base que me proporcionou forte pensamento analítico, visão sistêmica e uma abordagem estruturada para resolução de problemas complexos. Essa combinação me permite enxergar além do código, compreendendo não apenas a tecnologia, mas também o negócio, os processos e as necessidades reais dos usuários. Minha transição para a área de tecnologia foi construída por meio de muito estudo, projetos práticos e experiências em ambientes dinâmicos. Ao longo da minha jornada, participei de <strong>startups, programas de residência tecnológica e mentorias em engenharia de software</strong>, experiências que fortaleceram minha capacidade de adaptação, colaboração em equipe e entrega de soluções com foco em impacto e geração de valor. Tenho experiência no desenvolvimento de aplicações web completas, atuando desde a concepção da ideia até a implementação, integração de sistemas, modelagem de banco de dados e deploy. Ao longo dos anos, trabalhei com diferentes tecnologias e contextos de negócio, desenvolvendo sistemas corporativos, plataformas digitais, APIs, automações, dashboards e soluções voltadas para otimização de processos.',
    en: "My professional trajectory is marked by my ability to reinvent myself, learn quickly, and transform challenges into opportunities. I'm a <strong>Full Stack</strong> Developer with a background in <strong>Chemical Engineering</strong>, a foundation that provided me with strong analytical thinking, systemic vision, and a structured approach to solving complex problems. This combination allows me to see beyond the code, understanding not just the technology, but also the business, the processes, and the real needs of users. My transition into technology was built through extensive study, hands-on projects, and experiences in dynamic environments. Throughout my journey, I've participated in <strong>startups, technology residency programs, and software engineering mentorships</strong> — experiences that strengthened my ability to adapt, collaborate in teams, and deliver solutions focused on impact and value creation. I have experience developing complete web applications, working from ideation to implementation, including system integration, database modeling, and deployment. Over the years, I've worked with different technologies and business contexts, building enterprise systems, digital platforms, APIs, automations, dashboards, and process optimization solutions.",
}

const BIO_2 = {
    pt: 'Além da atuação técnica, também possuo um perfil empreendedor. Sou fundadora da <strong>Participe.ai</strong>, iniciativa que nasceu da crença de que a tecnologia pode ser utilizada para promover inovação, sustentabilidade e impacto social. Esse projeto ampliou minha visão sobre produto, estratégia, validação de mercado e construção de soluções orientadas às necessidades das pessoas. Minha dedicação ao aprendizado contínuo e à inovação também foi reconhecida por meio de premiações e participações em programas de destaque voltados ao desenvolvimento tecnológico e empreendedorismo, reforçando meu compromisso em criar soluções que vão além da execução técnica e geram resultados concretos. Hoje, meu principal objetivo é continuar evoluindo como profissional, contribuindo para projetos desafiadores e construindo produtos digitais que combinem tecnologia, estratégia e propósito para gerar impacto positivo em empresas, comunidades e na sociedade.',
    en: "Beyond my technical role, I also have an entrepreneurial mindset. I'm the founder of <strong>Participe.ai</strong>, an initiative born from the belief that technology can be used to promote innovation, sustainability, and social impact. This project broadened my vision of product, strategy, market validation, and building solutions driven by people's needs. My dedication to continuous learning and innovation has also been recognized through awards and participation in outstanding programs focused on technological development and entrepreneurship, reinforcing my commitment to creating solutions that go beyond technical execution and deliver concrete results. Today, my main goal is to continue growing as a professional, contributing to challenging projects and building digital products that combine technology, strategy, and purpose to generate positive impact on companies, communities, and society.",
}

export default function About() {
    const { lang } = useLang()
    const t = (pt: string, en: string) => lang === 'pt' ? pt : en
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); observer.disconnect() } },
            { threshold: 0.1 }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return (
        <div className="about-wrapper">
            <div ref={ref} className="about-strip reveal">

                {/* ── Title: Playfair italic, full width ── */}
                <h2 className="sec-title-about">
                    <em>{t('Sobre Mim', 'About Me')}</em><br />
                </h2>

                {/* ── First paragraph: full strip width ── */}
                <p className="about-bio" dangerouslySetInnerHTML={{ __html: BIO_1[lang] }} />

                {/* ── Second paragraph: limited width, stays clear of photo area ── */}
                <div className="about-content">
                    <p className="about-bio" dangerouslySetInnerHTML={{ __html: BIO_2[lang] }} />
                </div>

            </div>

            {/* ── Orbital: outside strip, spinning around the photo ── */}
            <div className="about-orbital-col">
                <div className="photo-orbital">
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
                </div>
            </div>

            {/* ── Photo: outside strip, overlaps the straight edge ── */}
            <div className="about-photo-col">
                <div className="photo-frame">
                    <Image
                        src="/fotodeperfil.png"
                        alt="Verônica Vilas"
                        width={320}
                        height={320}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                        priority
                    />
                </div>
            </div>
        </div>
    )
}
