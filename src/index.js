import React from 'react';
import ReactDOM from 'react-dom';
 import './errorReporting';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import * as Sentry from '@sentry/browser';


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_KEY,
    release: version,
    environment: process.env.NODE_ENV,
});

Sentry.captureException(new Error("This is my fake error message"));

serviceWorker.unregister();
ReactDOM.render(<App />, document.getElementById('root'));
