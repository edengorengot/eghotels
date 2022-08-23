/* Imports */
import React from 'react';
import ReactDOM from 'react-dom/client';
// global redux
import { Provider } from 'react-redux';

// Router
import { BrowserRouter as Router } from 'react-router-dom';

// Redux store
import store from './store/index.redux';

// add Axios to React
import axios from "axios";

// add Bootstrap to React
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

// react-toastify
import "react-toastify/dist/ReactToastify.css";

// App
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

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
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
