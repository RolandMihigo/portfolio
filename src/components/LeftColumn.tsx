import React from 'react';
import {
  BarChart2,
  MapPin,
  ClipboardList,
  PieChart,
  Database,
  Users,
  Music,
  Activity,
  Flame,
} from 'lucide-react';
import { CVData } from '../types/cv';
import { SectionHeader } from './SectionHeader';

interface LeftColumnProps {
  cv: CVData;
}

export const LeftColumn: React.FC<LeftColumnProps> = ({ cv }) => {
  const getSkillCategoryIcon = (iconName: string) => {
    const iconClass = 'w-3.5 h-3.5 text-sky-700 shrink-0';
    switch (iconName) {
      case 'bar-chart':
        return <BarChart2 className={iconClass} />;
      case 'map-pin':
        return <MapPin className={iconClass} />;
      case 'clipboard-list':
        return <ClipboardList className={iconClass} />;
      case 'pie-chart':
        return <PieChart className={iconClass} />;
      case 'database':
        return <Database className={iconClass} />;
      case 'users':
        return <Users className={iconClass} />;
      default:
        return <BarChart2 className={iconClass} />;
    }
  };

  const getInterestIcon = (iconName: string) => {
    const iconClass = 'w-4 h-4 text-sky-700';
    switch (iconName) {
      case 'music':
        return <Music className={iconClass} />;
      case 'football':
        return <Activity className={iconClass} />;
      case 'running':
        return <Flame className={iconClass} />;
      default:
        return <Activity className={iconClass} />;
    }
  };

  return (
    <div className="flex flex-col gap-5 text-slate-800">
      {/* 1. Profil Professionnel */}
      <section>
        <SectionHeader title="Profil Professionnel" iconType="profile" />
        <p className="text-[10px] leading-relaxed text-slate-700 font-normal text-justify whitespace-pre-line">
          {cv.profile}
        </p>
      </section>

      {/* 2. Compétences Techniques */}
      <section>
        <SectionHeader title="Compétences Techniques" iconType="skills" />
        <div className="flex flex-col gap-3">
          {cv.skillCategories.map((cat) => (
            <div key={cat.id} className="flex flex-col">
              <div className="flex items-center gap-1.5 mb-1">
                {getSkillCategoryIcon(cat.iconName)}
                <h3 className="text-[10.5px] font-bold text-slate-900 leading-tight">
                  {cat.title}
                </h3>
              </div>
              <ul className="pl-4 list-disc text-[9.5px] text-slate-600 leading-snug space-y-0.5 marker:text-sky-600">
                {cat.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="pl-0.5">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Langues */}
      <section>
        <SectionHeader title="Langues" iconType="languages" />
        <div className="grid grid-cols-2 gap-2.5">
          {cv.languages.map((lang) => (
            <div key={lang.code} className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#0F3B6C] text-white flex items-center justify-center font-extrabold text-[10px] shrink-0 shadow-xs">
                {lang.code}
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[10.5px] font-bold text-slate-900">
                  {lang.name}
                </span>
                <span className="text-[8.5px] text-slate-500 font-medium">
                  ({lang.level})
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Centres d'Intérêt */}
      <section>
        <SectionHeader title="Centres d'Intérêt" iconType="interests" />
        <div className="grid grid-cols-3 gap-2 text-center">
          {cv.interests.map((interest, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-2 rounded-lg bg-slate-50/80 border border-slate-100"
            >
              <div className="mb-1">{getInterestIcon(interest.iconName)}</div>
              <span className="text-[10px] font-bold text-slate-900 leading-none">
                {interest.title}
              </span>
              {interest.subtitle && (
                <span className="text-[7.5px] text-slate-500 leading-tight mt-0.5">
                  {interest.subtitle}
                </span>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
