import React from 'react';

interface Props {
  dark?: boolean;
}

export const ArchitecturalLines: React.FC<Props> = ({ dark = false }) => {
  const strokeColor = dark ? "rgba(255, 255, 255, 0.05)" : "rgba(16, 23, 53, 0.05)";
  const accentColor = dark ? "rgba(255, 90, 22, 0.15)" : "rgba(255, 90, 22, 0.2)";

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1000 800">
        {/* Blueprint Grid lines */}
        <line x1="100" y1="0" x2="100" y2="800" stroke={strokeColor} strokeWidth="1" strokeDasharray="4 4" />
        <line x1="300" y1="0" x2="300" y2="800" stroke={strokeColor} strokeWidth="1" />
        <line x1="500" y1="0" x2="500" y2="800" stroke={strokeColor} strokeWidth="1" strokeDasharray="8 8" />
        <line x1="700" y1="0" x2="700" y2="800" stroke={strokeColor} strokeWidth="1" />
        <line x1="900" y1="0" x2="900" y2="800" stroke={strokeColor} strokeWidth="1" strokeDasharray="4 4" />

        <line x1="0" y1="150" x2="1000" y2="150" stroke={strokeColor} strokeWidth="1" />
        <line x1="0" y1="400" x2="1000" y2="400" stroke={strokeColor} strokeWidth="1" strokeDasharray="6 6" />
        <line x1="0" y1="650" x2="1000" y2="650" stroke={strokeColor} strokeWidth="1" />

        {/* Geometric Architectural Elevation outlines */}
        <polygon points="50,750 180,600 180,750" fill="none" stroke={accentColor} strokeWidth="1.5" />
        <rect x="750" y="200" width="160" height="260" fill="none" stroke={strokeColor} strokeWidth="1.5" />
        <line x1="750" y1="200" x2="910" y2="460" stroke={strokeColor} strokeWidth="1" />
        <line x1="910" y1="200" x2="750" y2="460" stroke={strokeColor} strokeWidth="1" />
        
        <circle cx="850" cy="600" r="120" fill="none" stroke={accentColor} strokeWidth="1" strokeDasharray="4 4" />
      </svg>
    </div>
  );
};
