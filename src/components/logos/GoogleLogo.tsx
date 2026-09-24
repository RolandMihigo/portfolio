import React from 'react';

export const GoogleLogo: React.FC<{ className?: string }> = ({ className = 'h-6' }) => {
  return (
    <div className={`flex items-center select-none ${className}`}>
      <svg
        viewBox="0 0 80 28"
        className="h-full w-auto shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="0"
          y="21"
          fontSize="22"
          fontWeight="bold"
          fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
          letterSpacing="-0.5"
        >
          <tspan fill="#4285F4">G</tspan>
          <tspan fill="#EA4335">o</tspan>
          <tspan fill="#FBBC05">o</tspan>
          <tspan fill="#4285F4">g</tspan>
          <tspan fill="#34A853">l</tspan>
          <tspan fill="#EA4335">e</tspan>
        </text>
      </svg>
    </div>
  );
};
