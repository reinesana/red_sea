import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import AppRouter from './router/AppRouter';
import reportWebVitals from './reportWebVitals';
import "./styles/style.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter />
    {/* <App /> */}
  </React.StrictMode>
);

const pool = require("backend/database.js")

//ROUTES//

//create a login_system


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
