import { useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext.jsx'

function useTypedLines(lines, active) {
  const [done, setDone] = useState([])
  const [current, setCurrent] = useState('')
  const [lineIndex, setLineIndex] = useState(0)

  // Reset the typing animation whenever the source lines change (e.g. language switch).
  useEffect(() => {
    setDone([])
    setCurrent('')
    setLineIndex(0)
  }, [lines])

  useEffect(() => {
    if (!active || lineIndex >= lines.length) return
    const full = lines[lineIndex].cmd
    if (current.length < full.length) {
      const t = setTimeout(() => setCurrent(full.slice(0, current.length + 1)), 38)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => {
      setDone((d) => [...d, lines[lineIndex]])
      setCurrent('')
      setLineIndex((i) => i + 1)
    }, 480)
    return () => clearTimeout(t)
  }, [active, current, lineIndex, lines])

  return { done, current, lineIndex }
}

export default function Hero() {
  const { data, t } = useLanguage()
  const { done, current, lineIndex } = useTypedLines(t.hero.terminalLines, true)

  return (
    <section id="top" className="hero">
      <div className="container hero__grid">
        <div>
          <p className="eyebrow">{t.hero.eyebrow} · {data.profile.location}</p>
          <h1 className="hero__title">
            {t.hero.titleLine1}
            <span className="hero__title-accent"> {t.hero.titleAccent}</span>
          </h1>
          <p className="hero__summary">{data.profile.summary}</p>
          <div className="hero__cta">
            <a className="btn btn--primary" href="#projects">{t.hero.ctaPrimary}</a>
            <a className="btn btn--ghost" href="#contact">{t.hero.ctaGhost}</a>
          </div>
        </div>

        <div className="terminal" role="img" aria-label={t.hero.terminalLabel}>
          <div className="terminal__bar">
            <span className="dot dot--r" />
            <span className="dot dot--y" />
            <span className="dot dot--g" />
            <span className="terminal__title">rebeca@portfolio ~ %</span>
          </div>
          <div className="terminal__body">
            {done.map((l, i) => (
              <div key={i} className="terminal__block">
                <p className="terminal__cmd">$ {l.cmd}</p>
                <p className="terminal__out">{l.out}</p>
              </div>
            ))}
            {lineIndex < t.hero.terminalLines.length && (
              <p className="terminal__cmd">
                $ {current}
                <span className="cursor" />
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
