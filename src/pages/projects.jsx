import React, { useState } from "react";
import Header from "../components/Header";
import AnimatedBackground from "../components/AnimatedBackground";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";
import { FaReact, FaNodeJs, FaGithub, FaJava, FaBootstrap, FaHtml5, FaCss3, FaSass, FaAngular } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiMysql,
  SiDocker,
  SiSpringboot,
  SiPostgresql,
} from "react-icons/si";
import { IoMail } from "react-icons/io5";

/**
 * Página de projetos desenvolvidos
 * @returns {JSX.Element} Página com galeria de projetos e modal de detalhes
 */
export default function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const { language } = useLanguage();
  const t = translations[language];

  const projectsData = [
    {
      title: t.projects.galeriloop.title,
      description: t.projects.galeriloop.description,
      cover: "/Portfolio/assets/Galeriloop/Cover_Galeriloop.png",
      techs: [
        { name: "NodeJs", icon: <FaNodeJs className="text-green-500" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        { name: "Vite", icon: <SiVite className="text-white" /> },
        { name: "GitHub", icon: <FaGithub className="text-white" /> },
        { name: "Nodemailer", icon: <IoMail className="text-red-500" /> },
        { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-yellow-400" />,
        },
      ],
      gallery: ["/Portfolio/assets/Galeriloop/Cover_Galeriloop.png", "/Portfolio/assets/Galeriloop/Login_Galeriloop.png", "/Portfolio/assets/Galeriloop/Home_Galeriloop.png", "/Portfolio/assets/Galeriloop/Album_Vazio_Galeriloop.png", "/Portfolio/assets/Galeriloop/Album_Fotos_Galeriloop.png", "/Portfolio/assets/Galeriloop/Links_Galeriloop.png", "/Portfolio/assets/Galeriloop/Cart_Galeriloop.png"],
      detalhes: t.projects.galeriloop.details,
      link: "https://github.com/MatheusWastchukk/Galeriloop",
    },
    {
      title: t.projects.chronnos.title,
      description: t.projects.chronnos.description,
      cover: "/Portfolio/assets/chronnos/cover-chronnos.png",
      techs: [
        { name: "NodeJs", icon: <FaNodeJs className="text-green-500" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        { name: "Vite", icon: <SiVite className="text-white" /> },
      ],
      gallery: [
        "/Portfolio/assets/chronnos/cursos-chronnos.png",
        "/Portfolio/assets/chronnos/anotacoes-chronnos.png",
        "/Portfolio/assets/chronnos/timeline-chronnos.png",
        "/Portfolio/assets/chronnos/mobile1_chronnos.png",
        "/Portfolio/assets/chronnos/mobile2_chronnos.png",
        "/Portfolio/assets/chronnos/mobile3_chronnos.png",
        "/Portfolio/assets/chronnos/mobile4_chronnos.png",
      ],
      detalhes: t.projects.chronnos.details,
      link: "https://github.com/KleidsonRocha/Chronnos",
    },
    {
      title: t.projects.sce.title,
      description: t.projects.sce.description,
      cover: "/Portfolio/assets/SCE/Cover_SCE.png",
      techs: [
        { name: "Java", icon: <FaJava className="text-orange-600" />},
        { name: "Spring Boot", icon: <SiSpringboot className="text-green-400" />},
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />,},
        { name: "Html5", icon: <FaHtml5 className="text-orange-500" />},
        { name: "Css3", icon: <FaCss3 className="text-blue-400" />},
        { name: "GitHub", icon: <FaGithub className="text-white" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
        { name: "Bootstrap", icon: <FaBootstrap className="text-cyan-600" /> },
        
      ],
      gallery: ["/Portfolio/assets/SCE/Cover_SCE.png", "/Portfolio/assets/SCE/Home_SCE.png"],
      detalhes: t.projects.sce.details,
      link: "#",
    },
    {
      title: t.projects.gse.title,
      description: t.projects.gse.description,
      cover: "/Portfolio/assets/GSE/Login_GSE.png",
      techs: [
        { name: "Angular", icon: <FaAngular className="text-red-500" /> },
        { name: "Java", icon: <FaJava className="text-orange-600" />},
        { name: "Spring Boot", icon: <SiSpringboot className="text-green-400" />},
        { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
        { name: "Html5", icon: <FaHtml5 className="text-orange-500" />},
        { name: "SCSS", icon: <FaSass className="text-pink-400" />},
        { name: "GitHub", icon: <FaGithub className="text-white" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
        
      ],
      gallery: ["/Portfolio/assets/GSE/Login_GSE.png", "/Portfolio/assets/GSE/Checklist_GSE.png"],
      detalhes: t.projects.gse.details,
      link: "#",
    },
  ];

  /**
   * Abre o modal com detalhes do projeto selecionado
   * @param {Object} project - Dados do projeto
   */
  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  /**
   * Fecha o modal de detalhes do projeto
   */
  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-black relative">
      <AnimatedBackground className="z-10" />
      <div className="relative z-20 flex flex-col min-h-screen">
        <Header activePage="projects" />
        <div className="pt-24 sm:pt-28 flex-1 flex flex-col items-center px-4 sm:px-6 md:px-32 py-8 sm:py-16">
          <h1 className="text-3xl font-bold text-white mb-8 border-b-2 border-green-400 pb-2 drop-shadow-[0_0_8px_#01AD5D] w-full max-w-4xl text-center">
            {t.projects.title}
          </h1>
          <p className="text-lg text-gray-300 mb-8 text-center">{t.projects.subtitle}</p>

          <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {projectsData.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                cover={project.cover}
                techs={project.techs}
                onClick={() => openModal(project)}
              />
            ))}
          </div>
          <div className="w-full max-w-4xl text-center justify-items-center mt-8 text-gray-300">
            <p className="mb-2">{t.projects.moreProjects}</p>
            <a href="https://github.com/MatheusWastchukk" target="_blank" rel="noopener noreferrer" className="inline-block text-gray-400 hover:text-white text-5xl transition-colors" aria-label="Perfil do GitHub">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {modalOpen && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </div>
  );
}
