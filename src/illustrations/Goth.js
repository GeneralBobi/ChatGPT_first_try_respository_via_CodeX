import React from 'react';

const Goth = () => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 200 200">
      <rect width="200" height="200" fill="#1a1a1a" />
      <path
        d="M 100 20 L 120 80 L 180 90 L 130 130 L 150 190 L 100 160 L 50 190 L 70 130 L 20 90 L 80 80 Z"
        fill="#434343"
      />
      <path
        d="M 100 40 L 110 85 L 155 95 L 120 125 L 135 170 L 100 150 L 65 170 L 80 125 L 45 95 L 90 85 Z"
        fill="#1a1a1a"
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="#c4c4c4"
        fontSize="42"
        fontFamily="'Nosifer', cursive"
        textTransform="uppercase"
      >
        Goth
      </text>
    </svg>
  );
};

export default Goth;
