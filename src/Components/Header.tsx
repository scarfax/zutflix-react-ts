import React from 'react'
import "../styles/App.css"


const Header = ({ black } : {black: boolean } ) => {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header__container">
        <a href="/">
          <img
            src="././images/logo.png"
            alt="Netflix"
          />
        </a>
        <nav>
        <ul className="header__menu">
            <li><a className="header__item" href="#inicio">Início</a></li>
            <li><a className="header__item" href="#bombando">Bombando</a></li>
            <li><a className="header__item" href="#ficcaoCientifica">Ficção científica</a></li>
            <li><a className="header__item" href="#terror">Terror</a></li>
            <li><a className="header__item" href="#policial">Policial</a></li>
            <li><a className="header__item"  href="#minhalista">Minha Lista</a></li>

        </ul>
    </nav>
      </div>

      <div className="header__user">
        <a href="/">
          <img
            src="https://i.pinimg.com/564x/c0/8e/6c/c08e6c9595e03202a46a95f66578799f.jpg"
            alt="Usuário"
          />
        </a>
      </div>
    </header>
  );
};

  

export default Header