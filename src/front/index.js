import React from 'react'
import ReactDOM from "react-dom/client";
import './index.css'
import App from './App'
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux'; //Bindings from redux and React
import store from './redux/store/store';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>  
  </BrowserRouter>
  </Provider>
)
