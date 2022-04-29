import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app' 


const root = ReactDOM.createRoot(document.getElementById("root"));


let rerenderEntireTree = (state, currentDisplay, shippingsNewPage) => {
  root.render(
    <React.StrictMode>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"
      />
      <App appState={state} currentDisplay={currentDisplay} shippingsNewPage={shippingsNewPage}/>
    </React.StrictMode>)
}; 

export default rerenderEntireTree;

