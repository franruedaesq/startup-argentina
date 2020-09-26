import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router, Route } from "react-router-dom";

// IMPORT PAGES 
import Home from './pages/Home/Home'
import Agregar from './pages/Agregar/Agregar'


ReactDOM.render(
  <Router>
    <Route exact path="/"  component={Home} />
    <Route exact path="/agregar"  component={Agregar} />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
