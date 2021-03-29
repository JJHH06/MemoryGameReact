import React, { useEffect, useState } from 'react';

const Counter = ({ cantidadIntentos }) => {
  const [playerTries, setPlayerTries] = useState(0);
  useEffect(() => {
    setPlayerTries(cantidadIntentos);
  }, [cantidadIntentos]);

  return (
    <div className="counter-container">
      <h4>
        Intentos realizados:&emsp;
        {playerTries}
      </h4>
    </div>
  );
};

export default Counter;
