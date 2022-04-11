import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './index-base'
import Header from './Components/Header'
import Footer from './Components/Footer';
import MainPage from './Components/MainPage';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <MainPage />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

