import React from 'react';

export const CourseraLogo: React.FC<{ className?: string }> = ({ className = 'h-7' }) => {
  return (
    <div className={`flex items-center gap-1.5 select-none ${className}`}>
      {/* Official Coursera geometric emblem */}
      <svg
        viewBox="0 0 100 100"
        className="h-full w-auto aspect-square shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100" height="100" rx="20" fill="#0056D2" />
        <path
          d="M 50 18 C 32 18 18 32 18 50 C 18 68 32 82 50 82 C 64 82 76 73 80 61 L 66 61 C 63 67 57 71 50 71 C 38.5 71 29 61.5 29 50 C 29 38.5 38.5 29 50 29 C 57 29 63 33 66 39 L 80 39 C 76 27 64 18 50 18 Z"
          fill="#FFFFFF"
        />
      </svg>
      <span className="font-bold text-[#0056D2] text-sm tracking-tight font-sans">
        coursera
      </span>
    </div>
  );
};
