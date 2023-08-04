import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';


const defaultState = {
  cash: 10,
}


const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CASH":
      return{...state, cash: state.cash + action.payload}

    case "GET_CASH":
      return{...state, cash: state.cash - action.payload}

    default:
      return state
  }
}

const store = createStore(reducer)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);
