import React from 'react';
import { CVData } from '../types/cv';
import { CVHeader } from './CVHeader';
import { LeftColumn } from './LeftColumn';
import { RightColumn } from './RightColumn';

interface CVDocumentProps {
  cv: CVData;
  onPhotoChange: (newPhotoUrl: string) => void;
  isEditable?: boolean;
}

export const CVDocument: React.FC<CVDocumentProps> = ({
  cv,
  onPhotoChange,
  isEditable = false,
}) => {
  return (
    <div
      id="cv-sheet"
      className="w-full max-w-[850px] bg-white shadow-2xl rounded-xl border border-slate-200/80 overflow-hidden mx-auto transition-all"
      style={{
        boxSizing: 'border-box',
      }}
    >
      {/* 1. Header Banner */}
      <CVHeader
        cv={cv}
        onPhotoChange={onPhotoChange}
        isEditable={isEditable}
      />

      {/* 2. Main 2-Column Content Body */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6 bg-white">
        {/* Left Column (Profil, Compétences, Langues, Centres d'intérêt) */}
        <div className="md:col-span-5 md:pr-4 md:border-r md:border-slate-200">
          <LeftColumn cv={cv} />
        </div>

        {/* Right Column (Expérience, Formation, Certifications, Références) */}
        <div className="md:col-span-7 md:pl-2">
          <RightColumn cv={cv} />
        </div>
      </div>
    </div>
  );
};
