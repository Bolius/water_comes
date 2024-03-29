import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as Sentry from "@sentry/browser";
import packageInfo from '../package.json';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_KEY,
  release: packageInfo.version,
  environment: process.env.NODE_ENV
});
serviceWorker.unregister();
ReactDOM.render(<App />, document.getElementById("root"));
