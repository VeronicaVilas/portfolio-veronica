export interface HeroProps {
    lang: 'pt' | 'en'
}

export interface Star {
  x: number
  y: number
  r: number
  opacity: number
  speed: number
}

export interface Experience {
    id: number
    role: string
    company: string
    location: string
    period: string
    current: string
    tech: boolean
    badge: string
    description: string
    techs: string[]
}

export interface Project {
    id: number
    name: string
    tag: string
    description: string
    techs: string[]
    url?: string
    featured?: boolean
}

export interface Course {
    name: string
    institution: string
    year: string
    tags: string[]
    informal?: boolean
    inProgress: boolean
}