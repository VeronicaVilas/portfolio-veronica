import { RefreshCw, SquarePlay, ShoppingCart, ShoppingBag, Dumbbell } from 'lucide-react'

const ico = { size: 34, color: 'rgba(196,168,130,0.42)', strokeWidth: 1.5 }

export type Project = {
    id: string
    icon: React.ReactNode
    tagPt: string
    tagEn: string
    namePt: string
    nameEn: string
    descPt: string
    descEn: string
    techs: string[]
    impactPt?: string
    impactEn?: string
    impactListPt?: string[]
    impactListEn?: string[]
    link?: string
    github?: string
    wide?: boolean
}

export const PROJECTS: Project[] = [
    {
        id: 'participe',
        icon: <RefreshCw {...ico} />,
        tagPt: 'startup · cofundadora',
        tagEn: 'startup · co-founder',
        namePt: 'Participe.ai',
        nameEn: 'Participe.ai',
        descPt: 'Plataforma digital de economia circular que conecta empresas com excedentes a novos canais de escoamento, transformando perdas em valor econômico, social e ambiental. Atuo como cofundadora, responsável pelo design da experiência, estratégia de produto e desenvolvimento Front-end.',
        descEn: 'Digital circular economy platform that connects companies with surplus products to new distribution channels, transforming waste into economic, social, and environmental value. As co-founder, I lead product strategy, user experience design, and Front-end development.',
        techs: ['Angular', 'TypeScript', 'Figma', 'UX/UI', 'Product', 'Design Thinking'],
        impactListPt: [
            '2º lugar no Bahia Innovate Summit',
            'Projeto idealizado e desenvolvido em hackathon de inovação',
            'Responsável pelo Front-end, UX/UI e design da plataforma',
            'Definição da estratégia de produto e validação de funcionalidades',
            'Foco em economia circular, sustentabilidade e impacto social',
        ],
        impactListEn: [
            '2nd place at Bahia Innovate Summit',
            'Project conceived and built during an innovation hackathon',
            'Responsible for Front-end, UX/UI and platform design',
            'Product strategy definition and feature validation',
            'Focus on circular economy, sustainability and social impact',
        ],
        link: 'https://www.participeai.com.br/',
        wide: true,
    },
    {
        id: 'loopizone',
        icon: <SquarePlay {...ico} />,
        github: 'https://github.com/VeronicaVilas/loopiZone',
        tagPt: 'frontend · streaming',
        tagEn: 'frontend · streaming',
        namePt: 'LoopiZone',
        nameEn: 'LoopiZone',
        descPt: 'Plataforma de vídeos inspirada em serviços de streaming, desenvolvida em Angular com foco em experiência do usuário, autenticação social e interfaces modernas. O projeto simula funcionalidades presentes em plataformas como YouTube, unindo design estratégico e desenvolvimento Front-end.',
        descEn: 'Video streaming platform inspired by modern content services, developed with Angular and focused on user experience, social authentication, and modern interfaces. The project simulates core features found in platforms such as YouTube, combining strategic design and Front-end development.',
        techs: ['Angular', 'TypeScript', 'JavaScript', 'Figma', 'UX/UI', 'Responsive Design'],
    },
    {
        id: 'listify',
        icon: <ShoppingCart {...ico} />,
        github: 'https://github.com/VeronicaVilas/listify',
        tagPt: 'frontend · produtividade',
        tagEn: 'frontend · productivity',
        namePt: 'Listify',
        nameEn: 'Listify',
        descPt: 'Aplicação web para gerenciamento inteligente de listas de compras, desenvolvida com Angular e Angular Material. O projeto combina experiência do usuário, organização visual e interatividade para tornar o acompanhamento de compras mais simples, rápido e eficiente.',
        descEn: 'Web application for smart shopping list management, built with Angular and Angular Material. The project combines user experience, visual organization, and interactivity to make shopping planning simpler, faster, and more efficient.',
        techs: ['Angular', 'TypeScript', 'Angular Material', 'JSON Server', 'UX/UI', 'Figma'],
    },
    {
        id: 'amigurumi-shop',
        icon: <ShoppingBag {...ico} />,
        github: 'https://github.com/VeronicaVilas/E-Commerce_Amigurumi_Shop',
        link: 'https://e-commerce-amigurumi-shop.netlify.app/',
        tagPt: 'frontend · e-commerce',
        tagEn: 'frontend · e-commerce',
        namePt: 'Amigurumi Shop',
        nameEn: 'Amigurumi Shop',
        descPt: 'E-commerce fictício especializado em amigurumis, desenvolvido com HTML, CSS e JavaScript. O projeto simula a experiência de uma loja virtual moderna, com catálogo de produtos, navegação intuitiva e foco em experiência do usuário.',
        descEn: 'Fictional e-commerce platform focused on handmade amigurumi products, built with HTML, CSS, and JavaScript. The project simulates a modern online store experience with product catalogs, intuitive navigation, and a strong focus on user experience.',
        techs: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'UX/UI'],
    },
    {
        id: 'fitmanager',
        icon: <Dumbbell {...ico} />,
        github: 'https://github.com/DEVinHouse-Zucchetti',
        tagPt: 'fullstack · gestão',
        tagEn: 'fullstack · management',
        namePt: 'FitManager',
        nameEn: 'FitManager',
        descPt: 'Sistema web desenvolvido em equipe para gestão integrada de academias, centralizando processos relacionados a alunos, treinos, recepção e acompanhamento nutricional. O projeto foi construído com foco em organização operacional, experiência do usuário e digitalização de rotinas administrativas.',
        descEn: 'Team-developed web application designed for integrated gym management, centralizing processes related to students, workouts, reception, and nutritional monitoring. The project focused on operational efficiency, user experience, and digital transformation of administrative workflows.',
        techs: ['Vue.js', 'Laravel', 'PostgreSQL', 'AWS', 'REST API', 'Testing', 'Full Stack'],
    },
]

export const FILTER_TAGS = [...new Set(PROJECTS.flatMap(p => p.techs))]
