export type ExpItem = {
    id: string
    rolePt: string
    roleEn: string
    company: string
    location: string
    /** Full period string, or start date only when isCurrent is true */
    period: string
    badgePt: string
    badgeEn: string
    descPt: string
    descEn: string
    techs: string[]
    isCurrent?: boolean
    isEdu?: boolean
}

export const MAIN_EXP: ExpItem[] = [
    {
        id: 'participe',
        rolePt: 'Cofundadora · Gerente de Produto / Dev Front-end',
        roleEn: 'Co-founder · Product Manager / Front-end Dev',
        company: 'Participe.ai',
        location: 'Salvador, BA',
        period: 'Nov 2025',
        badgePt: 'startup · cofundadora',
        badgeEn: 'startup · co-founder',
        descPt: 'Gestão do ciclo de vida do produto digital com alinhamento entre usuários, negócio e execução técnica. Definição de funcionalidades, priorização de backlog e acompanhamento de entregas. Desenvolvimento de interfaces com foco em usabilidade e UX/UI. Análise de dados para decisão e validação de hipóteses contínua.',
        descEn: 'Product lifecycle management with alignment between users, business, and technical execution. Feature definition, backlog prioritization, and delivery tracking. Interface development focused on usability and UX/UI. Data analysis for decision-making and continuous hypothesis validation.',
        techs: ['Vue.js', 'Angular', 'Figma', 'UX/UI', 'Product Management', 'Scrum'],
        isCurrent: true,
    },
    {
        id: 'aastera',
        rolePt: 'Desenvolvedora Full Stack',
        roleEn: 'Full Stack Developer',
        company: 'Aastera Tecnologia',
        location: 'Passo Fundo, RS',
        period: 'Dez 2024 – Abr 2026',
        badgePt: 'fullstack',
        badgeEn: 'fullstack',
        descPt: 'Desenvolvimento de aplicações web, mobile e APIs personalizadas. Criação de ERPs, e-commerces e landing pages. Implementação de chatbots, webhooks e integrações RESTful. Manutenção de sistemas legados com foco em estabilidade e performance.',
        descEn: 'Development of web, mobile applications and custom APIs. Creation of ERPs, e-commerces and landing pages. Implementation of chatbots, webhooks and RESTful integrations. Maintenance of legacy systems focused on stability and performance.',
        techs: ['PHP', 'Laravel', 'CodeIgniter', 'Angular', 'JavaScript', 'MySQL', 'Git'],
    },
    {
        id: 'cepedi',
        rolePt: 'Residente em Software – Restic36',
        roleEn: 'Software Resident – Restic36',
        company: 'CEPEDI',
        location: 'Salvador, BA',
        period: 'Jul 2024 – Nov 2025',
        badgePt: 'residência tecnológica',
        badgeEn: 'tech residency',
        descPt: 'Residência focada em front-end e inovação. Projetos reais com equipes multidisciplinares e boas práticas de engenharia. Liderança técnica em hackathon de plataformas inteligentes de serviços. Apoio em testes backend e DevOps básico.',
        descEn: 'Residency focused on front-end and innovation. Real projects with multidisciplinary teams and engineering best practices. Technical leadership in intelligent service platforms hackathon. Support in backend testing and basic DevOps.',
        techs: ['Angular', 'Angular Material', 'TypeScript', 'Figma', 'Git'],
    },
    {
        id: 'desenvolvendome',
        rolePt: 'Desenvolvedora – Mentoria em Engenharia',
        roleEn: 'Developer – Engineering Mentorship',
        company: 'DesenvolvendoMe',
        location: 'Remoto',
        period: 'Jun 2024 – Dez 2024',
        badgePt: 'mentoria',
        badgeEn: 'mentorship',
        descPt: 'Desenvolvimento de aplicações com PHP, Laravel e Django. Aplicação de Gitflow e boas práticas de qualidade. Mentoria focada em engenharia de software, produtividade e crescimento técnico contínuo.',
        descEn: 'Development of applications with PHP, Laravel and Django. Application of Gitflow and quality best practices. Mentorship focused on software engineering, productivity and continuous technical growth.',
        techs: ['PHP', 'Laravel', 'Django', 'AWS', 'PostgreSQL', 'Linux'],
    },
]

export const OTHER_EXP: ExpItem[] = [
    {
        id: 'atento',
        rolePt: 'Especialista em Atendimento Financeiro',
        roleEn: 'Financial Services Specialist',
        company: 'Atento',
        location: 'Salvador, BA',
        period: 'Out 2022 – Ago 2023',
        badgePt: 'pré-transição',
        badgeEn: 'pre-transition',
        descPt: 'Atendimento consultivo via chat e canais digitais. Vendas e relacionamento com clientes utilizando Salesforce e WhatsApp corporativo.',
        descEn: 'Consultative service via chat and digital channels. Sales and customer relationship management using Salesforce and corporate WhatsApp.',
        techs: ['Salesforce', 'CRM'],
    },
    {
        id: 'ucsal',
        rolePt: 'Assistente de Pesquisa',
        roleEn: 'Research Assistant',
        company: 'Universidade Católica do Salvador',
        location: 'Salvador, BA',
        period: 'Set 2021 – Dez 2022',
        badgePt: 'pesquisa acadêmica',
        badgeEn: 'academic research',
        descPt: 'Pesquisa em otimização energética com Aspen Plus e CFD. Modelagem de equipamentos e simulações computacionais.',
        descEn: 'Energy optimization research with Aspen Plus and CFD. Equipment modeling and computational simulations.',
        techs: ['Aspen Plus', 'CFD', 'Excel'],
        isEdu: true,
    },
]
