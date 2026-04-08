'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { T, Lang } from './translations'

interface LanguageContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'it',
  setLang: () => {},
  t: (key) => key,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('it')

  const setLang = (l: Lang) => {
    setLangState(l)
  }

  useEffect(() => {
    document.documentElement.lang = lang
    document.title =
      lang === 'it'
        ? 'Foveans — Il sistema operativo per gli agenti AI enterprise'
        : 'Foveans — The operating system for enterprise AI agents'
  }, [lang])

  const t = (key: string): string => T[lang][key] ?? key

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
