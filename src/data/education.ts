export type EduDegree = {
  id: string
  yearRange: string
  degreePt: string
  degreeEn: string
  school: string
  chipPt: string
  chipEn: string
}

export type EduCourse = {
  id: string
  year: string
  namePt: string
  nameEn: string
  inst: string
  seemore?: true
  inProgress?: true
}

export type ModalCourse = {
  id: string
  namePt: string
  nameEn: string
  inst: string
  year: string
  tags: string[]
  inProgress?: true
}

export const EDU_DEGREES: EduDegree[] = [
  {
    id: 'devinhouse',
    yearRange: '2023 – 2024',
    degreePt: 'Desenvolvimento Full Stack',
    degreeEn: 'Full Stack Development',
    school: 'SENAI/SC – DEVinHouse',
    chipPt: 'certificação completa',
    chipEn: 'full certification',
  },
  {
    id: 'ucsal',
    yearRange: '2017 – 2022',
    degreePt: 'Bacharelado em Engenharia Química',
    degreeEn: "Bachelor's in Chemical Engineering",
    school: 'Universidade Católica do Salvador',
    chipPt: 'base analítica & sistêmica',
    chipEn: 'analytical & systemic foundation',
  },
]

export const EDU_COURSES: EduCourse[] = [
  { id: 'cisco',    year: '2026',        namePt: 'Introdução à Cibersegurança',                     nameEn: 'Introduction to Cybersecurity',         inst: 'CISCO'          },
  { id: 'cisco-net', year: '2026',        namePt: 'Fundamentos em Redes',                     nameEn: 'Networking Basics',                     inst: 'CISCO'          },
  { id: 'cepedi',   year: '2024 – 2025', namePt: 'Desenvolvimento Front-end (UI/UX + Angular 13+)', nameEn: 'Front-end Development (UI/UX + Angular 13+)', inst: 'CEPEDI'    },
  { id: 'php',      year: '2024',        namePt: 'PHP Moderno',                                     nameEn: 'Modern PHP',                            inst: 'Curso em Vídeo' },
  { id: 'seemore',  year: '',            namePt: '',                                                 nameEn: '',                                      inst: '', seemore: true },
  { id: 'progress', year: '',            namePt: '',                                                 nameEn: '',                                      inst: '', inProgress: true },
]

export const MODAL_COURSES: ModalCourse[] = [
  { id: 'php-laravel-vue',   namePt: 'Desenvolvimento Web Avançado com PHP, Laravel e Vue.JS', nameEn: 'Advanced Web Development with PHP, Laravel and Vue.JS', inst: 'Udemy',  year: '2026', tags: ['PHP', 'Laravel', 'Vue.js']           },
  { id: 'backend-java-dio',  namePt: 'Backend com Java',                                       nameEn: 'Backend with Java',                                     inst: 'DIO',   year: '2024', tags: ['Java', 'Backend']                    },
  { id: 'angular-17',        namePt: 'Introdução a Angular 17+',                               nameEn: 'Introduction to Angular 17+',                           inst: 'DIO',   year: '2024', tags: ['Angular', 'TypeScript']              },
  { id: 'git-dio',           namePt: 'Versionamento de Código com Git e GitHub',               nameEn: 'Version Control with Git and GitHub',                   inst: 'DIO',   year: '2024', tags: ['Git', 'GitHub']                      },
  { id: 'tech-lead-comm',    namePt: 'Tech Lead: desenvolvendo habilidades de comunicação',    nameEn: 'Tech Lead: Developing Communication Skills',             inst: 'Alura', year: '2024', tags: ['Leadership', 'Communication']       },
  { id: 'tech-lead-people',  namePt: 'Tech Lead: gerindo pessoas e guiando para alta performance', nameEn: 'Tech Lead: Managing People and Leading to High Performance', inst: 'Alura', year: '2024', tags: ['Leadership', 'Management'] },
  { id: 'kanban',            namePt: 'Kanban: análises para implementação',                    nameEn: 'Kanban: Analysis for Implementation',                    inst: 'Alura', year: '2024', tags: ['Kanban', 'Agile']                    },
  { id: 'scrum',             namePt: 'Scrum: agilidade em seu projeto',                        nameEn: 'Scrum: Agility in Your Project',                         inst: 'Alura', year: '2024', tags: ['Scrum', 'Agile']                     },
  { id: 'product-mgmt',      namePt: 'Product Management: agilize o desenvolvimento de produtos', nameEn: 'Product Management: Accelerate Product Development', inst: 'Alura', year: '2024', tags: ['Product Management', 'Agile']       },
  { id: 'design-thinking-1', namePt: 'Design Thinking: inove ao focar no problema e crie soluções assertivas para seu negócio', nameEn: 'Design Thinking: Innovate by Focusing on the Problem', inst: 'Alura', year: '2024', tags: ['Design Thinking'] },
  { id: 'design-thinking-2', namePt: 'Design Thinking: viabilizando soluções',                nameEn: 'Design Thinking: Making Solutions Viable',               inst: 'Alura', year: '2024', tags: ['Design Thinking']                  },
  { id: 'git-alura',         namePt: 'Git e GitHub: compartilhando e colaborando em projetos', nameEn: 'Git and GitHub: Sharing and Collaborating on Projects',  inst: 'Alura', year: '2024', tags: ['Git', 'GitHub']                      },
  { id: 'html-css',          namePt: 'HTML e CSS',                                             nameEn: 'HTML and CSS',                                           inst: 'Alura', year: '2024', tags: ['HTML', 'CSS']                        },
  { id: 'java-alura',        namePt: 'Java',                                                   nameEn: 'Java',                                                   inst: 'Alura', year: '2024', tags: ['Java']                               },
  { id: 'logic-prog',        namePt: 'Lógica de programação',                                  nameEn: 'Programming Logic',                                      inst: 'Alura', year: '2024', tags: ['Logic', 'Programming']              },
  { id: 'progress',          namePt: 'sempre aprendendo...',                                   nameEn: 'always learning...',                                     inst: '',      year: '',     tags: [], inProgress: true                   },
]
