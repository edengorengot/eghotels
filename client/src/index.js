import React from 'react';
import ReactDOM from 'react-dom/client';


// add Axios to React
import axios from "axios";

// add Bootstrap to React
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";


// react-toastify
import "react-toastify/dist/ReactToastify.css";

// App
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// Redux store


// axios config
axios.defaults.baseURL = "http://localhost:3007/";

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers["token"] = token;
  };
  // data format
  config.headers["Content-Type"] = "application/json";
  return config;
});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
