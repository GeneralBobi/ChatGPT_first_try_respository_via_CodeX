import React from 'react';

const Retro = () => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 200 200">
      <defs>
        <radialGradient id="retroGradient">
          <stop offset="10%" stopColor="#f7971e" />
          <stop offset="95%" stopColor="#ffd200" />
        </radialGradient>
      </defs>
      <rect width="200" height="200" fill="#fdf0d5" />
      <circle cx="100" cy="100" r="80" fill="url(#retroGradient)" />
      <circle cx="100" cy="100" r="60" fill="#fdf0d5" />
      <circle cx="100" cy="100" r="40" fill="#e57e2a" />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="#fff"
        fontSize="36"
        fontFamily="'Bungee', cursive"
        textTransform="uppercase"
      >
        Retro
      </text>
    </svg>
  );
};

export default Retro;
