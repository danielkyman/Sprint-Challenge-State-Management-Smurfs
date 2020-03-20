import React from "react";
import "./App.css";

import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";

import { createStore, applyMiddleware } from "redux";
import { smirfReducer as reducer } from "../reducers/smirfReducer";
import { Provider } from "react-redux";

import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>SMURFS</h1>
        <SmurfList />
        <SmurfForm />
      </div>
    </Provider>
  );
}

export default App;
