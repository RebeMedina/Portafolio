import { useLanguage } from '../context/LanguageContext.jsx'

export default function Projects() {
  const { data, t } = useLanguage()

  return (
    <section id="projects">
      <div className="container">
        <p className="eyebrow">{t.projects.eyebrow}</p>
        <h2>{t.projects.heading}</h2>

        <div className="cards">
          {data.projects.map((p) => (
            <article key={p.id} className={`card card--${p.accent}`}>
              <a
                className="card__preview"
                href={p.url}
                target="_blank"
                rel="noreferrer"
                title={t.projects.openInNewTab(p.name)}
              >
                <div className="card__preview-frame">
                  <iframe
                    src={p.url}
                    title={t.projects.previewLabel(p.name)}
                    loading="lazy"
                    tabIndex={-1}
                  />
                </div>
                <span className="card__preview-hint">{t.projects.previewHint}</span>
              </a>

              <div className="card__top">
                <span className={`badge ${p.current ? 'badge--live' : ''}`}>
                  {p.current && <span className="badge__dot" />}
                  {p.tag}
                </span>
                <span className="card__period">{p.period}</span>
              </div>

              <h3 className="card__name">{p.name}</h3>
              <p className="card__desc">{p.description}</p>

              <div className="card__stack">
                {p.stack.map((s) => (
                  <span key={s} className="chip">{s}</span>
                ))}
              </div>

              <a className="card__link" href={p.url} target="_blank" rel="noreferrer">
                {t.projects.link}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
