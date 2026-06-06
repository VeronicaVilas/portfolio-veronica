'use client'

import { useState, useEffect } from 'react'

export type Theme = 'dark' | 'light'

export function useTheme() {
    const [theme, setTheme] = useState<Theme>('dark')

    useEffect(() => {
        const saved = localStorage.getItem('theme') as Theme | null
        const initial = saved ?? 'dark'
        setTheme(initial)
        document.documentElement.setAttribute('data-theme', initial)
    }, [])

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = () => setTheme(p => p === 'dark' ? 'light' : 'dark')

    return { theme, toggleTheme }
}
