export type ExpItem = {
    id: string
    rolePt: string
    roleEn: string
    company: string
    location: string
    period: string
    badgePt: string
    badgeEn: string
    descPt: string
    descEn: string
    techs: string[]
    detailsPt?: string[]
    detailsEn?: string[]
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
        descPt: 'Liderança da evolução da Participe.ai, conectando estratégia de produto, experiência do usuário e desenvolvimento de software para transformar desafios em soluções digitais de impacto. Responsável pela definição da visão do produto, priorização de funcionalidades, validação de soluções, desenvolvimento das interfaces da plataforma e tomada de decisões orientadas por dados, garantindo alinhamento entre necessidades dos usuários, objetivos de negócio e crescimento da startup.', 
        descEn: 'Leading the evolution of Participe.ai by connecting product strategy, user experience, and software development to transform complex challenges into impactful digital solutions. Responsible for product vision, feature prioritization, solution validation, front-end development, and data-driven decision-making, ensuring alignment between user needs, business goals, and startup growth.', 
        techs: [ 'Angular', 'TypeScript', 'JavaScript', 'Figma', 'UX/UI', 'Product Management', 'Scrum', 'Kanban', 'Git', 'GitHub', 'Data Analysis', 'Prototyping', 'Design Thinking' ], 
        detailsPt: [ 
            'Estruturação e evolução do produto digital, definindo visão estratégica, proposta de valor e direcionamento das funcionalidades alinhadas às necessidades dos usuários e aos objetivos da startup', 
            'Gestão de roadmap, backlog e priorização de funcionalidades, conduzindo processos de discovery, validação de hipóteses e acompanhamento de entregas para maximizar impacto e geração de valor', 
            'Condução de iniciativas de UX/UI, incluindo pesquisa com usuários, mapeamento de jornadas, arquitetura da informação, prototipação, testes de usabilidade e melhoria contínua da experiência da plataforma', 
            'Desenvolvimento Front-end de interfaces responsivas e escaláveis, garantindo consistência visual, usabilidade, desempenho e integração eficiente com serviços e APIs', 
            'Análise de métricas, comportamento dos usuários e indicadores de produto para apoiar decisões estratégicas, validar oportunidades de crescimento e orientar a evolução contínua da plataforma' 
        ], 
        detailsEn: [ 
            'Product strategy and evolution, defining vision, value proposition, and feature direction aligned with user needs and startup objectives', 
            'Roadmap planning, backlog management, and feature prioritization, leading discovery processes, hypothesis validation, and delivery tracking to maximize business and user value', 
            'Leadership of UX/UI initiatives, including user research, journey mapping, information architecture, prototyping, usability testing, and continuous experience optimization', 'Front-end development of responsive and scalable interfaces, ensuring visual consistency, usability, performance, and seamless API integrations', 
            'Analysis of product metrics, user behavior, and performance indicators to support strategic decisions, validate growth opportunities, and drive continuous product improvement' 
        ],
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
        descPt: 'Desenvolvimento e evolução de soluções digitais para diferentes segmentos de mercado, incluindo ERPs, e-commerces, landing pages, APIs, chatbots e integrações com serviços externos. Participação em todas as etapas do ciclo de desenvolvimento, desde a análise de requisitos e modelagem das soluções até a implementação, manutenção e evolução dos sistemas. Atuação integrada entre front-end, back-end, banco de dados e integrações, contribuindo para a entrega de aplicações escaláveis, seguras e alinhadas às necessidades dos clientes.', 
        descEn: 'Development and evolution of digital solutions for multiple business sectors, including ERP systems, e-commerce platforms, landing pages, APIs, chatbots, and third-party integrations. Involvement throughout the entire software development lifecycle, from requirements analysis and solution design to implementation, maintenance, and continuous improvement. Worked across front-end, back-end, databases, and integrations, delivering scalable, secure, and business-oriented applications.', 
        techs: [ 'PHP', 'Laravel', 'CodeIgniter', 'Angular', 'Vue.js', 'JavaScript', 'HTML5', 'CSS3', 'MySQL', 'Git', 'GitHub', 'REST API', 'Webhooks', 'Chatbots' ], 
        detailsPt: [ 
            'Desenvolvimento de sistemas ERP voltados à gestão de processos empresariais, automação de rotinas operacionais, centralização de informações estratégicas e otimização do fluxo de trabalho das organizações', 
            'Construção e evolução de plataformas de e-commerce, implementando funcionalidades para catálogo de produtos, integrações externas, personalização de jornadas de compra e melhoria da experiência dos usuários', 
            'Criação de landing pages e aplicações web responsivas com foco em desempenho, acessibilidade, conversão e compatibilidade entre diferentes dispositivos e navegadores', 
            'Desenvolvimento de APIs RESTful, webhooks, widgets e integrações entre sistemas, possibilitando sincronização de dados, automação de processos e comunicação eficiente entre plataformas', 
            'Implementação de chatbots e soluções automatizadas para atendimento, suporte e interação com usuários, contribuindo para ganho de produtividade e eficiência operacional', 
            'Modernização e manutenção de sistemas legados por meio de correções, refatorações e otimizações voltadas à estabilidade, segurança, desempenho e escalabilidade das aplicações', 
            'Colaboração em equipes multidisciplinares seguindo boas práticas de engenharia de software, versionamento com Git, revisão de código e metodologias ágeis para garantir qualidade e entrega contínua de valor' 
        ], 
        detailsEn: [ 
            'Development of ERP systems focused on business process management, operational automation, centralized data handling, and workflow optimization', 
            'Design and evolution of e-commerce platforms, implementing product catalog features, third-party integrations, customized purchasing journeys, and customer experience improvements', 
            'Creation of responsive landing pages and web applications focused on performance, accessibility, conversion optimization, and cross-device compatibility', 
            'Development of RESTful APIs, webhooks, widgets, and system integrations, enabling data synchronization, process automation, and seamless communication between platforms', 
            'Implementation of chatbot solutions and automated interaction tools, improving customer support, productivity, and operational efficiency', 
            'Modernization and maintenance of legacy systems through refactoring, optimization, and corrective actions focused on stability, security, performance, and scalability', 
            'Collaboration within multidisciplinary teams applying software engineering best practices, Git-based workflows, code reviews, and agile methodologies to ensure quality and continuous value delivery' 
        ],
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
        descPt: 'Residência tecnológica voltada ao desenvolvimento de software e inovação, com atuação em projetos reais desenvolvidos por equipes multidisciplinares. Desenvolvimento de aplicações Front-end utilizando Angular, participação em desafios de inovação e hackathons, além da aplicação de práticas modernas de engenharia de software, metodologias ágeis e colaboração em ambientes de alta performance. A experiência proporcionou vivência prática na construção de soluções digitais, fortalecimento de habilidades técnicas e desenvolvimento de competências em liderança e trabalho em equipe.', 
        descEn: 'Technology residency program focused on software development and innovation, involving real-world projects built by multidisciplinary teams. Developed front-end applications using Angular, participated in innovation challenges and hackathons, and applied modern software engineering practices within agile and high-performance environments. The experience provided hands-on exposure to digital solution development while strengthening technical, leadership, and collaboration skills.', 
        techs: [ 'Angular', 'Angular Material', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Figma', 'Git', 'GitHub', 'Scrum', 'Kanban' ], 
        detailsPt: [ 
            'Desenvolvimento de aplicações Front-end utilizando Angular, Angular Material e TypeScript em projetos reais voltados à inovação tecnológica e transformação digital', 
            'Construção de interfaces responsivas e componentizadas, priorizando reutilização de código, escalabilidade, acessibilidade e experiência do usuário', 
            'Participação em desafios de inovação e hackathons, contribuindo para a concepção, prototipação e desenvolvimento de soluções digitais voltadas à resolução de problemas reais', 
            'Liderança técnica em equipes multidisciplinares durante eventos e projetos da residência, apoiando decisões arquiteturais, organização das entregas e alinhamento técnico das soluções', 
            'Aplicação de práticas modernas de engenharia de software, incluindo versionamento com Git, revisão de código, documentação técnica e desenvolvimento colaborativo', 
            'Utilização de metodologias ágeis em todo o ciclo de desenvolvimento, participando de cerimônias de planejamento, refinamento, revisão e acompanhamento contínuo das entregas', 
            'Colaboração direta com profissionais de diferentes áreas, fortalecendo competências em comunicação, resolução de problemas, trabalho em equipe e desenvolvimento orientado a valor' 
        ], 
        detailsEn: [ 
            'Front-end development using Angular, Angular Material, and TypeScript in real-world projects focused on technological innovation and digital transformation', 
            'Creation of responsive and component-based interfaces with emphasis on code reusability, scalability, accessibility, and user experience', 
            'Participation in innovation challenges and hackathons, contributing to the ideation, prototyping, and development of solutions designed to address real-world problems', 
            'Technical leadership within multidisciplinary teams during residency projects and events, supporting architectural decisions, delivery planning, and technical alignment', 
            'Application of modern software engineering practices, including Git-based workflows, code reviews, technical documentation, and collaborative development', 
            'Use of agile methodologies throughout the development lifecycle, participating in planning, refinement, review, and delivery tracking ceremonies', 
            'Cross-functional collaboration with professionals from different disciplines, strengthening communication, problem-solving, teamwork, and value-driven development skills' 
        ],
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
        descPt: 'Programa de mentoria prática em Engenharia de Software voltado ao desenvolvimento técnico, qualidade de código e preparação para desafios do mercado. Desenvolvimento de aplicações web utilizando PHP, Laravel e Django, aplicação de metodologias modernas de versionamento e colaboração, além do aprofundamento em arquitetura de software, boas práticas de engenharia, ambientes Linux, bancos de dados relacionais e serviços em nuvem.', 
        descEn: 'Hands-on Software Engineering mentorship program focused on technical growth, code quality, and real-world development practices. Built web applications using PHP, Laravel, and Django while applying modern version control workflows, software architecture principles, engineering best practices, Linux environments, relational databases, and cloud technologies.', 
        techs: [ 'PHP', 'Laravel', 'Django', 'AWS', 'PostgreSQL', 'Linux', 'Git', 'GitHub', 'Gitflow' ], 
        detailsPt: [ 
            'Desenvolvimento de aplicações web utilizando PHP, Laravel e Django, aplicando conceitos de arquitetura de software, organização de código e boas práticas de desenvolvimento', 
            'Utilização de Gitflow, versionamento colaborativo e processos de revisão para garantir qualidade, rastreabilidade e manutenção eficiente dos projetos', 
            'Configuração e administração de ambientes Linux voltados ao desenvolvimento, testes e execução de aplicações web', 'Modelagem e manipulação de bancos de dados PostgreSQL, trabalhando com consultas, relacionamentos e organização eficiente das informações', 
            'Introdução e utilização de serviços AWS para compreensão de conceitos relacionados à infraestrutura, hospedagem e computação em nuvem', 
            'Participação em mentorias técnicas focadas em engenharia de software, resolução de problemas, produtividade, arquitetura de aplicações e tomada de decisões técnicas', 
            'Desenvolvimento de projetos práticos com acompanhamento de profissionais experientes, recebendo feedback contínuo sobre código, arquitetura, padrões de projeto e evolução profissional' 
        ], 
        detailsEn: [ 
            'Development of web applications using PHP, Laravel, and Django while applying software architecture principles, clean code practices, and maintainable development patterns', 
            'Use of Gitflow, collaborative version control workflows, and review processes focused on quality, traceability, and long-term maintainability', 
            'Configuration and management of Linux environments for application development, testing, and deployment workflows', 'Database modeling and management using PostgreSQL, working with queries, relationships, and efficient data organization', 'Introduction to AWS services and cloud computing concepts related to infrastructure, hosting, scalability, and deployment', 
            'Participation in technical mentoring sessions focused on software engineering, problem-solving, productivity, application architecture, and technical decision-making', 
            'Development of practical projects under the guidance of experienced professionals, receiving continuous feedback on code quality, architecture, design patterns, and professional growth' 
        ],
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
        descPt: 'Atuação em operações de atendimento e relacionamento no setor financeiro, prestando suporte consultivo por canais digitais e conduzindo interações voltadas à resolução de demandas, retenção e experiência do cliente. Utilização de Salesforce, WhatsApp Corporativo e ferramentas de CRM para acompanhamento de atendimentos, gestão de informações e identificação de oportunidades comerciais. A experiência fortaleceu competências em comunicação estratégica, negociação, resolução de problemas, análise de necessidades e tomada de decisão em ambientes de alta demanda.',
        descEn: 'Worked within financial customer service operations, providing consultative support through digital channels and managing customer interactions focused on problem resolution, retention, and customer experience. Utilized Salesforce, Corporate WhatsApp, and CRM tools to track interactions, manage information, and identify commercial opportunities. This experience strengthened skills in strategic communication, negotiation, problem-solving, customer needs analysis, and decision-making in high-demand environments.',
        techs: ['Salesforce', 'CRM']
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
        descPt: 'Participação em projetos de pesquisa voltados à otimização energética e modelagem computacional de processos industriais, utilizando ferramentas de simulação como Aspen Plus e CFD. Desenvolvimento de estudos técnicos, modelagem de equipamentos, análise de cenários operacionais e interpretação de resultados para avaliação de eficiência e desempenho de sistemas. A experiência contribuiu para o fortalecimento de competências analíticas, pensamento sistêmico, resolução de problemas complexos e tomada de decisão baseada em dados.',
        descEn: 'Participated in research projects focused on energy optimization and computational modeling of industrial processes using simulation tools such as Aspen Plus and CFD. Conducted technical studies, equipment modeling, operational scenario analysis, and performance evaluations based on simulation results. This experience strengthened analytical thinking, systems-oriented problem solving, data-driven decision-making, and technical research skills.',
        techs: ['Aspen Plus', 'CFD', 'Excel'],
        isEdu: true,
    },
    {
        id: 'hospital',
        rolePt: 'Assistente Administrativo | Jovem Aprendiz',
        roleEn: 'Administrative Assistant | Apprentice',
        company: 'Hospital Santa Izabel',
        location: 'Salvador, BA',
        period: 'Set 2015 – Jan 2017',
        badgePt: 'administração',
        badgeEn: 'administration',
        descPt: 'Suporte às rotinas administrativas e operacionais de uma das principais instituições hospitalares da Bahia, atuando na organização de processos, controle de indicadores, acompanhamento de metas e gestão de informações por meio de sistemas internos e ferramentas como Excel. Desenvolvimento de competências em organização, atenção aos detalhes, relacionamento interpessoal e acompanhamento de processos em ambientes que exigem precisão, responsabilidade e eficiência.',
        descEn: 'Supported administrative and operational activities within one of Bahia’s leading healthcare institutions, assisting with process organization, performance indicator tracking, goal monitoring, and information management through internal systems and Excel. Developed strong organizational, detail-oriented, interpersonal, and process management skills in environments that demand accuracy, responsibility, and efficiency.',
        techs: ['Excel', 'Administrative Processes']
    },
    {
        id: 'prefeitura',
        rolePt: 'Assistente Administrativo | Estagiária',
        roleEn: 'Administrative Assistant | Intern',
        company: 'Prefeitura de Salvador',
        location: 'Salvador, BA',
        period: 'Jan 2014 – Dez 2014',
        badgePt: 'gestão pública',
        badgeEn: 'public administration',
        descPt: 'Atuação em atividades administrativas e organização de informações em ambiente de gestão pública, apoiando processos internos por meio da consolidação de dados, controle documental e elaboração de planilhas utilizando Excel. Experiência voltada ao desenvolvimento de habilidades de organização, gestão de informações, controle de processos e suporte à tomada de decisão baseada em dados.',
        descEn: 'Supported administrative activities within the public sector, assisting with information organization, document control, data consolidation, and spreadsheet management using Excel. This experience contributed to the development of organizational skills, information management, process control, and data-driven support for decision-making.',
        techs: ['Excel', 'Administrative Management']
    }
]
