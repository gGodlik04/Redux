import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import './index.css';
// import {store} from './vanila-redux/store'
// import {store} from './toolkit-redux/store'
import { BrowserRouter } from 'react-router-dom';
import { storeToolkitRedux } from './toolkit-redux/store';
import { storeVanillaRedux } from './vanila-redux/store';
import { storeSliceRedux } from './slice-redux/store';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={storeSliceRedux}> {/* add store from import */}
      <App />
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);
