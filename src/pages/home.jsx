import React from "react";
import { FaAngular, FaReact, FaGithub, FaFigma, FaLinkedin } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";
import Header from "../components/Header";
import AnimatedBackground from "../components/AnimatedBackground";
import Typewriter from "../components/typewriter";

/**
 * Página inicial do portfólio
 * @returns {JSX.Element} Página inicial com apresentação pessoal e links
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-black relative">
      <AnimatedBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header activePage="home" />
        <div className="pt-24 sm:pt-28 flex-1 flex flex-col">
          <main className="flex-1 flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-32 py-8 sm:py-16">
            <section className="flex-1 flex flex-col items-center text-center w-full">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-extrabold mb-2 w-full max-w-4xl mx-auto">
                <Typewriter>
                  <span className="bg-[linear-gradient(90deg,#204232,#01AD5D)] bg-clip-text text-transparent">
                    Olá, eu sou o Matheus!
                  </span>
                  <span className="inline-block py-2">👋</span>
                </Typewriter>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-2 w-full max-w-3xl mx-auto">
                <span className="text-gray-400 font-normal">Desenvolvedor</span>
                <span className="bg-[linear-gradient(90deg,#204232,#01AD5D)] bg-clip-text text-transparent ml-2 font-bold">Front-End</span>
              </h2>
              <h3 className="text-lg sm:text-xl md:text-2xl text-gray-400 font-normal mb-2 w-full max-w-2xl mx-auto">com foco em web frameworks</h3>
              <h4 className="text-lg sm:text-2xl md:text-3xl font-bold text-white w-full max-w-2xl mx-auto">
                <span className="bg-[linear-gradient(90deg,#204232,#01AD5D)] bg-clip-text text-transparent">Angular</span>
                <span className="text-gray-400 font-normal"> e </span>
                <span className="bg-[linear-gradient(90deg,#204232,#01AD5D)] bg-clip-text text-transparent">React</span>
                <span className="text-gray-400">.</span>
              </h4>
              <div className="flex flex-col items-center w-full mt-8">
                <div className="flex gap-3 xs:gap-4 sm:gap-6 justify-center flex-wrap w-full">
                  <a
                    href="https://github.com/MatheusWastchukk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 xs:gap-2 px-4 xs:px-6 sm:px-8 py-2 xs:py-2.5 sm:py-3 rounded-lg border-2 border-green-400 text-green-400 font-bold text-base xs:text-lg sm:text-xl hover:bg-green-400 hover:text-black shadow-[0_0_8px_#01AD5D] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_16px_#01AD5D] min-w-[120px] justify-center"
                  >
                    <FaGithub className="text-xl xs:text-2xl sm:text-3xl" /> GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/matheuswastchuk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 xs:gap-2 px-4 xs:px-6 sm:px-8 py-2 xs:py-2.5 sm:py-3 rounded-lg border-2 border-green-400 text-green-400 font-bold text-base xs:text-lg sm:text-xl hover:bg-green-400 hover:text-black shadow-[0_0_8px_#01AD5D] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_16px_#01AD5D] min-w-[120px] justify-center"
                  >
                    <FaLinkedin className="text-xl xs:text-2xl sm:text-3xl"/>
                    LinkedIn
                  </a>
                </div>
              </div>
            </section>
            
          </main>
        </div>
        <footer className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 py-8 sm:py-10 px-4">
          <FaAngular className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white/80 hover:text-white transition-colors" aria-label="Angular" />
          <FaReact className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white/80 hover:text-white transition-colors" aria-label="React" />
          <SiTypescript className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white/80 hover:text-white transition-colors" aria-label="Typescript" />
          <SiJavascript className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white/80 hover:text-white transition-colors" aria-label="Javascript" />
          <SiHtml5 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white/80 hover:text-white transition-colors" aria-label="Html5" />
          <SiCss3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white/80 hover:text-white transition-colors" aria-label="Css3" />
          <SiTailwindcss className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white/80 hover:text-white transition-colors" aria-label="Tailwindcss" />
          <SiGit className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white/80 hover:text-white transition-colors" aria-label="Git" />
          <FaGithub className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white/80 hover:text-white transition-colors" aria-label="Github" />
          <FaFigma className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white/80 hover:text-white transition-colors" aria-label="Figma" />
        </footer>
      </div>
    </div>
  );
}
