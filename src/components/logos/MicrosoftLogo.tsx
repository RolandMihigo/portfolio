import React from 'react';

export const MicrosoftLogo: React.FC<{ className?: string }> = ({ className = 'h-5' }) => {
  return (
    <div className={`flex items-center gap-1.5 select-none ${className}`}>
      <svg
        viewBox="0 0 22 22"
        className="h-full w-auto aspect-square shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0" y="0" width="10" height="10" fill="#F25022" />
        <rect x="12" y="0" width="10" height="10" fill="#7FBA00" />
        <rect x="0" y="12" width="10" height="10" fill="#00A4EF" />
        <rect x="12" y="12" width="10" height="10" fill="#FFB900" />
      </svg>
      <span className="font-semibold text-slate-700 text-xs md:text-sm font-sans tracking-tight">
        Microsoft
      </span>
    </div>
  );
};
