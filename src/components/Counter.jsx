import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

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

Counter.propTypes = {

  cantidadIntentos: PropTypes.number.isRequired,

};

export default Counter;
