import React from 'react';

const Punk = () => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 200 200">
      <rect width="200" height="200" fill="#000000" />
      <path d="M 0 0 L 200 200" stroke="#ec008c" strokeWidth="20" />
      <path d="M 0 200 L 200 0" stroke="#fc6767" strokeWidth="10" />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="#ffffff"
        fontSize="52"
        fontFamily="'Permanent Marker', cursive"
        textTransform="uppercase"
        transform="rotate(-10 100 100)"
      >
        PUNK
      </text>
    </svg>
  );
};

export default Punk;
