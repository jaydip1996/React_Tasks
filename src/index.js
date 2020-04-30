import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import "./Style/Style.css";
import { App } from "./App";
import { tasksReducer } from "./Task/reducers";

let store = createStore(
  combineReducers({
    tasks: tasksReducer,
  })
);

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById("root")
);  