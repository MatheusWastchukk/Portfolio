import React from "react";
import Header from "../components/Header";
import AnimatedBackground from '../components/AnimatedBackground'
import ExperienceCard from '../components/ExperienceCard'
import EducationCard from '../components/EducationCard'
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

/**
 * Página de experiências profissionais e acadêmicas
 * @returns {JSX.Element} Página com timeline de experiências e formação
 */
export default function Experience() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-black relative">
      <AnimatedBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header activePage="experiencia" />
        <div className="pt-24 sm:pt-28">
          <main className="flex-1 flex flex-col items-center py-10 px-2 sm:px-6 md:px-20">
            <section className="w-full max-w-4xl mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 border-b-2 border-green-400 pb-2 drop-shadow-[0_0_8px_#01AD5D]">
                {t.experience.experience}
              </h2>
              <div className="flex flex-col gap-6">
                <ExperienceCard
                  logo="/Portfolio/assets/logo_kisSolutions.jpg"
                  cargo={t.experience.jobs.kisSolutions.title}
                  empresa={t.experience.jobs.kisSolutions.company}
                  periodo={t.experience.jobs.kisSolutions.period}
                  tags={[
                    t.experience.tags.webDevelopment,
                    t.experience.tags.frontend,
                    t.experience.tags.backend,
                    t.experience.tags.database,
                    t.experience.tags.angular,
                    t.experience.tags.java,
                    t.experience.tags.springBoot,
                    t.experience.tags.javascript,
                  ]}
                  atividades={t.experience.jobs.kisSolutions.activities}
                />
                <ExperienceCard
                  logo="/Portfolio/assets/logo_sementesEstrela.jpg"
                  cargo={t.experience.jobs.auxiliarTI.title}
                  empresa="Sementes Estrela"
                  periodo={t.experience.jobs.auxiliarTI.period}
                  tags={[
                    t.experience.tags.technicalSupport,
                    t.experience.tags.database,
                    t.experience.tags.frontend,
                    t.experience.tags.backend,
                    t.experience.tags.uxDesign,
                    t.experience.tags.webDevelopment,
                    t.experience.tags.mobileDevelopment,
                    t.experience.tags.angular,
                    t.experience.tags.java,
                    t.experience.tags.node,
                    t.experience.tags.springBoot,
                    t.experience.tags.javascript,
                    t.experience.tags.typescript,
                    t.experience.tags.html,
                    t.experience.tags.css,
                    t.experience.tags.git,
                    t.experience.tags.github,
                  ]}
                  atividades={t.experience.jobs.auxiliarTI.activities}
                />
                <ExperienceCard
                  logo="/Portfolio/assets/logo_sementesEstrela.jpg"
                  cargo={t.experience.jobs.jovemAprendizTI.title}
                  empresa="Sementes Estrela"
                  periodo={t.experience.jobs.jovemAprendizTI.period}
                  tags={[
                    t.experience.tags.technicalSupport,
                    t.experience.tags.webDevelopment,
                    t.experience.tags.mobileDevelopment,
                    t.experience.tags.hardwareMaintenance
                  ]}
                  atividades={t.experience.jobs.jovemAprendizTI.activities}
                />
                <ExperienceCard
                  logo="/Portfolio/assets/logo_compassUol.png"
                  cargo={t.experience.jobs.estagiarioCloud.title}
                  empresa="Compass Uol"
                  periodo={t.experience.jobs.estagiarioCloud.period}
                  tags={[
                    t.experience.tags.aws,
                    t.experience.tags.docker,
                    t.experience.tags.cloud,
                    t.experience.tags.scrum,
                    t.experience.tags.linux,
                    t.experience.tags.kubernetes
                  ]}
                  atividades={t.experience.jobs.estagiarioCloud.activities}
                />
                <ExperienceCard
                  logo="/Portfolio/assets/logo_hospital.jpg"
                  cargo={t.experience.jobs.jovemAprendizHospital.title}
                  empresa="Hospital de Caridade de Erechim"
                  periodo={t.experience.jobs.jovemAprendizHospital.period}
                  tags={[
                    t.experience.tags.accounts,
                    t.experience.tags.tasy,
                    t.experience.tags.billing,
                    t.experience.tags.organization
                  ]}
                  atividades={t.experience.jobs.jovemAprendizHospital.activities}
                />
                <ExperienceCard
                  logo="/Portfolio/assets/logo_tjrs.jpg"
                  cargo={t.experience.jobs.estagiarioTJRS.title}
                  empresa="Foro da Comarca de Erechim"
                  periodo={t.experience.jobs.estagiarioTJRS.period}
                  tags={[
                    t.experience.tags.customerService,
                    t.experience.tags.phoneSupport,
                    t.experience.tags.processOrganization
                  ]}
                  atividades={t.experience.jobs.estagiarioTJRS.activities}
                />
              </div>
            </section>

            <section className="w-full max-w-4xl">
              <h2 className="text-3xl font-bold text-white mb-6 border-b-2 border-green-400 pb-2 drop-shadow-[0_0_8px_#01AD5D]">
                {t.experience.formations}
              </h2>
              <EducationCard 
              logo="/Portfolio/assets/logo_uri.png"
              instituicao={t.experience.education.university}
              curso={t.experience.education.course}
              periodo={t.experience.education.period}
              status={t.experience.education.status}
              bolsa={t.experience.education.scholarship}
              descricao={t.experience.education.description}
              />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
