import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import LeftPanel from "./LeftPanel";
import ContentPanel from "./ContentPanel";
import KeyboardHelper from "./KeyboardHelper";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import store from "./reducers";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App>
        <LeftPanel />
        <ContentPanel />
        <KeyboardHelper />
      </App>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
