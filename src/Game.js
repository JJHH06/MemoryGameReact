import React, {useEffect, useState} from 'react';
import './style.scss';
import Card from './components/Card';
//importación de imagenes
import img1 from './assets/meme1.jpg'
import img2 from './assets/meme2.jpg'
import img3 from './assets/meme3.jpg'
import img4 from './assets/meme4.jpg'
import img5 from './assets/meme5.jpg'
import img6 from './assets/meme6.jpg'
import img7 from './assets/meme7.jpg'
import img8 from './assets/meme8.png'

//creacion de objetos de memoria
const cartas = [
    {
        src: img1,
        id: 'meme1'
    },
    {
        src: img2,
        id: 'meme2'
    },
    {
        src: img3,
        id: 'meme3'
    },
    {
        src: img4,
        id: 'meme4'
    },
    {
        src: img5,
        id: 'meme5'
    },
    {
        src: img6,
        id: 'meme6'
    },
    {
        src: img7,
        id: 'meme7'
    },
    {
        src: img8,
        id: 'meme8'
    },
    {
        src: img1,
        id: 'meme1'
    },
    {
        src: img2,
        id: 'meme2'
    },
    {
        src: img3,
        id: 'meme3'
    },
    {
        src: img4,
        id: 'meme4'
    },
    {
        src: img5,
        id: 'meme5'
    },
    {
        src: img6,
        id: 'meme6'
    },
    {
        src: img7,
        id: 'meme7'
    },
    {
        src: img8,
        id: 'meme8'
    },
]

function Game(){
    const [cards, setCards]  = useState([]);
    
    useEffect(() => {
        setCards(cartas);
    },[])

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