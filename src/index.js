import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
// import 'bootstrap/dist/css/bootstrap.min.css';
import Emoloco from './components/Emoloco'
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <Emoloco />
    </Router>
    , document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

