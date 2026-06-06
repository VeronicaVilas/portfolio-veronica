'use client'

import { useEffect, useRef } from 'react'

const HOVER_SELECTOR = 'a, button, .proj-card, .pill, .clink, .edu-card, .curso-card, .comment-card, .tl-card'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const ring = ringRef.current
    if (!cursor || !ring) return

    let mx = 0, my = 0, rx = 0, ry = 0
    let rafId: number

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
    }

    const animate = () => {
      rx += (mx - rx) * 0.15
      ry += (my - ry) * 0.15
      cursor.style.left = mx + 'px'
      cursor.style.top = my + 'px'
      ring.style.left = rx + 'px'
      ring.style.top = ry + 'px'
      rafId = requestAnimationFrame(animate)
    }

    const onOver = (e: MouseEvent) => {
      if ((e.target as Element).closest(HOVER_SELECTOR)) {
        cursor.classList.add('hovered')
        ring.classList.add('hovered')
      }
    }

    const onOut = (e: MouseEvent) => {
      if ((e.target as Element).closest(HOVER_SELECTOR)) {
        cursor.classList.remove('hovered')
        ring.classList.remove('hovered')
      }
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    rafId = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
