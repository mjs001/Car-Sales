import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import "bulma/css/bulma.css";
import "./styles.scss";
import { createStore } from "redux";
import { CarStateReducer } from "./reducers/CarStateReducer";
const store = createStore(CarStateReducer);
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
