import React from "react";

/**
 * Links de navegação do menu
 * @type {Array<{label: string, href: string, id: string}>}
 */
const navLinks = [
  { label: "SOBRE MIM", href: "/about", id: "sobre" },
  { label: "EXPERIÊNCIA", href: "/experience", id: "experiencia" },
  { label: "HOME", href: "/", id: "home" },
  { label: "PROJETOS", href: "/projects", id: "projetos" },
  { label: "CONTATO", href: "/contact", id: "contato" },
];

/**
 * Componente de navegação principal
 * @param {Object} props - Propriedades do componente
 * @param {string} props.activePage - ID da página atual
 * @returns {JSX.Element} Componente de navegação
 */
export default function Header({ activePage }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-green-400/20">
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-10 md:px-32 py-4 sm:py-4 gap-4 sm:gap-0">
        <span className="font-bold text-base sm:text-lg tracking-widest bg-[linear-gradient(90deg,#204232,#01AD5D)] bg-clip-text text-transparent">
        &lt;MW/&gt;
        </span>
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`
                text-sm sm:text-base font-medium px-2 transition whitespace-nowrap
                ${activePage === link.id ? "bg-[linear-gradient(90deg,#204232,#01AD5D)] bg-clip-text text-transparent font-bold" : "text-white"}
                hover:bg-[linear-gradient(90deg,#204232,#01AD5D)] hover:bg-clip-text hover:text-transparent
              `}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
} 