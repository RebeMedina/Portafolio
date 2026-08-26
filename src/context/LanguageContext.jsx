import { createContext, useContext, useEffect, useState } from 'react'
import { content, ui } from '../data/data.js'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  // English is the default language for the site.
  const [lang, setLang] = useState('en')

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const toggleLang = () => setLang((current) => (current === 'en' ? 'es' : 'en'))

  const value = {
    lang,
    setLang,
    toggleLang,
    data: content[lang],
    t: ui[lang],
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return ctx
}
