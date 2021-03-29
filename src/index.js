// Colocacion de utilidades
import './style.scss';
import 'bootstrap/dist/js/bootstrap';
import React from 'react';
import ReactDom from 'react-dom';
import Game from './Game';

// esto si se debe de deshabilitar, sino truena
ReactDom.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <React.StrictMode>
    <Game />
  </React.StrictMode>,
  document.getElementById('root'),
);
