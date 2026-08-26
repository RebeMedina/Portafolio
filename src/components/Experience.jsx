import { useLanguage } from '../context/LanguageContext.jsx'

export default function Experience() {
  const { data, t } = useLanguage()
  const { experience, academicProjects, education } = data

  return (
    <section id="experience">
      <div className="container">
        <p className="eyebrow">{t.experience.eyebrow}</p>
        <h2>{t.experience.heading}</h2>

        <div className="timeline">
          {experience.map((job) => (
            <article key={job.role} className="job">
              <div className="job__head">
                <h3 className="job__role">{job.role}</h3>
                <span className="job__period">{job.period}</span>
              </div>
              <p className="job__org">{job.org} · {job.place}</p>
              <ul className="job__bullets">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <h3 className="subhead">{t.experience.academicHeading}</h3>
        <div className="timeline">
          {academicProjects.map((proj) => (
            <article key={proj.name} className="job">
              <div className="job__head">
                <h3 className="job__role">{proj.name}</h3>
                <span className="job__period">{proj.period}</span>
              </div>
              <ul className="job__bullets">
                {proj.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="education">
          <p className="eyebrow education__eyebrow">{t.experience.educationEyebrow}</p>
          <h3 className="job__role">{education.degree}</h3>
          <p className="job__org">{education.school} · {education.place} · {education.period}</p>
        </div>
      </div>
    </section>
  )
}
