export type SkillBar = {
    name: string
    pct: number
}

export type SkillPill = {
    label: string
    hot?: boolean
}

export const SKILL_BARS: SkillBar[] = [
    { name: 'PHP · Laravel',       pct: 90 },
    { name: 'Angular · Vue.js',    pct: 88 },
    { name: 'TypeScript · JS',     pct: 85 },
    { name: 'PostgreSQL · MySQL',  pct: 82 },
    { name: 'Node.js · REST APIs', pct: 78 },
    { name: 'Docker · AWS',        pct: 65 },
]

export const SKILL_PILLS: SkillPill[] = [
    { label: 'Figma',             hot: true },
    { label: 'Git & Gitflow',     hot: true },
    { label: 'Scrum',             hot: true },
    { label: 'Kanban',            hot: true },
    { label: 'Auth0' },
    { label: 'Linux' },
    { label: 'Bootstrap' },
    { label: 'Vuetify' },
    { label: 'CodeIgniter' },
    { label: 'Java' },
    { label: 'Django' },
    { label: 'HTML · CSS' },
    { label: 'Angular Material' },
    { label: 'APIs RESTful' },
    { label: 'UX/UI' },
    { label: 'Product Management' },
]
