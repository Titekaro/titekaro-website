import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import axios from "axios";
import {HashRouter} from "react-router-dom";

axios.defaults.baseURL = 'https://titekaro-website-default-rtdb.europe-west1.firebasedatabase.app';

ReactDOM.render(
  <React.StrictMode>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <App />
      </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
