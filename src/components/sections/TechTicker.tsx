'use client'

const DEFAULT_ITEMS = [
    'PHP', 'Laravel', 'Angular', 'Vue.js', 'Node.js',
    'TypeScript', 'PostgreSQL', 'MySQL', 'Docker', 'AWS',
    'Figma', 'Git · Gitflow', 'CodeIgniter', 'APIs RESTful', 'Scrum · Kanban',
]

const ROLE_ITEMS = [
    'Full Stack Development', 'Product Management', 'UX/UI Design', 'APIs RESTful', 'Liderança Técnica',
    'Cofundadora', 'Código Limpo', 'Visão de Produto',
]

type Props = {
    reverse?: boolean
    items?: string[]
}

export default function TechTicker({ reverse = false, items }: Props) {
    const list = items ?? (reverse ? ROLE_ITEMS : DEFAULT_ITEMS)
    const doubled = [...list, ...list]

    return (
        <div className="marquee-section">
            <div className={`marquee-track${reverse ? ' rev' : ''}`}>
                {doubled.map((item, i) => (
                    <span key={i} className="mtag">
                        {item}<span className="mdot" />
                    </span>
                ))}
            </div>
        </div>
    )
}
