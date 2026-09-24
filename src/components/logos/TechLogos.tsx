import React from 'react';

// FreeCodeCamp logo - Corrected from the broken "rreeCodeCamp (A)"
export const FreeCodeCampLogo: React.FC<{ className?: string }> = ({ className = 'h-5' }) => {
  return (
    <div className={`flex items-center gap-1.5 select-none ${className}`}>
      {/* Campfire flame icon */}
      <svg
        viewBox="0 0 24 24"
        className="h-full w-auto aspect-square fill-current text-slate-900"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2C9.5 6 6 8.5 6 13c0 3.31 2.69 6 6 6s6-2.69 6-6c0-3.5-2.5-6.5-6-11zm0 16c-1.66 0-3-1.34-3-3 0-1.89 1.15-3.35 2.1-4.75.46-.68.9-1.37 1.25-2.12.35.75.79 1.44 1.25 2.12.95 1.4 2.1 2.86 2.1 4.75 0 1.66-1.34 3-3 3z" />
        <path d="M4 14 L1 15 L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M20 14 L23 15 L20 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </svg>
      <span className="font-bold text-slate-900 tracking-tight text-xs font-mono">
        freeCodeCamp(🔥)
      </span>
    </div>
  );
};

// Coursera Logo (used for Map Fast with QGIS and Google Data Analytics)
export const CourseraLogo: React.FC<{ className?: string }> = ({ className = 'h-5' }) => {
  return (
    <div className={`flex items-center gap-1 select-none ${className}`}>
      <svg viewBox="0 0 100 24" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Coursera geometric C mark */}
        <circle cx="12" cy="12" r="10" stroke="#0056D2" strokeWidth="3.6" />
        <path d="M 12 5.5 A 6.5 6.5 0 1 0 18.5 12" stroke="#0056D2" strokeWidth="3.6" strokeLinecap="round" />
        {/* Coursera text */}
        <text x="27" y="16.5" fill="#0056D2" fontSize="14" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="-0.5">
          coursera
        </text>
      </svg>
    </div>
  );
};

// Google 4-Color Logo
export const GoogleLogo: React.FC<{ className?: string }> = ({ className = 'h-5' }) => {
  return (
    <div className={`flex items-center gap-1 select-none ${className}`}>
      <span className="font-medium text-xs tracking-tight" style={{ fontFamily: "'Product Sans', system-ui, sans-serif" }}>
        <span className="text-[#4285F4] font-bold">G</span>
        <span className="text-[#EA4335] font-bold">o</span>
        <span className="text-[#FBBC05] font-bold">o</span>
        <span className="text-[#4285F4] font-bold">g</span>
        <span className="text-[#34A853] font-bold">l</span>
        <span className="text-[#EA4335] font-bold">e</span>
      </span>
    </div>
  );
};

// Microsoft 4-Square Logo
export const MicrosoftLogo: React.FC<{ className?: string }> = ({ className = 'h-5' }) => {
  return (
    <div className={`flex items-center gap-1.5 select-none ${className}`}>
      <div className="grid grid-cols-2 gap-0.5 w-3.5 h-3.5 shrink-0">
        <span className="bg-[#F25022]"></span>
        <span className="bg-[#7FBA00]"></span>
        <span className="bg-[#00A4EF]"></span>
        <span className="bg-[#FFB900]"></span>
      </div>
      <span className="font-semibold text-slate-800 text-xs tracking-tight font-sans">
        Microsoft
      </span>
    </div>
  );
};

// Udemy Logo
export const UdemyLogo: React.FC<{ className?: string }> = ({ className = 'h-5' }) => {
  return (
    <div className={`flex items-center gap-1 select-none ${className}`}>
      <svg viewBox="0 0 70 24" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Udemy inverted chevron/flame symbol */}
        <path d="M 6 8 L 12 2 L 18 8" stroke="#A435F0" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
        <text x="2" y="21" fill="#1C1D1F" fontSize="13" fontWeight="900" fontFamily="system-ui, sans-serif">
          ûdemy
        </text>
      </svg>
    </div>
  );
};

// Horizon Services Consulting Logo
export const HorizonConsultingLogo: React.FC<{ className?: string }> = ({ className = 'h-6' }) => {
  return (
    <div className={`flex items-center gap-1.5 select-none ${className}`}>
      <div className="w-5 h-5 rounded-full border-1.5 border-[#0F3E6D] flex items-center justify-center bg-blue-50/50">
        <span className="text-[7.5px] font-black text-[#0F3E6D] tracking-tighter">HSC</span>
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-[8px] font-extrabold text-[#0F3E6D] tracking-tight uppercase">
          HORIZON
        </span>
        <span className="text-[6.5px] font-semibold text-slate-500 uppercase tracking-tighter">
          SERVICES CONSULTING
        </span>
      </div>
    </div>
  );
};

// Radio Maria Bukavu Logo
export const RadioMariaLogo: React.FC<{ className?: string }> = ({ className = 'h-9' }) => {
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      {/* Radio antenna/waves */}
      <svg viewBox="0 0 48 48" className="h-full w-auto aspect-square fill-none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" stroke="#0284C7" strokeWidth="2" fill="#F0F9FF" />
        <path d="M 14 24 A 10 10 0 0 1 34 24" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 18 24 A 6 6 0 0 1 30 24" stroke="#0369A1" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="24" cy="24" r="3" fill="#0369A1" />
        <line x1="24" y1="27" x2="24" y2="38" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
      <div className="flex flex-col leading-tight">
        <span className="text-base font-extrabold text-[#0284C7] tracking-tight" style={{ fontFamily: 'system-ui, sans-serif' }}>
          Radio
        </span>
        <span className="text-base font-extrabold text-[#0369A1] tracking-tight -mt-1.5">
          Maria
        </span>
      </div>
    </div>
  );
};

// DRC Flag Map graphic in header
export const DrcFlagMap: React.FC<{ className?: string }> = ({ className = 'h-14' }) => {
  return (
    <div className={`relative flex items-center select-none ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className="h-full w-auto aspect-square drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="drcMapClip">
            {/* Silhouette of Democratic Republic of Congo */}
            <path d="M 28 8 C 42 12, 60 10, 72 20 C 78 26, 85 30, 85 42 C 85 54, 95 62, 92 78 C 88 88, 80 92, 70 88 C 65 85, 60 92, 52 90 C 42 88, 40 78, 30 76 C 22 75, 12 70, 8 58 C 4 48, 12 42, 16 35 C 18 28, 20 18, 28 8 Z" />
          </clipPath>
        </defs>

        <g clipPath="url(#drcMapClip)">
          {/* DRC Sky Blue Base */}
          <rect width="100" height="100" fill="#007FFF" />

          {/* Red diagonal stripe with yellow border */}
          <polygon points="0,105 105,0 115,0 0,115" fill="#FCD116" />
          <polygon points="0,102 102,0 110,0 0,110" fill="#CE1126" />

          {/* Yellow 5-pointed star in upper hoist */}
          <polygon
            points="28,20 31,27 38,27 32,32 34,39 28,34 22,39 24,32 18,27 25,27"
            fill="#FCD116"
          />
        </g>

        {/* Crisp border for map */}
        <path
          d="M 28 8 C 42 12, 60 10, 72 20 C 78 26, 85 30, 85 42 C 85 54, 95 62, 92 78 C 88 88, 80 92, 70 88 C 65 85, 60 92, 52 90 C 42 88, 40 78, 30 76 C 22 75, 12 70, 8 58 C 4 48, 12 42, 16 35 C 18 28, 20 18, 28 8 Z"
          fill="none"
          stroke="#0052A3"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
};
