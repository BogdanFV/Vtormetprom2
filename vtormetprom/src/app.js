import React from 'react';
import './index.css';
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import MainPage from './Components/MainPage/MainPage.jsx';
import EnterPage from './Components/EnterPage/EnterPage.jsx';
import ShippingsPage from './Components/ShippingsPage/ShippingsPage.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';



const App = (props) => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/'
                    element={<ShippingsPage
                        shippings={props.appState.shippings}
                        shippingsNewPage={props.shippingsNewPage}
                        currentDisplay={props.currentDisplay} 
                        />} />
                <Route path='/enter' element={<EnterPage />} />
                <Route path='/about' element={<MainPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>

    );
}

export default App;
