'use client'

import { useEffect } from 'react'

export function useScrollLock(locked: boolean) {
    useEffect(() => {
        if (!locked) return
        document.body.style.overflow = 'hidden'
        document.documentElement.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = ''
            document.documentElement.style.overflow = ''
        }
    }, [locked])
}
