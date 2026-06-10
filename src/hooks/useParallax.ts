'use client'

import { useEffect } from 'react'

export function useParallax(
    ref: React.RefObject<HTMLElement | null>,
    factor = 0.28
) {
    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return
            ref.current.style.transform = `translateY(calc(-50% + ${window.scrollY * factor}px))`
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [factor])
}
