import React from 'react';

export const RadioMariaLogo: React.FC<{ className?: string }> = ({ className = 'h-9' }) => {
  return (
    <div className={`flex items-center gap-1.5 select-none ${className}`}>
      {/* Radio Maria tower icon with radiating blue concentric rings */}
      <svg
        viewBox="0 0 100 100"
        className="h-full w-auto aspect-square shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Central antenna stem */}
        <path d="M 50 22 L 50 82" stroke="#0077B6" strokeWidth="4.5" strokeLinecap="round" />
        <circle cx="50" cy="22" r="5" fill="#0077B6" />
        {/* Radiating radio waves on left */}
        <path
          d="M 38 34 A 18 18 0 0 0 38 66"
          stroke="#0096C7"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 28 25 A 30 30 0 0 0 28 75"
          stroke="#0096C7"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 18 16 A 42 42 0 0 0 18 84"
          stroke="#48CAE4"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        {/* Radiating radio waves on right */}
        <path
          d="M 62 34 A 18 18 0 0 1 62 66"
          stroke="#0096C7"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 72 25 A 30 30 0 0 1 72 75"
          stroke="#0096C7"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 82 16 A 42 42 0 0 1 82 84"
          stroke="#48CAE4"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* Typography: Radio Maria */}
      <div className="flex flex-col justify-center leading-tight">
        <span className="font-bold text-[#0077B6] text-sm tracking-tight">
          Radio
        </span>
        <span className="font-extrabold text-[#023E8A] text-base -mt-1 tracking-tight">
          Maria
        </span>
      </div>
    </div>
  );
};
