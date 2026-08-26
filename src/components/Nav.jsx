import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function Nav() {
  const { lang, toggleLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav__row">
        {/* Logo */}
        <a
          href="#top"
          className="nav__logo"
          aria-label="Rebeca Medina Gómez - Inicio"
        >
          <img
            src={`${import.meta.env.BASE_URL}RMG.svg`}
            alt="Rebeca Medina Gómez"
            className="nav__logo-img"
          />
        </a>

        {/* Desktop navigation */}
        <nav className="nav__links">
          {t.nav.links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="nav__actions">
          {/* Language switch */}
          <button
            type="button"
            className="lang-switch"
            onClick={toggleLang}
            aria-label="Toggle language"
            title="EN / ES"
          >
            <span className={lang === "en" ? "is-active" : ""}>
              EN
            </span>

            <span className="lang-switch__sep">/</span>

            <span className={lang === "es" ? "is-active" : ""}>
              ES
            </span>
          </button>

          {/* Mobile menu button */}
          <button
            type="button"
            className="nav__toggle"
            aria-label={t.nav.menuLabel}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {open && (
        <div className="nav__mobile">
          {t.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}