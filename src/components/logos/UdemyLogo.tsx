import React from 'react';

export const UdemyLogo: React.FC<{ className?: string }> = ({ className = 'h-6' }) => {
  return (
    <div className={`flex items-center gap-1 select-none ${className}`}>
      <svg
        viewBox="0 0 100 32"
        className="h-full w-auto shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Inverted U chevron symbol */}
        <path
          d="M 6 12 L 14 4 L 22 12"
          stroke="#A435F0"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* udemy text */}
        <text
          x="28"
          y="23"
          fill="#1C1D1F"
          fontSize="20"
          fontWeight="bold"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="-0.5"
        >
          ûdemy
        </text>
      </svg>
    </div>
  );
};
