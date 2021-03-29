import React, {useEffect, useState} from 'react';
import './style.scss';
import Card from './components/Card';
import Counter from './components/Counter'
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
//no es necesaria una key, ya que la posicion nos ayudara
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

//funcion de desordenamiento
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

//desordena las cartas
shuffle(cartas);


function Game(){
    //el mapa de las cartas
    const [cards, setCards]  = useState([]);

    //la primera y la segunda carta seleccionadas
    const [carta1, setCarta1] = useState({});
    const [carta2, setCarta2] = useState({});
    const [puntaje, setPuntaje] = useState(0);
    const [winnedCards, setWinnedCards] = useState([]);
    const [actualCards, setActualCards] = useState([]);
    const [playerAttemps, setPlayerAttemps] = useState(0);

    const cardIsFlippable = (id, casilla) =>{
        //primero se ve si la primera y si esta existe
        if(!(Object.keys(carta1).length === 0 && carta1.constructor === Object)&&((casilla === carta1.casilla && id === carta1.id))){
            
            return false;
        }
        else if(Object.keys(carta1).length === 0 && carta1.constructor === Object){
            setCarta1({id,casilla});
        }
        else if(Object.keys(carta2).length === 0 && carta2.constructor === Object){
            setCarta2({id,casilla});
        }
        return true;
    }

    //va a colocar las cartas recien ganadas
    const addWinnedCards= () =>{
        setWinnedCards([carta1.casilla, carta2.casilla]);
    }

    //hace un set de algo vacio, esto le da un trigger a las funciones basadas en esta variable
    const addNoWinnerCard = () =>{
        setWinnedCards([]);
    }

    // en realidad es un boolean que retorna si la carta es de las seleccionadas actualmente
    const getCurrentCards = (indice) => {
        return actualCards.includes(indice);
    }

    const resetData = () =>{
        setCarta1({});
        setCarta2({});
    }

    const checkMatch = () =>{
        if(!(Object.keys(carta2).length === 0 && carta2.constructor === Object)){//si el cambio no fue porque se seteo a vacio
            if(carta2.id ===carta1.id){//aqui significa un nuevo punto
                addWinnedCards();
                resetData();
                setPuntaje(puntaje+1);//se agrega al puntaje
                setPlayerAttemps(playerAttemps +1);
            }
            else{//aqui significa que no adivino
                addNoWinnerCard();
                resetData();
                setPlayerAttemps(playerAttemps +1);
            }
        }
        
    }

    

    //esto es para que se haga una sola vez
    useEffect(() => {
        setCards(cartas);
    },[])
    

    //cuando haya una segunda carta seleccionada
    useEffect(()=>{
        setActualCards([carta1.casilla, carta2.casilla]);
        checkMatch();
    },[carta2])

    useEffect(()=>{
        if(puntaje ==8){
            alert("🎉¡Felicidades!🎉\n\nJUEGO COMPLETADO")
        }
        
    },[puntaje])
    //alert('El pepe')
    return (
        <div className='game'>
            <div className='game-container'>
                {
                    cards.map((card,index) =>(
                        <Card id={card.id} casilla={index} imagen = {card.src} cardIsFlippable = {cardIsFlippable} winnedCards={winnedCards} getCurrentCards={getCurrentCards}/>
                    ))
                }
            </div>
            <Counter cantidadIntentos={playerAttemps}></Counter>
        </div>
        
    );
}

export default Game;