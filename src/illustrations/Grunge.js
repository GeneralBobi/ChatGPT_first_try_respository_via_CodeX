import React from 'react';

const Grunge = () => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 200 200">
      <defs>
        <filter id="grunge-texture" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" seed="10" />
          <feDisplacementMap in="SourceGraphic" scale="10" />
        </filter>
        <linearGradient id="grungeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5a5a5a" />
          <stop offset="100%" stopColor="#3a3a3a" />
        </linearGradient>
      </defs>
      <rect width="200" height="200" fill="url(#grungeGradient)" />
      <rect width="200" height="200" fill="#333" filter="url(#grunge-texture)" opacity="0.3" />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="#fff"
        fontSize="32"
        fontFamily="'Special Elite', cursive"
        style={{ letterSpacing: '2px' }}
      >
        GRUNGE
      </text>
    </svg>
  );
};

export default Grunge;
