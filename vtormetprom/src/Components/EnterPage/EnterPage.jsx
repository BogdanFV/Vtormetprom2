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
        </div>
    );
}

export default EnterPage;
