import React from 'react';
import { ExternalLink, Mail, Phone, UserCheck, Sparkles, ArrowUpRight } from 'lucide-react';
import { CVData } from '../types/cv';
import { SectionHeader } from './SectionHeader';
import { LogoRenderer } from './logos/LogoRenderer';
import { KaggleIcon, TableauIcon } from './logos/SocialIcons';

interface RightColumnProps {
  cv: CVData;
}

export const RightColumn: React.FC<RightColumnProps> = ({ cv }) => {
  return (
    <div className="flex flex-col gap-5 text-slate-800">
      {/* 1. Expérience Professionnelle */}
      <section>
        <SectionHeader title="Expérience Professionnelle" iconType="experience" />
        <div className="flex flex-col gap-4">
          {cv.experiences.map((exp) => (
            <div key={exp.id} className="flex gap-3">
              {/* Left logo slot */}
              <div className="w-20 shrink-0 flex items-start justify-center pt-0.5">
                <LogoRenderer type={exp.logoType} className="max-h-10 w-auto" />
              </div>

              {/* Experience details */}
              <div className="flex-1 flex flex-col">
                <div className="flex flex-wrap items-baseline gap-1 text-[11px] font-bold text-slate-900 leading-snug">
                  <span className="text-[#0284C7]">{exp.period}</span>
                  <span className="text-slate-400 font-normal">|</span>
                  <span>{exp.company}</span>
                  {exp.companyType && (
                    <span className="text-[9.5px] font-medium text-slate-500">
                      ({exp.companyType})
                    </span>
                  )}
                </div>

                <div className="text-[10px] font-bold text-slate-800 mb-1">
                  {exp.role}
                  {exp.location && (
                    <span className="text-slate-500 font-normal ml-1">
                      – {exp.location}
                    </span>
                  )}
                </div>

                <ul className="pl-3.5 list-disc text-[9.5px] text-slate-600 leading-snug space-y-0.5 marker:text-sky-600">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="pl-0.5">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Formation */}
      <section>
        <SectionHeader title="Formation" iconType="education" />
        <div className="flex flex-col gap-3">
          {cv.education.map((edu) => (
            <div key={edu.id} className="flex gap-3 items-center">
              {/* University Logo */}
              <div className="w-24 shrink-0 flex items-center justify-start">
                <LogoRenderer type={edu.logoType} className="h-10 w-auto" />
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <div className="flex items-baseline gap-1.5 text-[11px] font-bold text-slate-900 leading-tight">
                  <span className="text-[#0284C7]">{edu.year}</span>
                  <span className="text-slate-400 font-normal">|</span>
                  <span>{edu.institution}, {edu.location}</span>
                </div>
                <span className="text-[10px] font-medium text-slate-700 mt-0.5">
                  {edu.degree}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Certifications */}
      <section>
        <SectionHeader title="Certifications Professionnelles" iconType="certifications" />
        <div className="flex flex-col gap-1.5">
          {cv.certifications.map((cert) => (
            <div
              key={cert.id}
              className="flex items-center justify-between gap-2.5 py-1 px-1.5 rounded-md hover:bg-slate-50/80 transition-colors border-b border-slate-100 last:border-none"
            >
              {/* Logo de l'entreprise ou organisme émetteur */}
              <div className="w-20 shrink-0 flex items-center justify-start">
                <LogoRenderer type={cert.logoType} className="max-h-5 max-w-[76px] w-auto" />
              </div>

              {/* Title & Description */}
              <div className="flex-1 min-w-0 flex flex-col justify-center">
                <span className="text-[10px] font-bold text-slate-900 leading-tight truncate">
                  {cert.title}
                </span>
                <span className="text-[8.5px] text-slate-600 font-medium leading-tight truncate">
                  {cert.provider}
                </span>
              </div>

              {/* Clickable Verification Link or Note */}
              <div className="shrink-0 flex items-center">
                {cert.linkUrl ? (
                  <a
                    href={cert.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-sky-50 hover:bg-sky-100 text-[8px] font-bold text-[#0F3B6C] border border-sky-200 transition-all hover:shadow-2xs active:scale-95"
                    title={`Vérifier la certification ${cert.title} sur ${cert.platform}`}
                  >
                    <span>Vérifier ↗</span>
                    <ExternalLink className="w-2 h-2 text-[#0284C7]" />
                  </a>
                ) : (
                  <span className="text-[7.5px] font-semibold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded-full border border-slate-200/60">
                    {cert.note || 'Attestation'}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Projet Phare / Réalisation Data Portfolio */}
      {cv.projects && cv.projects.length > 0 && (
        <section className="bg-gradient-to-r from-sky-50 via-blue-50/50 to-indigo-50/40 p-2.5 rounded-lg border border-sky-200/90 shadow-2xs">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-1.5">
              <span className="px-1.5 py-0.5 rounded bg-[#0F3B6C] text-white text-[8px] font-black uppercase tracking-wider">
                Projet Phare
              </span>
              <h3 className="text-[10.5px] font-extrabold text-slate-900 leading-tight">
                {cv.projects[0].title}
              </h3>
            </div>
            <span className="text-[8.5px] font-bold text-sky-800 bg-white px-1.5 py-0.2 rounded border border-sky-200">
              {cv.projects[0].period}
            </span>
          </div>

          <p className="text-[8.8px] text-slate-700 leading-snug mb-2">
            {cv.projects[0].introduction}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-2 pt-1.5 border-t border-sky-100">
            <div className="flex items-center gap-1.5 text-[8px] font-semibold">
              <span className="text-amber-800 bg-amber-100/90 px-1.5 py-0.5 rounded">
                Membres: ~12min (Commute)
              </span>
              <span className="text-sky-800 bg-sky-100/90 px-1.5 py-0.5 rounded">
                Occasionnels: ~21min (Loisir)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={cv.projects[0].kaggleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[8.5px] font-bold text-cyan-800 hover:text-cyan-950 bg-white px-2 py-0.5 rounded border border-cyan-200 shadow-2xs transition-colors"
              >
                <KaggleIcon className="w-2.5 h-2.5" />
                <span>Kaggle ↗</span>
              </a>
              <a
                href={cv.projects[0].tableauUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[8.5px] font-bold text-amber-800 hover:text-amber-950 bg-white px-2 py-0.5 rounded border border-amber-200 shadow-2xs transition-colors"
              >
                <TableauIcon className="w-2.5 h-2.5" />
                <span>Tableau ↗</span>
              </a>
            </div>
          </div>
        </section>
      )}

      {/* 5. Personnes de Référence */}
      <section>
        <SectionHeader title="Personnes de Référence" iconType="references" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {cv.references.map((ref) => (
            <div
              key={ref.id}
              className="flex items-start gap-2 p-2 rounded-lg bg-slate-50/70 border border-slate-100"
            >
              <div className="w-6 h-6 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center shrink-0 mt-0.5">
                <UserCheck className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[10.5px] font-bold text-slate-900">
                  {ref.name}
                </span>
                <span className="text-[9px] text-slate-600 font-medium mb-1">
                  {ref.role}
                </span>
                <div className="flex flex-col gap-0.5 text-[8.5px] text-slate-500">
                  <a
                    href={`mailto:${ref.email}`}
                    className="hover:text-sky-700 truncate"
                  >
                    {ref.email}
                  </a>
                  <a
                    href={`tel:${ref.phone.replace(/\s+/g, '')}`}
                    className="hover:text-sky-700"
                  >
                    {ref.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
