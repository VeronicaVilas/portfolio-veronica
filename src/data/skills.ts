export type SkillBar = {
    name: string
    pct: number 
    since: number 
}

export type SkillPill = {
    label: string
    hot?: boolean
}

export const SKILL_BARS: SkillBar[] = [
    { name: 'PHP · Laravel · Vue.js · HTML · CSS · JS', pct: 95, since: 2023 },
    { name: 'PostgreSQL · MySQL',  pct: 95, since: 2024 },
    { name: 'CodeIgniter · TypeScript · Angular · Figma', pct: 80, since: 2024 },
    { name: 'Node.js · WordPress · Docker · AWS', pct: 60, since: 2025 },
    { name: 'React · Next.js', pct: 20, since: 2026 },
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
    { label: 'Angular Material' },
    { label: 'APIs RESTful' },
    { label: 'UX/UI' },
    { label: 'Product Management' },
]
