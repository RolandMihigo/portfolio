import React from 'react';

export const EGovAfricaLogo: React.FC<{ className?: string }> = ({ className = 'h-10' }) => {
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      {/* Africa Map with Wifi Rings */}
      <svg
        viewBox="0 0 160 160"
        className="h-full w-auto aspect-square shrink-0 drop-shadow-xs"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Africa continent silhouette in gold */}
        <path
          d="M 58 14 
             C 72 13, 90 20, 102 28 
             C 107 33, 114 43, 122 47 
             C 134 53, 148 64, 150 78 
             C 151 86, 145 92, 137 95 
             C 127 99, 122 108, 120 118 
             C 118 126, 114 136, 104 146 
             C 98 152, 92 153, 86 148 
             C 80 142, 75 130, 72 120 
             C 67 105, 59 95, 54 88 
             C 45 76, 32 78, 20 68 
             C 12 60, 10 48, 14 38 
             C 18 28, 35 22, 45 18 Z"
          fill="#F5B214"
        />
        {/* Madagascar */}
        <path
          d="M 132 106 C 135 104, 140 110, 137 122 C 135 129, 131 133, 128 131 C 126 128, 128 116, 132 106 Z"
          fill="#F5B214"
        />

        {/* Black Radiating Concentric Arcs over DRC / Central Africa */}
        <g stroke="#111827" strokeWidth="4.2" strokeLinecap="round" fill="none">
          {/* Inner ring */}
          <circle cx="86" cy="98" r="6" fill="#111827" stroke="none" />
          {/* Wave 1 */}
          <path d="M 77 92 A 12 12 0 0 1 95 92" />
          <path d="M 78 104 A 12 12 0 0 0 94 104" />
          {/* Wave 2 */}
          <path d="M 70 85 A 22 22 0 0 1 102 85" />
          <path d="M 71 111 A 22 22 0 0 0 101 111" />
          {/* Wave 3 */}
          <path d="M 63 78 A 32 32 0 0 1 109 78" />
          <path d="M 64 118 A 32 32 0 0 0 108 118" />
          {/* Wave 4 */}
          <path d="M 56 71 A 42 42 0 0 1 116 71" />
          <path d="M 58 125 A 42 42 0 0 0 114 125" />
        </g>
      </svg>

      {/* Typography: ,eGov AFRICA */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-baseline font-black tracking-tight text-slate-900 text-base md:text-lg">
          <span className="text-amber-500 font-extrabold mr-0.5 text-base">,</span>
          <span>eGov</span>
        </div>
        <span className="text-[9px] font-extrabold tracking-[0.22em] text-slate-900 uppercase mt-0.5">
          AFRICA
        </span>
      </div>
    </div>
  );
};
