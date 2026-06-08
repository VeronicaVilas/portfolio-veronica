export const DEV_START_YEAR = 2023

export type Stat = {
    count: number | (() => number)
    suffix: string
    labelPt: string
    labelEn: string
}

export const STATS: Stat[] = [
    { count: () => new Date().getFullYear() - DEV_START_YEAR, suffix: '+', labelPt: 'anos dev',    labelEn: 'years dev'    },
    { count: 4,  suffix: '',  labelPt: 'empresas',    labelEn: 'companies'    },
    { count: 20, suffix: '+', labelPt: 'tecnologias', labelEn: 'technologies' },
]
