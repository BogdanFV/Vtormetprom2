const Header = () => {
  return (
    <header id="header">
      <div id="droppable-menu">
          <ul>
              <li>
                  <a>Главная</a>
              </li>
              <li>
                  <a>Перевозка промышленных грузов</a>
              </li>
              <li>
                  <a>Демонтаж подвижного состава</a>
              </li>
              <li>
                  <a>Контакты</a>
              </li>
          </ul>
      </div>
      <div className="header-inner">
          <div id="header-menu__button">
              <div className="menu-bar bar1"></div>
              <div className="menu-bar bar2"></div>
              <div className="menu-bar bar3"></div>
          </div>
          <a className="header-logo" href="/">
              <img className="header-logo__img" src="/img/favicon/ZPM.png"></img>
              <div className="header-logo-text">Вторметпром</div>
          </a>
          <div className="main-menu">
              <ul>
                  <li>
                      <a>
                          Главная
                      </a>
                  </li>
                  <li>
                      <a>Перевозка грузов</a>
                  </li>
                  <li>
                      <a>Демонтаж состава</a>
                  </li>
                  <li>
                      <a>Контакты</a>
                  </li>
              </ul>
          </div>
          <button id="enter" onclick="document.location='/enter-page.html'">
              Войти
          </button>
      </div>
    </header>
  );
}

export default Header;
