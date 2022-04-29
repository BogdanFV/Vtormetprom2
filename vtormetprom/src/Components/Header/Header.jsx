import s from './Header.module.css'
import {NavLink} from "react-router-dom"
import React from 'react';



const Header = () => {

    let menuButton = React.createRef();

    let showTheMenu = () => {
    }

    return (
        <header id="header" className={s.header}>
            <div  className={s.droppableMenu}  >
                <ul>
                    <li>
                        <a>
                            <span>Главная</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span>Перевозка промышленных грузов</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span>Демонтаж подвижного состава</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span>Контакты</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span>О нас</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className={s.headerInner}>
                <div id="menu_button" className={s.headerMenuButton} onClick={showTheMenu}>
                    <div className={`${s.menuBar} ${s.bar1}`}></div>
                    <div className={`${s.menuBar} ${s.bar2}`}></div>
                    <div className={`${s.menuBar} ${s.bar3}`}></div>
                </div>
                <NavLink className={s.headerLogo} to="/">
                    <img className={s.headerLogoImg} src="/img/favicon/ZPM.png"></img>
                    <div className={s.headerLogoText}>Вторметпром</div>
                </NavLink>
                <div className={s.mainMenu}>
                    <ul>
                        <li>
                            <NavLink  className={({isActive}) => isActive ? s.active : ''} to="/" > Главная</NavLink>
                        </li>
                        <li>
                            <NavLink   className={({isActive}) => isActive ? s.active : ''} to="/shipping" >Перевозка грузов</NavLink>
                        </li>
                        <li>
                            <NavLink   className={({isActive}) => isActive ? s.active : ''} to="/dismantling" >Демонтаж состава</NavLink>
                        </li>
                        <li>
                            <NavLink   className={({isActive}) => isActive ? s.active : ''} to="/contacts" >Контакты</NavLink>
                        </li>
                        <li>
                            <NavLink   className={({isActive}) => isActive ? s.active : ''} to="/about" >О нас</NavLink>
                        </li>
                    </ul>
                </div>
                    <NavLink  className={({isActive}) => isActive ? s.active : ''} to="/enter">
                        <button id="enter" className={s.enter}>
                            Войти
                        </button>
                    </NavLink>
            </div>
        </header>
    );
}

export default Header;
