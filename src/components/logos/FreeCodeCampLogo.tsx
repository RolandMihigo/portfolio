import React from 'react';

export const FreeCodeCampLogo: React.FC<{ className?: string }> = ({ className = 'h-6' }) => {
  return (
    <div className={`flex items-center gap-1.5 select-none ${className}`}>
      {/* Official freeCodeCamp flame with parentheses */}
      <svg
        viewBox="0 0 140 50"
        className="h-full w-auto shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left parenthesis */}
        <path
          d="M 16 10 C 10 17 8 23 8 26 C 8 29 10 35 16 42"
          stroke="#0A0A23"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Flame in center */}
        <g transform="translate(18, 8) scale(0.65)" fill="#006400">
          <path d="M 18 2 C 16 10 10 14 10 22 C 10 28 14 34 20 34 C 26 34 30 28 30 22 C 30 17 26 13 24 10 C 24 14 22 17 19 17 C 17 17 16 15 16 13 C 16 8 20 5 18 2 Z" />
          <path
            d="M 20 18 C 17 21 16 23 16 26 C 16 29 18 31 20 31 C 22 31 24 29 24 26 C 24 23 22 20 20 18 Z"
            fill="#FFBF00"
          />
        </g>
        {/* Right parenthesis */}
        <path
          d="M 44 10 C 50 17 52 23 52 26 C 52 29 50 35 44 42"
          stroke="#0A0A23"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* freeCodeCamp wordmark */}
        <text
          x="58"
          y="31"
          fill="#0A0A23"
          fontSize="17"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="bold"
          letterSpacing="-0.3"
        >
          freeCodeCamp
        </text>
      </svg>
    </div>
  );
};
