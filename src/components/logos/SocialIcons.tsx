import React from 'react';

export const LinkedInIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export const GitHubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

export const KaggleIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.825 23.859c-.022.09-.112.141-.27.141h-3.139c-.18 0-.338-.067-.472-.202l-5.326-6.697-1.551 1.483v5.146c0 .18-.067.326-.202.438-.135.112-.292.169-.472.169h-3.048c-.18 0-.337-.056-.472-.169-.135-.112-.202-.258-.202-.438v-23.473c0-.18.067-.326.202-.438.135-.112.292-.169.472-.169h3.048c.18 0 .337.056.472.169.135.112.202.258.202.438v14.496l6.63-6.764c.135-.135.292-.202.472-.202h3.386c.158 0 .248.056.27.169.022.112-.022.202-.135.27l-7.394 7.371 7.642 9.776c.112.09.157.18.135.27z" />
  </svg>
);

export const TableauIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Central big cross */}
    <rect x="11" y="2" width="2" height="20" fill="#E8762D" rx="0.5" />
    <rect x="2" y="11" width="20" height="2" fill="#E8762D" rx="0.5" />
    {/* Secondary cross points */}
    <rect x="5" y="7" width="1.5" height="10" fill="#1F77B4" rx="0.4" />
    <rect x="17.5" y="7" width="1.5" height="10" fill="#1F77B4" rx="0.4" />
    <rect x="7" y="5" width="10" height="1.5" fill="#2CA02C" rx="0.4" />
    <rect x="7" y="17.5" width="10" height="1.5" fill="#2CA02C" rx="0.4" />
    {/* Small dots */}
    <rect x="4.5" y="4.5" width="1.2" height="1.2" fill="#FF7F0E" rx="0.3" />
    <rect x="18.3" y="4.5" width="1.2" height="1.2" fill="#9467BD" rx="0.3" />
    <rect x="4.5" y="18.3" width="1.2" height="1.2" fill="#D62728" rx="0.3" />
    <rect x="18.3" y="18.3" width="1.2" height="1.2" fill="#8C564B" rx="0.3" />
  </svg>
);
