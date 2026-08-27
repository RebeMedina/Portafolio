import { useLanguage } from "../context/LanguageContext.jsx";

export default function Projects() {
  const { data, t } = useLanguage();

  return (
    <section id="projects">
      {" "}
      <div className="container">
        {" "}
        <p className="eyebrow">{t.projects.eyebrow}</p>{" "}
        <h2>{t.projects.heading}</h2>
        <div className="cards">
          {data.projects.map((p) => {
            const hasPreview = Boolean(p.url);

            return (
              <article key={p.id} className={`card card--${p.accent}`}>
                {/* Preview */}
                {hasPreview ? (
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

                    <span className="card__preview-hint">
                      {t.projects.previewHint}
                    </span>
                  </a>
                ) : (
                  <div className="card__preview card__preview--placeholder">
                    <div
                      className={`card__preview-frame card__preview--${p.accent}`}
                    >
                      <div className="card__preview-placeholder">
                        <span className="card__preview-placeholder-name">
                          {p.name}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className="card__top">
                  <span className={`badge ${p.live ? "badge--live" : ""}`}>
                    {p.live && <span className="badge__dot" />}
                    {p.tag}
                  </span>

                  <span className="card__period">{p.period}</span>
                </div>

                {/* Project name */}
                <h3 className="card__name">{p.name}</h3>

                {/* Description */}
                <p className="card__desc">{p.description}</p>

                {/* Stack */}
                <div className="card__stack">
                  {p.stack.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>

                {/* Project action */}
                {hasPreview ? (
                  <a
                    className="card__link"
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t.projects.link}
                  </a>
                ) : (
                  <span
                    className={`card__link ${
                      p.status === "completed"
                        ? "card__link--completed"
                        : "card__link--disabled"
                    }`}
                  >
                    {p.status === "completed"
                      ? t.projects.completed
                      : t.projects.inProgress}
                  </span>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
