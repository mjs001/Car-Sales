import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import "bulma/css/bulma.css";
import "./styles.scss";
import { createStore } from "redux";
import { CarStateReducer } from "./reducers/CarStateReducer";
//1. create store it takes in the reducer as a argument
//a. setting up store so that it deals with state
const store = createStore(CarStateReducer);
const rootElement = document.getElementById("root");
ReactDOM.render(
  //2. wrap the provider around app
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
