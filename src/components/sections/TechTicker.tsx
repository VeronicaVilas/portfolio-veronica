'use client'

const ITEMS = [
    'PHP', 'Laravel', 'Angular', 'Vue.js', 'Node.js',
    'TypeScript', 'PostgreSQL', 'MySQL', 'Docker', 'AWS',
    'Figma', 'Git · Gitflow', 'CodeIgniter', 'APIs RESTful', 'Scrum · Kanban',
]

const doubled = [...ITEMS, ...ITEMS]

export default function TechTicker() {
    return (
        <div className="marquee-section">
            <div className="marquee-track">
                {doubled.map((item, i) => (
                    <span key={i} className="mtag">
                        {item}<span className="mdot" />
                    </span>
                ))}
            </div>
        </div>
    )
}
