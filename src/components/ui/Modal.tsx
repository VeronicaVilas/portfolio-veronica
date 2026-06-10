'use client'

import { useEffect } from 'react'

type Props = {
    open: boolean
    onClose: () => void
    labelledById?: string
    children: React.ReactNode
}

export default function Modal({ open, onClose, labelledById, children }: Props) {
    useEffect(() => {
        if (!open) return
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
        document.addEventListener('keydown', onKey)
        return () => document.removeEventListener('keydown', onKey)
    }, [open, onClose])

    return (
        <div
            className={`modal-overlay${open ? ' open' : ''}`}
            onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
            aria-modal="true"
            role="dialog"
            aria-labelledby={labelledById}
        >
            {open && children}
        </div>
    )
}
