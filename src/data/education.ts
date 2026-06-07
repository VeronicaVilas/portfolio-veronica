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
  name: string
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
  { id: 'cepedi',   year: '2024 – 2025', namePt: 'Desenvolvimento Front-end (UI/UX + Angular 13+)', nameEn: 'Front-end Development (UI/UX + Angular 13+)', inst: 'CEPEDI'    },
  { id: 'devin',    year: '2023 – 2024', namePt: 'Desenvolvimento Full Stack',                      nameEn: 'Full Stack Development',                inst: 'DevinHouse'     },
  { id: 'php',      year: '2024',        namePt: 'PHP Moderno',                                     nameEn: 'Modern PHP',                            inst: 'Curso em Vídeo' },
  { id: 'java',     year: '2024',        namePt: 'Backend com Java',                                nameEn: 'Backend with Java',                     inst: 'DIO'            },
  { id: 'seemore',  year: '',            namePt: '',                                                 nameEn: '',                                      inst: '', seemore: true },
  { id: 'progress', year: '',            namePt: '',                                                 nameEn: '',                                      inst: '', inProgress: true },
]

export const MODAL_COURSES: ModalCourse[] = [
  { id: 'docker',   name: 'Docker para Desenvolvedores',          inst: 'Udemy',            year: '2025', tags: ['Docker', 'DevOps']      },
  { id: 'git',      name: 'Git e GitHub: Do básico ao avançado',  inst: 'Udemy',            year: '2024', tags: ['Git', 'GitHub']         },
  { id: 'vuejs',    name: 'Vue.js 3 Completo',                    inst: 'Udemy',            year: '2024', tags: ['Vue.js', 'Vuetify']     },
  { id: 'ts',       name: 'TypeScript: O Guia Completo',          inst: 'Udemy',            year: '2024', tags: ['TypeScript']            },
  { id: 'sql',      name: 'MySQL + PostgreSQL na prática',        inst: 'Curso em Vídeo',   year: '2024', tags: ['MySQL', 'PostgreSQL']   },
  { id: 'uxui',     name: 'Fundamentos de UX/UI Design',          inst: 'Google / Coursera', year: '2024', tags: ['UX', 'Figma']          },
  { id: 'node',     name: 'Node.js: Criando APIs RESTful',        inst: 'Udemy',            year: '2023', tags: ['Node.js', 'API REST']   },
  { id: 'linux',    name: 'Linux: Fundamentos para Devs',         inst: 'Udemy',            year: '2023', tags: ['Linux', 'Terminal']     },
  { id: 'progress', name: 'sempre aprendendo...',                 inst: 'próximo curso',    year: 'em progresso', tags: [], inProgress: true },
]
