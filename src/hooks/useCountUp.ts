'use client'

import { useEffect } from 'react'

function animateCount(el: HTMLElement, target: number, duration: number) {
    const start = performance.now()
    const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1)
        const ease = 1 - (1 - p) ** 2
        el.textContent = String(Math.round(ease * target))
        if (p < 1) requestAnimationFrame(tick)
        else el.textContent = String(target)
    }
    requestAnimationFrame(tick)
}

export function useCountUp(ref: React.RefObject<HTMLElement | null>, duration = 1800) {
    useEffect(() => {
        const el = ref.current
        if (!el) return
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return
                el.querySelectorAll<HTMLElement>('[data-count]').forEach(node => {
                    animateCount(node, Number(node.getAttribute('data-count')), duration)
                })
                observer.disconnect()
            },
            { threshold: 0.3 }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [duration])
}
