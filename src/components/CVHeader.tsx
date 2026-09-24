import React, { useRef } from 'react';
import { MapPin, Phone, Mail, Globe, Camera } from 'lucide-react';
import { CVData } from '../types/cv';
import { RdcMapFlag } from './logos/RdcMapFlag';
import { LinkedInIcon, GitHubIcon, KaggleIcon } from './logos/SocialIcons';

interface CVHeaderProps {
  cv: CVData;
  onPhotoChange: (newPhotoUrl: string) => void;
  isEditable?: boolean;
}

export const CVHeader: React.FC<CVHeaderProps> = ({ cv, onPhotoChange, isEditable = false }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onPhotoChange(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative bg-gradient-to-r from-sky-50 via-blue-50/70 to-sky-100/60 border-b border-sky-100 px-6 py-5 rounded-t-xl overflow-hidden">
      {/* Decorative subtle background waves */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1000 200" preserveAspectRatio="none">
          <path d="M 0 80 Q 250 40 500 80 T 1000 80 L 1000 0 L 0 0 Z" fill="#0284C7" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-5">
        {/* Left Side: Photo + Name + Title + Contact */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
          {/* Profile Photo */}
          <div className="relative group shrink-0">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-3 border-sky-500 shadow-md bg-white">
              <img
                src={cv.photoUrl}
                alt={cv.fullName}
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  // Fallback avatar if local image not found
                  (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80';
                }}
              />
            </div>

            {/* Quick photo change button on hover / edit mode */}
            <button
              onClick={() => fileInputRef.current?.click()}
              title="Changer ou importer ma photo"
              className={`absolute bottom-0 right-0 p-1.5 rounded-full bg-[#0F3B6C] text-white shadow-md hover:bg-sky-600 transition-all ${
                isEditable ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              } no-print`}
            >
              <Camera className="w-3.5 h-3.5" />
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />
          </div>

          {/* Name & Title & Contact Info */}
          <div className="flex flex-col text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545] tracking-tight leading-none mb-1">
              {cv.fullName}
            </h1>
            <p className="text-sm sm:text-[15px] font-bold text-[#0284C7] leading-snug mb-1.5">
              {cv.title}
            </p>

            {/* Skills Tags separated by pipes */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1 text-[11px] font-semibold text-slate-700 mb-3">
              {cv.tags.map((tag, idx) => (
                <React.Fragment key={idx}>
                  <span className="hover:text-sky-700 transition-colors">{tag}</span>
                  {idx < cv.tags.length - 1 && (
                    <span className="text-sky-400 font-normal">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Contact details row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-[10.5px] text-slate-600">
              <div className="flex items-center gap-1.5 justify-center sm:justify-start">
                <MapPin className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                <span className="truncate">{cv.contact.location.replace('\n', ', ')}</span>
              </div>
              <div className="flex items-center gap-1.5 justify-center sm:justify-start">
                <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <a
                  href={`tel:${cv.contact.phone.replace(/\s+/g, '')}`}
                  className="font-medium text-slate-800 hover:text-emerald-700 transition-colors"
                >
                  {cv.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-1.5 justify-center sm:justify-start">
                <Mail className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                <a
                  href={`mailto:${cv.contact.email}`}
                  className="hover:text-sky-700 transition-colors underline-offset-2 hover:underline"
                >
                  {cv.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-1.5 justify-center sm:justify-start">
                <Globe className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                <span>{cv.contact.languagesSummary}</span>
              </div>
            </div>

            {/* Developer & Social Profiles (LinkedIn, GitHub, Kaggle) */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-2 pt-2 border-t border-sky-200/60 text-[9.5px]">
              {cv.contact.linkedin && (
                <a
                  href={cv.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#0077B5]/10 hover:bg-[#0077B5]/20 text-[#0077B5] font-semibold transition-colors shadow-2xs"
                  title="Consulter le profil LinkedIn de Roland"
                >
                  <LinkedInIcon className="w-3 h-3" />
                  <span>LinkedIn</span>
                </a>
              )}
              {cv.contact.github && (
                <a
                  href={cv.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-800/10 hover:bg-slate-800/20 text-slate-800 font-semibold transition-colors shadow-2xs"
                  title="Consulter le profil GitHub de Roland"
                >
                  <GitHubIcon className="w-3 h-3" />
                  <span>GitHub</span>
                </a>
              )}
              {cv.contact.kaggle && (
                <a
                  href={cv.contact.kaggle}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#20BEFF]/15 hover:bg-[#20BEFF]/25 text-[#0088CC] font-semibold transition-colors shadow-2xs"
                  title="Consulter le profil Kaggle de Roland"
                >
                  <KaggleIcon className="w-3 h-3" />
                  <span>Kaggle</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Right Side: DRC Map Flag + Motivational Quote */}
        <div className="hidden md:flex flex-col items-end text-right shrink-0 max-w-[200px] gap-2 pt-1">
          <RdcMapFlag className="h-12 w-auto" />
          <p className="text-[11px] font-semibold text-sky-900/90 italic leading-snug">
            « {cv.bannerQuote} »
          </p>
        </div>
      </div>
    </div>
  );
};
