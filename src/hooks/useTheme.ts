'use client'

import { useState, useEffect } from 'react'

export type Theme = 'dark' | 'light'

export function useTheme() {

    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window === 'undefined') return 'dark'
        return (localStorage.getItem('theme') as Theme) ?? 'dark'
    })

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = () => setTheme(p => p === 'dark' ? 'light' : 'dark')

    return { theme, toggleTheme }
}
