import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app' 
import state from './redux/state';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App appState={state}/>
  </React.StrictMode>
);


