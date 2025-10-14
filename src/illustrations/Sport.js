import React from 'react';

const Sport = () => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 200 200">
      <rect width="200" height="200" fill="#ffffff" />
      <path d="M 20 50 L 180 50 L 160 150 L 40 150 Z" fill="#00c6ff" />
      <path d="M 30 60 L 170 60" stroke="#fff" strokeWidth="8" />
      <path d="M 50 140 L 150 140" stroke="#fff" strokeWidth="8" />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="#002aff"
        fontSize="48"
        fontFamily="'Montserrat', sans-serif"
        fontWeight="bold"
        textTransform="uppercase"
        transform="skewX(-10)"
      >
        Sport
      </text>
    </svg>
  );
};

export default Sport;
