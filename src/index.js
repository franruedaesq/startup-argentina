import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router, Route } from "react-router-dom";

// IMPORT PAGES 
import Home from './pages/Home/Home'


ReactDOM.render(
  <Router>
    <Route exact path="/"  component={Home} />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
