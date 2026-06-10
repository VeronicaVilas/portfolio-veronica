'use client'

import { useCallback } from 'react'

export function useMouseGlow(ref: React.RefObject<HTMLElement | null>) {
    return useCallback((e: React.MouseEvent<HTMLElement>) => {
        const el = ref.current
        if (!el) return
        const r = el.getBoundingClientRect()
        el.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100).toFixed(1) + '%')
        el.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100).toFixed(1) + '%')
    }, [ref])
}
