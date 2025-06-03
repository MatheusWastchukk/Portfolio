import React from "react";
import Header from "../components/Header";
import AnimatedBackground from '../components/AnimatedBackground'
import ExperienceCard from '../components/ExperienceCard'
import EducationCard from '../components/EducationCard'

/**
 * Página de experiências profissionais e acadêmicas
 * @returns {JSX.Element} Página com timeline de experiências e formação
 */
export default function Experience() {
  return (
    <div className="min-h-screen bg-black relative">
      <AnimatedBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header activePage="experiencia" />
        <div className="pt-24 sm:pt-28">
          <main className="flex-1 flex flex-col items-center py-10 px-2 sm:px-6 md:px-20">
            <section className="w-full max-w-4xl mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 border-b-2 border-green-400 pb-2 drop-shadow-[0_0_8px_#01AD5D]">
                Experiência
              </h2>
              <div className="flex flex-col gap-6">
                <ExperienceCard
                  logo={"/assets/logo_sementesEstrela.jpg"}
                  cargo="Auxiliar de TI"
                  empresa="Sementes Estrela"
                  periodo="dez de 2024 - Atualmente"
                  tags={["Suporte Técnico", "Redes e Hardware", "UX Design", "Desenvolvimento Web", "Desenvolvimento Mobile", "Front-End", "Infraestrutura"]}
                  atividades={[
                    "Prestação de suporte técnico remoto e presencial para colaboradores.",
                    "Auxílio na administração e manutenção da infraestrutura de TI.",
                    "Desenvolvimento de sistemas web e aplicativos mobile, utilizando Angular, React, Flutter, Spring Boot, Javascript e Typescript.",
                    "Gestão e versionamento de código com Git e GitHub."
                  ]}
                />
                <ExperienceCard
                  logo={"/assets/logo_sementesEstrela.jpg"}
                  cargo="Jovem Aprendiz TI"
                  empresa="Sementes Estrela"
                  periodo="fev de 2024 - dez de 2024"
                  tags={["Suporte Técnico", "Desenvolvimento Web", "Desenvolvimento Mobile", "Manutenção de Hardware"]}
                  atividades={[
                    "Desenvolvimento de aplicações web com Angular, TypeScript, JavaScript, HTML e CSS.",
                    "Experiência em bancos de dados relacionais como PostgreSQL e SQLite.",
                    "Suporte técnico aos colaboradores da empresa, garantindo funcionamento eficiente dos sistemas."
                  ]}
                />
                <ExperienceCard
                  logo={"/assets/logo_compassUol.png"}
                  cargo="Estagiário Cloud & DevSecOps"
                  empresa="Compass Uol"
                  periodo="jun de 2024 - nov de 2024"
                  tags={["AWS", "Docker", "Cloud", "Scrum", "Linux", "Kubernetes"]}
                  atividades={[
                    "Desenvolvimento de projetos em AWS Cloud e DevSecOps, utilizando Linux, Docker e Kubernetes.",
                    "Aplicação da metodologia ágil Scrum em ciclos de desenvolvimento.",
                    "Automação de processos e implementação de práticas de segurança em ambientes de nuvem."
                  ]}
                />
                <ExperienceCard
                  logo={"/assets/logo_hospital.jpg"}
                  cargo="Jovem Aprendiz"
                  empresa="Hospital de Caridade de Erechim"
                  periodo="set de 2023 - fev de 2024"
                  tags={["Contas", "Tasy", "Faturamento", "Organização"]}
                  atividades={[
                    "Análise, impressão, organização e estruturação de contas.",
                    "Cadastro de pacientes e procedimentos no sistema Tasy.",
                    "Organização e separação de procedimentos por plano de saúde."
                  ]}
                />
                <ExperienceCard
                  logo={"/assets/logo_tjrs.jpg"}
                  cargo="Estagiário"
                  empresa="Foro da Comarca de Erechim"
                  periodo="jan de 2022 - jan de 2023"
                  tags={["Atendimento ao Cliente", "Suporte por telefone", "Organização de Processos"]}
                  atividades={[
                    "Recebimento de processos e arquivos, organização e distribuição.",
                    "Atendimento ao público, recebimento de visitantes e consulta de processos.",
                    "Colaboração com as varas e setores da comarca."
                  ]}
                />
              </div>
            </section>

            <section className="w-full max-w-4xl">
              <h2 className="text-3xl font-bold text-white mb-6 border-b-2 border-green-400 pb-2 drop-shadow-[0_0_8px_#01AD5D]">
                Formações
              </h2>
              <EducationCard 
              logo={"/assets/logo_uri.png"}
              instituicao="Universidade Regional Integrada do Alto Uruguai e das Missões"
              curso="Bacharelado em Ciência da Computação"
              periodo="Março de 2023 - Janeiro de 2027 (previsto)"
              status="Em andamento"
              bolsa="Bolsa PROUNI 100%"
              descricao="Cursando Ciências da Computação com foco em desenvolvimento de software, metodologias ágeis, estruturas de dados, engenharia de sistemas, hardware e redes."
              />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
