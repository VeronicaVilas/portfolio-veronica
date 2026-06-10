'use client'

import { useState, useEffect, useCallback } from 'react'

export type Lang = 'pt' | 'en'

let _current: Lang = 'pt'
const _subs = new Set<(l: Lang) => void>()

function broadcast(l: Lang) {
    _current = l
    _subs.forEach(fn => fn(l))
}

export function useLang() {
    const [lang, setLocal] = useState<Lang>(_current)

    useEffect(() => {
        _subs.add(setLocal)
        return () => { _subs.delete(setLocal) }
    }, [])

    const setLang = useCallback((l: Lang) => broadcast(l), [])

    return { lang, setLang }
}

export function useT() {
    const { lang } = useLang()
    return useCallback(
        (pt: string, en: string) => lang === 'pt' ? pt : en,
        [lang]
    )
}
