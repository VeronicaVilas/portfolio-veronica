'use client'

import { useEffect } from 'react'
import type { Star } from '../types'

function createStars(width: number, height: number): Star[] {
    return Array.from({ length: 120 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.6 + 0.2,
        speed: Math.random() * 0.3 + 0.05,
    }))
}

function drawStar(ctx: CanvasRenderingContext2D, s: Star, rgb: string) {
    s.y -= s.speed
    if (s.y < 0) s.y = ctx.canvas.height
    ctx.beginPath()
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(${rgb},${s.opacity})`
    ctx.fill()
}

export function useStarCanvas(canvasRef: React.RefObject<HTMLCanvasElement | null>) {
    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')!
        let raf: number
        let stars: Star[] = []

        const resize = () => {
            canvas.width = canvas.offsetWidth
            canvas.height = canvas.offsetHeight
            stars = createStars(canvas.width, canvas.height)
        }

        const animate = () => {
            const isLight = document.documentElement.getAttribute('data-theme') === 'light'
            const rgb = isLight ? '124,92,58' : '255,255,255'
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            stars.forEach(s => drawStar(ctx, s, rgb))
            raf = requestAnimationFrame(animate)
        }

        resize()
        animate()
        window.addEventListener('resize', resize)
        return () => {
            cancelAnimationFrame(raf)
            window.removeEventListener('resize', resize)
        }
    }, [])
}
