import React from 'react';

export const HorizonLogo: React.FC<{ className?: string }> = ({ className = 'h-7' }) => {
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      {/* HSC circular crest */}
      <svg
        viewBox="0 0 44 44"
        className="h-full w-auto aspect-square shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="22" cy="22" r="20" stroke="#0F3B6C" strokeWidth="2.5" fill="#F8FAFC" />
        <circle cx="22" cy="22" r="16" stroke="#0284C7" strokeWidth="1" strokeDasharray="2 2" fill="none" />
        <text
          x="22"
          y="26"
          fill="#0F3B6C"
          fontSize="11"
          fontWeight="900"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
          letterSpacing="0.5"
        >
          HSC
        </text>
      </svg>
      {/* Subtext */}
      <div className="flex flex-col leading-none">
        <span className="font-bold text-[9px] text-[#0F3B6C] tracking-wider uppercase">
          HORIZON
        </span>
        <span className="font-semibold text-[7.5px] text-slate-600 tracking-tight uppercase">
          SERVICES CONSULTING
        </span>
      </div>
    </div>
  );
};
