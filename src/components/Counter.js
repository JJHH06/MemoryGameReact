import React, {useEffect, useState} from 'react'
import ReactCardFlip from 'react-card-flip';
import fondo from '../assets/background.png';


const Counter = ({cantidadIntentos}) =>{
    const [playerTries, setPlayerTries] = useState(0);
    useEffect(()=>{
        setPlayerTries(cantidadIntentos)
    },[cantidadIntentos])

    return (
        <div className = 'counter-container'>
            <h4>
            Intentos realizados: {playerTries}
            </h4>
        </div>
    )
}

export default Counter