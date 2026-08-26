import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext.jsx'
import {
  CodeIcon,
  DatabaseIcon,
  PaletteIcon,
  BotIcon,
  WrenchIcon,
  UsersIcon,
  GlobeIcon,
  AwardIcon,
} from './Icons.jsx'

const ICONS = {
  code: CodeIcon,
  database: DatabaseIcon,
  palette: PaletteIcon,
  bot: BotIcon,
  wrench: WrenchIcon,
  users: UsersIcon,
  globe: GlobeIcon,
  award: AwardIcon,
}

function FlipCard({ iconKey, title, items, hint }) {
  const [flipped, setFlipped] = useState(false)
  const Icon = ICONS[iconKey]

  const flip = () => setFlipped((f) => !f)
  const onKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      flip()
    }
  }

  return (
    <div
      className={`flip-card ${flipped ? 'is-flipped' : ''}`}
      onClick={flip}
      onKeyDown={onKeyDown}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label={title}
    >
      <div className="flip-card__inner">
        <div className="flip-card__face flip-card__front">
          <span className="flip-card__icon"><Icon size={26} /></span>
          <h3 className="flip-card__title">{title}</h3>
          <span className="flip-card__hint">{hint}</span>
        </div>
        <div className="flip-card__face flip-card__back">
          <h3 className="flip-card__title flip-card__title--back">{title}</h3>
          <ul className="flip-card__list">
            {items.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default function Skills() {
  const { data, t } = useLanguage()

  const languageItems = data.spokenLanguages.map((l) => `${l.name} — ${l.level}`)

  return (
    <section id="skills">
      <div className="container">
        <p className="eyebrow">{t.skills.eyebrow}</p>
        <h2>{t.skills.heading}</h2>

        <div className="flip-grid">
          {data.skillCategories.map((cat) => (
            <FlipCard
              key={cat.title}
              iconKey={cat.icon}
              title={cat.title}
              items={cat.items}
              hint={t.skills.hint}
            />
          ))}

          <FlipCard
            iconKey={t.skills.languagesIcon}
            title={t.skills.languagesTitle}
            items={languageItems}
            hint={t.skills.hint}
          />

          <FlipCard
            iconKey={t.skills.certificationsIcon}
            title={t.skills.certificationsTitle}
            items={data.certifications}
            hint={t.skills.hint}
          />
        </div>
      </div>
    </section>
  )
}
