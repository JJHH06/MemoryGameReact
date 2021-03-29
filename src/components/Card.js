import React, {useState} from 'react'
import ReactCardFlip from 'react-card-flip';
import fondo from '../assets/background.png';


const Card = ({imagen, casilla, id, cardIsFlippable}) =>{
    const [isRevealed, setRevealed] = useState(false);

    const clickListener = e =>{
        //esto va a hacer que se revierta siempre el boolean de estado
        if(cardIsFlippable(id, casilla)){
            setRevealed(!isRevealed)
        }
    }

    return (
        <div className = 'card'>
            <ReactCardFlip isFlipped = {isRevealed}>
                <img className='memory-image' src = {fondo} alt = 'fondo' onClick ={clickListener}/>
                <img className='memory-image' src = {imagen} alt = 'imagen'onClick ={clickListener}/>
            </ReactCardFlip>
        </div>
    )
}

export default Card