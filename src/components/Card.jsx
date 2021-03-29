import React, { useEffect, useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import PropTypes from 'prop-types';
import fondo from '../assets/background.png';

const Card = ({
  imagen, casilla, id, cardIsFlippable, winnedCards, getCurrentCards,
}) => {
  const [isRevealed, setRevealed] = useState(false);
  const [isAllowedToClick, setIsAllowedToCLick] = useState(true);

  useEffect(() => {
    if (isAllowedToClick) {
      if (winnedCards.includes(casilla)) {
        setIsAllowedToCLick(false);
        // progra defensiva en caso de que le den muy rapido a otra carta
      } else if (getCurrentCards(casilla)) {
        setTimeout(() => setRevealed(false), 1100);
      }
    }
  }, [winnedCards]);

  const clickListener = () => {
    // esto va a hacer que se revierta siempre el boolean de estado
    if (isAllowedToClick) {
      if (cardIsFlippable(id, casilla)) {
        setRevealed(!isRevealed);
      }
    }
  };
  //    Se debe poder hacer click en una imagen, por lo que no seria valido
  //    el no-noninteractive-element-interactions
  return (
    <div className="card">
      <ReactCardFlip isFlipped={isRevealed}>
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
        <img className="memory-image" src={fondo} alt="fondo" onClick={clickListener} onKeyDown={clickListener} />
        <img className="memory-image" src={imagen} alt="imagen" />
      </ReactCardFlip>
    </div>
  );
};

Card.propTypes = {

  imagen: PropTypes.string.isRequired,
  casilla: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  winnedCards: PropTypes.arrayOf(PropTypes.number).isRequired,
  getCurrentCards: PropTypes.bool.isRequired,
  cardIsFlippable: PropTypes.bool.isRequired,

};

export default Card;
