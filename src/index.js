//Colocacion de utilidades
import "./style.scss"
import "bootstrap/dist/js/bootstrap"
import React from 'react';
import ReactDom from 'react-dom';
import Game from './Game.js';

ReactDom.render(
    <React.StrictMode>
        <Game/>
    </React.StrictMode>,
    document.getElementById("root")
);