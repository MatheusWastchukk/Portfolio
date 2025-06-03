import React, { useState } from "react";
import Header from "../components/Header";
import AnimatedBackground from "../components/AnimatedBackground";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
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

  const projectsData = [
    {
      title: "Galeriloop",
      description: "Aplicação web para gerenciar fotos.",
      cover: "/assets/Galeriloop/Cover_Galeriloop.png",
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
      gallery: ["/assets/Galeriloop/Cover_Galeriloop.png", "/assets/Galeriloop/Home_Galeriloop.png", "/assets/Galeriloop/Album_Vazio_Galeriloop.png", "/assets/Galeriloop/Album_Fotos_Galeriloop.png", "/assets/Galeriloop/Links_Galeriloop.png", "/assets/Galeriloop/Cart_Galeriloop.png"],
      detalhes:
        "O sistema Galeriloop é uma plataforma de gerenciamento de fotos projetada para otimizar o fluxo de trabalho de instituições e empresas. Suas principais funcionalidades incluem um módulo de upload de fotos que aplica automaticamente marcas d'água e reduz a qualidade das imagens para pré-visualização. Além disso, possui um sistema de gerenciamento de grupos e links que permite a criação de links seguros para grupos de usuários e a organização em subgrupos. Por fim, o Galeriloop conta com um módulo de e-commerce com carrinho de compras, onde os usuários podem selecionar fotos, calcular o valor total do pedido e receber uma cotação por e-mail através do Nodemailer. Todo o projeto é executado em ambiente Docker, garantindo portabilidade e escalabilidade.",
      link: "#",
    },
    /*{
      title: "Portfólio Pessoal",
      description:
        "Site pessoal para apresentar minhas experiências, projetos e habilidades.",
      cover: "/assets/portfolio/Home_Portfolio.png",
      techs: [
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        {
          name: "TailwindCSS",
          icon: <SiTailwindcss className="text-cyan-300" />,
        },
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-yellow-400" />,
        },
        { name: "GitHub", icon: <FaGithub className="text-white" /> },
        { name: "Vite", icon: <SiVite className="text-white" /> },
      ],
      gallery: [
        "/assets/portfolio/Home_Portfolio.png",
        "/assets/portfolio/Experiencia_Portfolio.png",
        "/assets/portfolio/Formacao_Portfolio.png",
        "/assets/portfolio/SobreMim_Portfolio.png",
      ],
      detalhes:
        "Este é o meu portfólio pessoal, desenvolvido para apresentar minhas habilidades e projetos de forma interativa e visualmente atraente. Utilizei React com Javascript para a estrutura da aplicação e animações/funcionalidades, Tailwind CSS para a estilização rápida e responsiva, e um fundo animado com partículas para adicionar um toque dinâmico.",
      link: "https://github.com/MatheusWastchukk/portfolio_web",
    }, */
    {
      title: "Chronnos",
      description: "Aplicação web da Carteira Acadêmica Digital.",
      cover: "/assets/chronnos/cover-chronnos.png",
      techs: [
        { name: "NodeJs", icon: <FaNodeJs className="text-green-500" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        { name: "Vite", icon: <SiVite className="text-white" /> },
      ],
      gallery: [
        "/assets/chronnos/cursos-chronnos.png",
        "/assets/chronnos/anotacoes-chronnos.png",
        "/assets/chronnos/timeline-chronnos.png",
        "/assets/chronnos/mobile1_chronnos.png",
        "/assets/chronnos/mobile2_chronnos.png",
        "/assets/chronnos/mobile3_chronnos.png",
        "/assets/chronnos/mobile4_chronnos.png",
      ],
      detalhes:
        "Um sistema completo para gerenciar certificados e cursos. O Chronnos é um software web, desenvolvido em um projeto acadêmico, que funciona como uma carteira de cursos digital completa, projetada para centralizar e organizar todo o histórico acadêmico de um usuário, permitindo o registro detalhado de cursos com certificados, custos, tempo de estudo, datas e notas, visando facilitar o acesso e compartilhamento seguro dessas informações. Seu principal recurso é uma TimeLine gráfica que exibe visualmente a trajetória de estudos, útil tanto para acompanhamento pessoal quanto para enriquecer perfis profissionais. Para sua construção, o Node.js foi empregado no backend, permitindo que a lógica do servidor fosse escrita em JavaScript para processar requisições e interagir com o banco de dados. Este, por sua vez, foi implementado com MySQL, responsável por armazenar de forma estruturada e persistente todos os dados da plataforma. A interface do usuário (frontend) foi desenvolvida com React e JavaScript, proporcionando uma experiência intuitiva e dinâmica, enquanto o Vite otimizou o processo de desenvolvimento do frontend, acelerando o build e as atualizações durante a codificação. Concebido para o usuário moderno, o Chronnos oferece uma solução prática para gerenciar e exibir conquistas acadêmicas de forma integrada e acessível.",
      link: "https://github.com/KleidsonRocha/Chronnos",
    },
    {
      title: "SCE - Sistema de Controle de Estoque",
      description: "Sistema Web para controle de estoque da Sementes Estrela.",
      cover: "/assets/SCE/Cover_SCE.png",
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
      gallery: ["/assets/SCE/Cover_SCE.png", "/assets/SCE/Home_SCE.png"],
      detalhes:
        "O Sistema de Controle de Estoque (SCE) foi uma aplicação web desenvolvida para otimizar a gestão de estoque e compras da Sementes Estrela, visando reduzir custos operacionais e evitar aquisições desnecessárias ao integrar as filiais da empresa para um controle centralizado e compras mais inteligentes. Para sua construção, o frontend utilizou HTML, CSS e JavaScript, criando uma interface intuitiva e responsiva para a visualização de estoque e gestão de pedidos, enquanto o backend foi implementado com Java Spring Boot, garantindo segurança, escalabilidade e uma integração eficiente com o banco de dados PostgreSQL, que ficou responsável pelo armazenamento e gerenciamento dos dados de estoque, compras e filiais. Antes da implementação do SCE, a empresa enfrentava problemas como compras excessivas de itens já disponíveis em outras unidades; com o sistema, foi possível reduzir significativamente gastos com aquisições redundantes, centralizar o controle de estoque para decisões assertivas e aumentar a eficiência operacional ao automatizar a gestão de inventário. As funcionalidades principais do SCE incluem uma visão integrada de todos os itens nas filiais, alertas de reposição baseados em níveis mínimos, a integração entre filiais para permitir a transferência interna de itens antes de novas compras, e a geração de relatórios gerenciais para análise de custos e tomada de decisão estratégica, resultando em uma gestão de estoque mais eficiente e econômica para a Sementes Estrela.",
      link: "#",
    },
    {
      title: "GSE - Gestão Sementes Estrela",
      description: "Sistema Web ERP integrado com diversos setores da empresa.",
      cover: "/assets/GSE/Login_GSE.png",
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
      gallery: ["/assets/GSE/Login_GSE.png", "/assets/GSE/Checklist_GSE.png"],
      detalhes:
        "O Gestão Sementes Estrela (GSE) é um sistema web de planejamento de recursos empresariais (ERP) desenvolvido para a Sementes Estrela, projetado para centralizar e otimizar as operações de diversos setores da empresa, como Qualidade, Estoque, Recursos Humanos e TI. Este sistema encontra-se em desenvolvimento contínuo, com a integração progressiva de novas funcionalidades e setores para abranger de forma cada vez mais completa as necessidades da organização. Para sua construção, o frontend é desenvolvido com Angular, utilizando TypeScript para uma codificação mais robusta e organizada, HTML5 para a estruturação das páginas e SCSS para a estilização avançada, resultando em uma interface de usuário moderna e interativa. A lógica de negócios e o backend do sistema são implementados em Java com o auxílio do framework Spring Boot, que oferece uma plataforma eficiente para criar serviços seguros e escaláveis. O armazenamento e gerenciamento de todos os dados da aplicação são confiados ao banco de dados PostgreSQL, enquanto o controle de versão do código e a colaboração entre a equipe de desenvolvimento são gerenciados através do GitHub, assegurando um processo de desenvolvimento ágil e organizado para este ERP em constante evolução.",
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
            Projetos
          </h1>
          <p className="text-lg text-gray-300 mb-8 text-center">Conheça meus principais projetos</p>

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
            <p className="mb-2">Se desejar ver mais projetos, visite meu GitHub:</p>
            <a href="https://github.com/MatheusWastchukk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-5xl transition-colors" aria-label="Perfil do GitHub">
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
