import React from 'react';

export const IUEALogo: React.FC<{ className?: string }> = ({ className = 'h-12' }) => {
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      {/* High-fidelity Shield Crest */}
      <svg
        viewBox="0 0 110 135"
        className="h-full w-auto aspect-[110/135] shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="iueaShieldClip">
            <path d="M 55 4 C 95 4, 105 24, 105 64 C 105 96, 75 116, 55 125 C 35 116, 5 96, 5 64 C 5 24, 15 4, 55 4 Z" />
          </clipPath>
        </defs>

        <g clipPath="url(#iueaShieldClip)">
          {/* Top Left Quadrant - Slate Grey */}
          <rect x="0" y="0" width="55" height="60" fill="#4B4F54" />
          {/* Top Right Quadrant - Deep Burgundy */}
          <rect x="55" y="0" width="55" height="60" fill="#7A0019" />
          {/* Bottom Left Quadrant - Slate Grey */}
          <rect x="0" y="60" width="55" height="70" fill="#4B4F54" />
          {/* Bottom Right Quadrant - Deep Burgundy */}
          <rect x="55" y="60" width="55" height="70" fill="#7A0019" />

          {/* Cross lines */}
          <line x1="55" y1="0" x2="55" y2="130" stroke="#1F2327" strokeWidth="2" />
          <line x1="0" y1="60" x2="110" y2="60" stroke="#1F2327" strokeWidth="2" />

          {/* Top Left: I U */}
          <text
            x="27"
            y="42"
            fill="#FFFFFF"
            fontSize="22"
            fontFamily="'UnifrakturMaguntia', 'Cinzel', Georgia, serif"
            fontWeight="bold"
            textAnchor="middle"
          >
            I U
          </text>

          {/* Top Right: Open Book */}
          <g transform="translate(67, 23) scale(0.7)" fill="#FFFFFF">
            <path d="M 19 3 C 14 3, 10 5, 2 8 L 2 28 C 10 25, 14 23, 19 23 C 24 23, 28 25, 36 28 L 36 8 C 28 5, 24 3, 19 3 Z M 19 6 C 23 6, 27 7.5, 33 10 L 33 24.5 C 27 22, 23 21, 19 21 C 15 21, 11 22, 5 24.5 L 5 10 C 11 7.5, 15 6, 19 6 Z" />
          </g>

          {/* Bottom Left: 5 Waves */}
          <g stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" opacity="0.95">
            <path d="M 12 73 Q 24 70 36 73 T 50 73" fill="none" />
            <path d="M 12 82 Q 24 79 36 82 T 50 82" fill="none" />
            <path d="M 13 91 Q 25 88 37 91 T 49 91" fill="none" />
            <path d="M 16 100 Q 27 97 39 100 T 48 100" fill="none" />
            <path d="M 22 109 Q 30 106 40 109 T 46 109" fill="none" />
          </g>

          {/* Bottom Right: E A */}
          <text
            x="82"
            y="94"
            fill="#FFFFFF"
            fontSize="22"
            fontFamily="'UnifrakturMaguntia', 'Cinzel', Georgia, serif"
            fontWeight="bold"
            textAnchor="middle"
          >
            E A
          </text>
        </g>

        {/* Shield Outline */}
        <path
          d="M 55 4 C 95 4, 105 24, 105 64 C 105 96, 75 116, 55 125 C 35 116, 5 96, 5 64 C 5 24, 15 4, 55 4 Z"
          fill="none"
          stroke="#1F2327"
          strokeWidth="3.2"
        />

        {/* Banner Ribbon at bottom */}
        <path
          d="M 12 125 Q 55 137 98 125 L 94 133 Q 55 143 16 133 Z"
          fill="#7A0019"
          stroke="#40000C"
          strokeWidth="0.8"
        />
        <text
          x="55"
          y="131"
          fill="#FFFFFF"
          fontSize="4.8"
          fontWeight="bold"
          letterSpacing="0.6"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          LEARNING TO SUCCEED
        </text>
      </svg>

      {/* Typography: INTERNATIONAL UNIVERSITY OF EAST AFRICA */}
      <div className="flex flex-col justify-center leading-[0.98]">
        <span
          className="text-xs md:text-[13px] font-black tracking-wider text-black uppercase"
          style={{ fontFamily: "'UnifrakturMaguntia', 'Cinzel', Georgia, serif" }}
        >
          International
        </span>
        <span
          className="text-sm md:text-[15px] font-black tracking-wider text-[#7A0019] uppercase"
          style={{ fontFamily: "'UnifrakturMaguntia', 'Cinzel', Georgia, serif" }}
        >
          University
        </span>
        <span
          className="text-xs md:text-[13px] font-black tracking-wider text-black uppercase"
          style={{ fontFamily: "'UnifrakturMaguntia', 'Cinzel', Georgia, serif" }}
        >
          of East Africa
        </span>
      </div>
    </div>
  );
};
