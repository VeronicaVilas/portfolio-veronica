export type Project = {
    id: string
    icon: string
    tagPt: string
    tagEn: string
    namePt: string
    nameEn: string
    descPt: string
    descEn: string
    techs: string[]
    impactPt?: string
    impactEn?: string
    link?: string
    wide?: boolean
}

export const PROJECTS: Project[] = [
    {
        id: 'participe',
        icon: '🤝',
        tagPt: 'startup · cofundadora',
        tagEn: 'startup · co-founder',
        namePt: 'Participe.ai',
        nameEn: 'Participe.ai',
        descPt: 'Plataforma digital de participação cidadã. Cofundadora responsável pelo produto, backlog, Figma e front-end.',
        descEn: 'Digital civic participation platform. Co-founder responsible for product, backlog and front-end.',
        techs: ['Vue.js', 'Angular', 'Figma', 'UX/UI', 'Product'],
        impactPt: 'Ativo desde nov/2025 com foco em inovação cívica e tecnologia social.',
        impactEn: 'Active since Nov/2025 focused on civic innovation and social technology.',
        link: 'https://participe.ai',
        wide: true,
    },
    {
        id: 'erps',
        icon: '🪙',
        tagPt: 'fullstack · ERP',
        tagEn: 'fullstack · ERP',
        namePt: 'ERPs & E-commerces',
        nameEn: 'ERPs & E-commerces',
        descPt: 'Sistemas de gestão e lojas virtuais com integrações e APIs RESTful.',
        descEn: 'Custom management systems and online stores with external integrations and RESTful APIs.',
        techs: ['PHP', 'Laravel', 'MySQL', 'Angular'],
    },
    {
        id: 'chatbots',
        icon: '🤖',
        tagPt: 'backend · automação',
        tagEn: 'backend · automation',
        namePt: 'Chatbots & Webhooks',
        nameEn: 'Chatbots & Webhooks',
        descPt: 'Chatbots, webhooks e widgets integrados a APIs externas para automação de atendimento.',
        descEn: 'Chatbots, webhooks and widgets integrated with external APIs for customer service automation.',
        techs: ['Node.js', 'PHP', 'API REST'],
    },
    {
        id: 'hackathon',
        icon: '🏆',
        tagPt: 'hackathon · liderança',
        tagEn: 'hackathon · leadership',
        namePt: 'Plataforma Inteligente',
        nameEn: 'Intelligent Platform',
        descPt: 'Liderança técnica no hackathon Restic36/CEPEDI. Da ideação ao pitch final.',
        descEn: 'Technical leadership in the CEPEDI Restic36 hackathon. From ideation to final pitch.',
        techs: ['Angular', 'TypeScript', 'Figma'],
    },
]

export const FILTER_TAGS = [...new Set(PROJECTS.flatMap(p => p.techs))]
