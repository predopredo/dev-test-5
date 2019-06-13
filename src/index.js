// POLYFILLS
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
// NPM MODULES
import React from 'react';
import ReactDOM from 'react-dom';
// STYLES
import 'normalize.css';
import './index.css';
// COMPONENTS
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
