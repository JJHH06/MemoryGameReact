// Colocacion de utilidades
import './style.scss';
import 'bootstrap/dist/js/bootstrap';
import React from 'react';
import ReactDom from 'react-dom';
import Game from './Game';

// esto si se debe de deshabilitar, sino truena
ReactDom.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>,
  document.getElementById('root'),
);
