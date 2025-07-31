import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";
import { FaGlobe } from "react-icons/fa";

/**
 * Componente de navegação principal
 * @param {Object} props - Propriedades do componente
 * @param {string} props.activePage - ID da página atual
 * @returns {JSX.Element} Componente de navegação
 */
export default function Header({ activePage }) {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  const navLinks = [
    { label: t.nav.about, href: "/about", id: "sobre" },
    { label: t.nav.experience, href: "/experience", id: "experiencia" },
    { label: t.nav.home, href: "/", id: "home" },
    { label: t.nav.projects, href: "/projects", id: "projetos" },
    { label: t.nav.contact, href: "/contact", id: "contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-green-400/20">
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-10 md:px-32 py-4 sm:py-4 gap-4 sm:gap-0">
        <span className="font-bold text-base sm:text-lg tracking-widest bg-[linear-gradient(90deg,#204232,#01AD5D)] bg-clip-text text-transparent">
        &lt;MW/&gt;
        </span>
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.href}
              className={`
                text-sm sm:text-base font-medium px-2 transition whitespace-nowrap
                ${activePage === link.id ? "bg-[linear-gradient(90deg,#204232,#01AD5D)] bg-clip-text text-transparent font-bold" : "text-white"}
                hover:bg-[linear-gradient(90deg,#204232,#01AD5D)] hover:bg-clip-text hover:text-transparent
              `}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-3 py-2 rounded-lg border-2 border-green-400 text-green-400 font-semibold hover:bg-green-400 hover:text-black transition-all duration-300 hover:scale-105"
          title={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
        >
          <FaGlobe className="text-sm" />
          <span className="text-sm font-bold">{language.toUpperCase()}</span>
        </button>
      </div>
    </header>
  );
} 