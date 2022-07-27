import React from 'react';
import ReactDOM from 'react-dom/client';


// add Axios to React
// import axios from "axios";

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




// // axios config
// // axios will add this url to each request if the url is not full
// axios.defaults.baseURL = "http://localhost:3007/api";

// // axios will add this config to each request
// axios.interceptors.request.use((config) => {
//   // get token from local storage
//   const token = localStorage.getItem("tokenKey");
//   // chack if there is token in local storage
//   if (token) {
//     // add token to headers for secure routes
//     config.headers["x-user-token"] = token;
//   }

//   // config.headers["x-user-token"] =
//   // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQyZGE2YTMxYjdmMmZiNmViODQ4ZWYiLCJiaXoiOnRydWUsImlhdCI6MTY0ODU0ODYyN30.8vA-CYPBTp6R_BlZzUumXNJO_fgybFaU6y5I6a7enwc";

//   // data format
//   config.headers["Content-Type"] = "application/json";
//   return config;
// });






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
