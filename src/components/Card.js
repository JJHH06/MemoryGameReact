import React, {useState} from 'react'
import ReactCardFlip from 'react-card-flip';
import fondo from '../assets/background.png';


const Card = ({imagen, casilla, id}) =>{
    const [isRevealed, setRevealed] = useState(false);
    return (
        <div className = 'card'>
            <h2>Carta</h2>
        </div>
    )
}

export default Card