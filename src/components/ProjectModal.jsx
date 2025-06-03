import React, { useState } from "react";
import { FaTimes, FaGithub } from "react-icons/fa";

/**
 * Componente que exibe um modal com detalhes do projeto
 * @param {Object} props - Propriedades do componente
 * @param {Object} props.project - Dados do projeto
 * @param {Function} props.onClose - Função para fechar o modal
 * @returns {JSX.Element} Modal com detalhes do projeto
 */
export default function ProjectModal({ project, onClose }) {
  const [fullScreenImage, setFullScreenImage] = useState(null);

  if (!project) return null;

  /**
   * Abre uma imagem em tela cheia
   * @param {string} imageSrc - URL da imagem
   */
  const openFullScreen = (imageSrc) => {
    setFullScreenImage(imageSrc);
  };

  /**
   * Fecha a visualização em tela cheia
   */
  const closeFullScreen = () => {
    setFullScreenImage(null);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/30 backdrop-blur-sm modal-content-scrollable"
      onClick={onClose}
    >
      <div className="relative bg-gradient-to-br from-[#000000] via-[#080c09] to-[#012d1a] rounded-2xl border-2 border-green-400 shadow-[0_0_24px_4px_rgba(1,173,93,0.7)] max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl z-10 cursor-pointer"
          aria-label="Fechar Modal"
        >
          <FaTimes />
        </button>
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-400 mb-4 border-b border-green-400 pb-2">{project.title}</h2>
          
        
          <p className="text-gray-200 text-base mb-4">{project.description}</p>
          {project.detalhes && (
            <p className="text-gray-300 text-sm mb-4">{project.detalhes}</p>
          )}

        
          <div className="flex flex-wrap gap-2 items-center mb-6">
            {project.techs.map((tech, idx) => (
              <span key={idx} className="text-base text-green-200 flex items-center gap-1 tag-neon">
                {tech.icon} {tech.name}
              </span>
            ))}
          </div>

          
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-400 hover:underline mb-6"
            >
              <FaGithub className="text-xl" /> Ver no GitHub
            </a>
          )}

          
          {project.gallery && project.gallery.length > 0 && (
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-white mb-4">Galeria</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pr-2">
                {project.gallery.map((image, idx) => (
                  <img
                    key={idx}
                    src={image}
                    alt={`Imagem ${idx + 1} do projeto ${project.title}`}
                    className="w-full h-auto rounded-lg object-cover border border-green-400 shadow-[0_0_8px_rgba(1,173,93,0.3)] cursor-pointer"
                    onClick={() => openFullScreen(image)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      
      {fullScreenImage && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative group">
            <img
              src={fullScreenImage}
              alt="Imagem em tamanho maior"
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button
              onClick={(e) => { e.stopPropagation(); closeFullScreen(); }}
              className="mt-4 px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-200 block mx-auto"
              aria-label="Fechar Imagem"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 