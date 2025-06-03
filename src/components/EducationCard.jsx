import React from "react";

/**
 * Componente que renderiza um card de formação acadêmica
 * @param {Object} props - Propriedades do componente
 * @param {string} props.logo - URL do logo da instituição
 * @param {string} props.instituicao - Nome da instituição
 * @param {string} props.curso - Nome do curso
 * @param {string} props.periodo - Período do curso
 * @param {string} props.status - Status atual (em andamento, concluído, etc)
 * @param {string} [props.bolsa] - Informação sobre bolsa (opcional)
 * @param {string} props.descricao - Descrição do curso
 * @returns {JSX.Element} Card de educação com efeitos visuais
 */
export default function EducationCard({
  logo,
  instituicao,
  curso,
  periodo,
  status,
  bolsa,
  descricao,
}) {
  return (
    <div className="card-neon flex flex-col sm:flex-row items-center p-6 gap-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_32px_4px_rgba(1,173,93,0.7)]">
      <div className="flex-shrink-0">
        <img className="w-20 h-20 rounded-full bg-[#01AD5D]/80 flex items-center justify-center text-2xl font-bold text-white shadow-[0_0_6px_#01AD5D] border-2 border-[#01AD5D]" src={logo} alt={instituicao} />
      </div>
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
          <span className="text-lg font-semibold text-green-400">
            {instituicao}
          </span>
          <span className="tag-neon whitespace-nowrap">
            {status}
          </span>
        </div>
        <span className="block text-green-400 text-sm font-medium mb-1">
          {curso}
        </span>
        <span className="block text-xs text-gray-400 mb-2">{periodo}</span>
        {bolsa && (
          <span className="block text-green-400 text-sm font-medium mb-1">
            {bolsa}
          </span>
        )}
        <p className="text-gray-200 text-sm">{descricao}</p>
      </div>
    </div>
  );
}