/* Imports */
import React from 'react';
import ReactDOM from 'react-dom/client';

// add Bootstrap to React
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

// Router
import { BrowserRouter as Router } from 'react-router-dom';

// add Axios to React
import axios from "axios";

// react-toastify
import "react-toastify/dist/ReactToastify.css";

// App
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Redux store
// import { Provider } from 'react-redux'; // מאפשר הגישה לחנות העוטף את האפליקציה

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


// Root Render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
