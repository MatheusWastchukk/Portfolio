import React from "react";

/**
 * Componente que renderiza um card de projeto na galeria
 * @param {Object} props - Propriedades do componente
 * @param {string} props.title - Título do projeto
 * @param {string} props.description - Descrição curta do projeto
 * @param {string} props.cover - URL da imagem de capa
 * @param {Array<{icon: ReactNode, name: string}>} props.techs - Lista de tecnologias usadas
 * @param {Function} props.onClick - Função chamada ao clicar no card
 * @returns {JSX.Element} Card de projeto com efeitos de hover
 */
export default function ProjectCard({ title, description, cover, techs, onClick }) {
  return (
    <div
      className="bg-gradient-to-br from-[#000000] via-[#080c09] to-[#012d1a] rounded-2xl border-2 border-green-400 shadow-[0_0_12px_2px_rgba(1,173,93,0.3)] overflow-hidden flex flex-col w-full aspect-square transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_24px_4px_rgba(1,173,93,0.5)] cursor-pointer"
      onClick={onClick}
    >
      <div className="flex-1 min-h-0 max-h-[40%] relative">
        <img src={cover} alt={title} className="object-cover w-full h-full max-h-40 min-h-0" />
      </div>
      <div className="flex-[1.5] flex flex-col justify-between p-4 max-h-[60%]">
        <h3 className="text-xl font-bold text-green-400 mb-1 truncate">{title}</h3>
        <p className="text-gray-200 text-sm mb-3 line-clamp-2">{description}</p>
        <div className="flex gap-2 items-center mt-auto">
          {techs.map((tech, idx) => (
            <span key={idx} className="text-xs text-green-200">
              {tech.icon}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
} 