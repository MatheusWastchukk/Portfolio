import React from "react";

/**
 * Componente que renderiza um card de experiência profissional
 * @param {Object} props - Propriedades do componente
 * @param {string} props.logo - URL do logo da empresa
 * @param {string} props.cargo - Cargo ocupado
 * @param {string} props.empresa - Nome da empresa
 * @param {string} props.periodo - Período da experiência
 * @param {Array<string>} props.tags - Lista de tecnologias/tags
 * @param {Array<string>} props.atividades - Lista de atividades realizadas
 * @returns {JSX.Element} Card de experiência com efeitos visuais
 */
export default function ExperienceCard({ logo, cargo, empresa, periodo, tags = [], atividades = [] }) {
  return (
    <div className="bg-gradient-to-br from-[#000000] via-[#080c09] to-[#012d1a] rounded-2xl border-2 border-green-400 shadow-[0_0_24px_2px_rgba(1,173,93,0.5)] overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_32px_4px_rgba(1,173,93,0.7)]">
      <div className="p-6">
        <div className="flex items-center gap-4 mb-2">
        <div className="flex-shrink-0">
          <img className="w-14 h-14 rounded-full bg-[#01AD5D]/80 flex items-center justify-center text-2xl font-bold text-white shadow-[0_0_6px_#01AD5D] border-2 border-[#01AD5D]" src={logo} alt={empresa} />
        </div>
          <span className="text-lg font-semibold text-green-400">{cargo}</span>
          <span className="text-white/80">-</span>
          <span className="ml-2 text-base font-medium text-white/80">{empresa}</span>
        <div className="ml-auto mb-2 pb-2">
          <span className="tag-neon">
            {periodo}
          </span>
        </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, idx) => (
            <span key={idx} className="tag-neon">
              {tag}
            </span>
          ))}
        </div>
        <ul className="text-gray-200 text-sm list-disc pl-5">
          {atividades.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
} 