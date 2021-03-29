import React, {useState} from 'react';
import './style.scss';
import Card from './components/Card';


function Game(){
    const [cards, setCards]  = useState([1,2,3,4]);
    return (
        <div className='game'>
            {/* <h1 className = 'title'>hola xd</h1> */}
            <div className='game-container'>
                {
                    cards.map((card) =>(
                        <Card />
                    ))
                }
            </div>
        </div>
    );
}

export default Game;