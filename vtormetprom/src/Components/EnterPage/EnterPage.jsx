import './EnterPage.css'

const EnterPage = () => {
    return (
        <div className="content">
            <div className="enter-area">
                <div className="enter-block">
                    <div className="login-block">
                        <div className="login-text">Логин:</div>
                        <input className="login__input" type="login"></input>
                    </div>
                    <div className="login-block">
                        <div className="login-text">Пароль:</div>
                        <input className="login__input" type="password"></input>
                    </div>
                    <button className="enter__button">
                        Войти
                    </button>
                </div>
            </div>
            <footer className="footer">
                <div className="copyright">©2022 Все права защищены </div>
                <div className="contacts">
                    <div className="mail"><a href="mailto:info@vtormetprom.pro">info@vtormetprom.pro</a></div>
                    <div className="phone">+7 915 321-23-69</div>
                </div>
            </footer>
        </div>
    );
}

export default EnterPage;
