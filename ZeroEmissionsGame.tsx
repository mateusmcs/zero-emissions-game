import React, { useState } from 'react';

const ZeroEmissionsGame = () => {
  const [score, setScore] = useState(0);

  const handleCorrectAnswer = () => {
    setScore(score + 10);
  };

  return (
    <div>
      <h1>Zero Emissions – Navio André Rebouças</h1>
      <p>Pontuação: {score}</p>
      <button onClick={handleCorrectAnswer}>Acertou!</button>
    </div>
  );
};

export default ZeroEmissionsGame;
