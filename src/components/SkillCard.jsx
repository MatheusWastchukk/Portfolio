import React from "react";

/**
 * Componente que renderiza um card de habilidades técnicas
 * @param {Object} props - Propriedades do componente
 * @param {string} props.title - Título da categoria de habilidades
 * @param {Array<{icon?: ReactNode, name: string}>} props.skills - Lista de habilidades
 * @returns {JSX.Element} Card de habilidades com efeitos de hover
 */
export default function SkillCard({ title, skills }) {
  return (
    <div className="flex-1 card-neon bg-black/60 rounded-2xl p-6 border border-green-400/30 shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_32px_4px_rgba(1,173,93,0.7)]">
      <h2 className="text-2xl font-bold text-green-400 mb-4">{title}</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="tag-neon flex items-center gap-2 transition-all duration-300 hover:bg-[#01AD5D]/60 hover:text-white hover:scale-105 hover:shadow-[0_0_12px_#01AD5D]"
          >
            {skill.icon && <span className="text-lg">{skill.icon}</span>}
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
} 