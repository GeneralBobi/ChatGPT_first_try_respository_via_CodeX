import React from 'react';

const Card = ({ style }) => {
  return (
    <div className="card">
      <div className="illustration-container">
        {style.illustration}
      </div>
      <h2>{style.name}</h2>
      <p>{style.description}</p>
    </div>
  );
};

export default Card;
