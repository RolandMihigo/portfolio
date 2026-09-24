import React from 'react';

export const RdcMapFlag: React.FC<{ className?: string }> = ({ className = 'h-16' }) => {
  return (
    <div className={`relative shrink-0 select-none ${className}`}>
      <svg
        viewBox="0 0 160 140"
        className="h-full w-auto aspect-[160/140] drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="rdcMapClip">
            {/* Detailed silhouette path of the Democratic Republic of the Congo */}
            <path d="M 62 10 
                     C 76 9, 90 14, 102 18
                     C 114 22, 126 25, 134 35
                     C 142 45, 146 58, 142 70
                     C 139 79, 132 87, 130 96
                     C 128 106, 132 118, 128 126
                     C 124 134, 114 135, 106 130
                     C 96 124, 88 112, 80 110
                     C 72 108, 64 116, 56 122
                     C 48 128, 42 120, 38 114
                     C 32 104, 28 92, 24 82
                     C 20 72, 12 70, 8 60
                     C 4 50, 10 40, 20 34
                     C 30 28, 44 24, 52 16 Z" />
          </clipPath>
        </defs>

        {/* DRC Flag inside the DRC silhouette */}
        <g clipPath="url(#rdcMapClip)">
          {/* Base Sky Blue */}
          <rect x="0" y="0" width="160" height="140" fill="#007FFF" />

          {/* Yellow outer border stripe for red diagonal */}
          <polygon
            points="0,140 18,140 160,24 160,0 142,0 0,116"
            fill="#F7D618"
          />

          {/* Red central diagonal stripe */}
          <polygon
            points="0,135 14,135 160,19 160,4 146,4 0,121"
            fill="#CE1021"
          />

          {/* Yellow 5-pointed star in upper left */}
          <polygon
            points="34,22 37,30 46,30 39,35 41,43 34,38 27,43 29,35 22,30 31,30"
            fill="#F7D618"
            stroke="#D9B700"
            strokeWidth="0.5"
          />
        </g>

        {/* Outer subtle outline for crisp definition */}
        <path
          d="M 62 10 
             C 76 9, 90 14, 102 18
             C 114 22, 126 25, 134 35
             C 142 45, 146 58, 142 70
             C 139 79, 132 87, 130 96
             C 128 106, 132 118, 128 126
             C 124 134, 114 135, 106 130
             C 96 124, 88 112, 80 110
             C 72 108, 64 116, 56 122
             C 48 128, 42 120, 38 114
             C 32 104, 28 92, 24 82
             C 20 72, 12 70, 8 60
             C 4 50, 10 40, 20 34
             C 30 28, 44 24, 52 16 Z"
          fill="none"
          stroke="#005BBB"
          strokeWidth="1.2"
        />
      </svg>
    </div>
  );
};
