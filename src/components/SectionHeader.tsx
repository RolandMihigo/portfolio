import React from 'react';
import {
  User,
  Settings,
  Globe,
  Star,
  Briefcase,
  GraduationCap,
  Award,
  Users,
} from 'lucide-react';

interface SectionHeaderProps {
  title: string;
  iconType: 'profile' | 'skills' | 'languages' | 'interests' | 'experience' | 'education' | 'certifications' | 'references';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, iconType }) => {
  const getIcon = () => {
    const iconClass = 'w-4 h-4 text-white';
    switch (iconType) {
      case 'profile':
        return <User className={iconClass} />;
      case 'skills':
        return <Settings className={iconClass} />;
      case 'languages':
        return <Globe className={iconClass} />;
      case 'interests':
        return <Star className={iconClass} />;
      case 'experience':
        return <Briefcase className={iconClass} />;
      case 'education':
        return <GraduationCap className={iconClass} />;
      case 'certifications':
        return <Award className={iconClass} />;
      case 'references':
        return <Users className={iconClass} />;
      default:
        return <User className={iconClass} />;
    }
  };

  return (
    <div className="flex items-center gap-2 mb-3 pb-1 border-b border-sky-100/80">
      <div className="w-6 h-6 rounded-full bg-[#0F3B6C] flex items-center justify-center shrink-0 shadow-xs">
        {getIcon()}
      </div>
      <h2 className="text-[12.5px] font-extrabold uppercase tracking-wide text-[#0F3B6C]">
        {title}
      </h2>
    </div>
  );
};
