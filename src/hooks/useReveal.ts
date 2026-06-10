'use client'

import { useEffect } from 'react'

export function useReveal(
    ref: React.RefObject<HTMLElement | null>,
    threshold = 0.1
) {
    useEffect(() => {
        const el = ref.current
        if (!el) return
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('visible')
                    io.disconnect()
                }
            },
            { threshold }
        )
        io.observe(el)
        return () => io.disconnect()
    }, [threshold])
}
