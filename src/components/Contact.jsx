import { useLanguage } from "../context/LanguageContext.jsx";
import { MailIcon, LinkedinIcon, GithubIcon } from "./Icons.jsx";

export default function Contact() {
  const { data, t } = useLanguage();
  const { profile } = data;

  return (
    <section id="contact" className="contact">
      <div className="container contact__inner">
        <p className="eyebrow">{t.contact.eyebrow}</p>

        <h2>{t.contact.heading}</h2>

        <p className="contact__text">{t.contact.text}</p>

        <div className="contact-terminal">
          {/* Terminal header */}
          <div className="contact-terminal__bar">
            <span className="dot dot--r" />
            <span className="dot dot--y" />
            <span className="dot dot--g" />

            <span className="contact-terminal__title">contact.sh</span>
          </div>

          {/* Terminal content */}
          <div className="contact-terminal__body">
            <div className="contact-terminal__line">
              <span className="contact-terminal__prompt">&gt; name</span>

              <span className="contact-terminal__value">{profile.name}</span>
            </div>

            <div className="contact-terminal__line">
              <span className="contact-terminal__prompt">&gt; role</span>

              <span className="contact-terminal__value">{profile.role}</span>
            </div>

            <div className="contact-terminal__line">
              <span className="contact-terminal__prompt">&gt; email</span>

              <span className="contact-terminal__value">
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </span>
            </div>

            <div className="contact-terminal__line">
              <span className="contact-terminal__prompt">&gt; location</span>

              <span className="contact-terminal__value">
                {profile.location}
              </span>
            </div>

            <div className="contact-terminal__line">
              <span className="contact-terminal__prompt">&gt; status</span>

              <span className="contact-terminal__value">
                <span className="contact-terminal__status">
                  <span className="contact-terminal__status-dot" />
                  {t.contact.status}
                </span>
              </span>
            </div>

            {/* Contact actions */}
            <div className="contact-terminal__actions">
              <a
                href={`mailto:${profile.email}`}
                className="contact-terminal__action"
              >
                <MailIcon size={17} />
                <span>Email</span>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="contact-terminal__action"
              >
                <LinkedinIcon size={17} />
                <span>LinkedIn</span>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="contact-terminal__action"
              >
                <GithubIcon size={17} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
