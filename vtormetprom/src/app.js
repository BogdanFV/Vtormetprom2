import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import MainPage from './Components/MainPage/MainPage.jsx';
import EnterPage from './Components/EnterPage/EnterPage.jsx';
import Shippings from './Components/Shippings/Shippings.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';



const App = (props) => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' 
                    element={<Shippings 
                        shippings={props.appState.shippings} /> }/>
                <Route path='/enter' element={<EnterPage />} />
                <Route path='/about' element={<MainPage />} />
            </Routes>

            {/* <Shipping number= "№222615" price="9 772.20 ₽" mass="2 T" 
                type="Сборный груз" distance="93 км" time ="1 ч 33 мин" 
                city1="Калининград" region1="Калининградская область" 
                city2="Вологда" region2="Вологодская область" date="13 апр."/> */}
            <Footer />
        </BrowserRouter>

    );
}

export default App;
