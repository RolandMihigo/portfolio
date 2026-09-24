import React from 'react';

export const VerditraLogo: React.FC<{ className?: string }> = ({ className = 'h-9' }) => {
  return (
    <div className={`flex flex-col justify-center select-none ${className}`}>
      {/* High-fidelity SVG render of .verditra logotype */}
      <svg
        viewBox="0 0 160 48"
        className="h-full w-auto shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Leading square dot */}
        <rect x="2" y="27" width="5.5" height="5.5" fill="#000000" />

        {/* .verditra logotype */}
        <text
          x="12"
          y="31"
          fill="#000000"
          fontSize="31"
          fontWeight="bold"
          fontFamily="'Plus Jakarta Sans', -apple-system, system-ui, sans-serif"
          letterSpacing="-1.2"
        >
          verditra
        </text>

        {/* Digital Business Transformation subtitle */}
        <text
          x="1"
          y="44"
          fill="#1E293B"
          fontSize="8.8"
          fontWeight="500"
          fontFamily="-apple-system, system-ui, sans-serif"
          letterSpacing="0.2"
        >
          Digital Business Transformation
        </text>
      </svg>
    </div>
  );
};
