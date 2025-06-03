import React from "react";
import Header from "../components/Header";
import AnimatedBackground from "../components/AnimatedBackground";
import SkillCard from "../components/SkillCard";
import { FaReact, FaAngular, FaGitAlt, FaFigma, FaAws, FaJava, FaNodeJs, FaGithub, FaRegLightbulb, FaPeopleCarry, FaUserCheck, FaUserFriends, FaRegSmile, FaRegListAlt, FaBookOpen, FaDocker} from "react-icons/fa";
import { SiJavascript, SiTypescript, SiHtml5, SiCss3, SiTailwindcss, SiSpringboot, SiPostgresql, SiMysql, SiKubernetes } from "react-icons/si";

/**
 * Página sobre com informações pessoais e habilidades
 * @returns {JSX.Element} Página sobre com cards de habilidades e formação
 */
export default function About() {
  return (
    <div className="min-h-screen bg-black relative">
      <AnimatedBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header activePage="sobre" />
        <div className="pt-24 sm:pt-28 flex-1 flex flex-col items-center px-4 sm:px-6 md:px-32 py-8 sm:py-16">
          {/* Seção principal */}
          <section className="w-full max-w-6xl flex flex-col md:flex-row gap-12 mb-12">
            {/* Esquerda: SVGs */}
            <div className="flex-1 flex flex-col items-center md:items-center justify-center gap-6">
              <img
                src="/assets/Perfil.jpg"
                alt="Matheus Wastchuk"
                className="w-48 h-56 sm:w-64 sm:h-80 md:w-80 md:h-104 object-cover rounded-xl shrink-0 border-2 border-green-400 shadow-[0_0_24px_2px_rgba(1,173,93,0.5)] bg-gradient-to-br from-[#000000] via-[#080c09] to-[#012d1a]"
              />
            </div>
            {/* Direita: Texto sobre mim */}
            <div className="flex-1 flex flex-col justify-center">
              <h1 className="text-3xl font-bold text-white mb-4">Sobre Mim</h1>
              <p className="text-gray-200 text-lg leading-relaxed text-justify mb-2">
                Sou um entusiasta da tecnologia, atualmente cursando Ciência da
                Computação e atuando como Auxiliar de TI. Minha paixão é
                transformar ideias em realidade digital, por isso me dedico a
                criar sites e sistemas web dinâmicos e intuitivos. Minha
                experiência abrange o desenvolvimento de aplicações web e
                mobile, além de infraestrutura de TI e computação em nuvem.
              </p>
              <p className="text-gray-200 text-lg leading-relaxed text-justify mb-2">
                Estou sempre de olho nas novidades, buscando aprimorar minhas
                habilidades, especialmente em computação em nuvem e
                desenvolvimento front-end – áreas que realmente me fascinam!
              </p>
              <p className="text-gray-200 text-lg leading-relaxed text-justify">
                E quando não estou imerso em códigos ou explorando novas
                tecnologias, meu passatempo favorito é jogar.🎮
              </p>
            </div>
          </section>
          <section className="w-full max-w-6xl flex flex-col md:flex-row gap-8">
            <SkillCard
              title="Soft Skills"
              skills={[
                { name: "Comunicação", icon: <FaRegLightbulb className="text-yellow-400" /> },
                { name: "Trabalho em equipe", icon: <FaPeopleCarry className="text-red-500" /> },
                { name: "Adaptabilidade", icon: <FaUserCheck className="text-blue-500" /> },
                { name: "Proatividade", icon: <FaUserFriends className="text-green-500" /> },
                { name: "Empatia", icon: <FaRegSmile className="text-pink-400" /> },
                { name: "Organização", icon: <FaRegListAlt className="text-orange-500" /> },
                { name: "Aprendizado contínuo", icon: <FaBookOpen className="text-blue-500" /> },
              ]}
            />
            <SkillCard
              title="Hard Skills"
              skills={[
                { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
                { name: "React", icon: <FaReact className="text-cyan-400" /> },
                { name: "Angular", icon: <FaAngular className="text-red-500" /> },
                { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
                { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
                { name: "CSS3", icon: <SiCss3 className="text-blue-400" /> },
                { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-300" /> },
                { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
                { name: "GitHub", icon: <FaGithub className="text-white" /> },
                { name: "Figma", icon: <FaFigma className="text-pink-400" /> },
                { name: "Java", icon: <FaJava className="text-orange-600" /> },
                { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
                { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
                { name: "AWS", icon: <FaAws className="text-orange-300" /> },
                { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
                { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-800" /> },
                { name: "Kubernetes", icon: <SiKubernetes className="text-blue-700" /> },
                { name: "NodeJs", icon: <FaNodeJs className="text-green-500" /> },
              ]}
            />
          </section>
          <a
            href="/curriculo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-6 py-2 rounded-lg border-2 border-green-400 text-green-400 font-semibold hover:bg-green-400 hover:text-black shadow-[0_0_8px_#01AD5D] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_16px_#01AD5D]"
          >
            Baixar Currículo
          </a>
        </div>
      </div>
    </div>
  );
}
