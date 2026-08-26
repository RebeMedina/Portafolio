import { useLanguage } from "../context/LanguageContext.jsx";

export default function Footer() {
  const { data, t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container footer__row">
        <span>
          © {new Date().getFullYear()} {data.profile.name}
        </span>
        <span className="footer__made">{t.contact.madeWith}</span>
      </div>
    </footer>
  );
}
