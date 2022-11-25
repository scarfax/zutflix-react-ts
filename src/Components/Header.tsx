import React from 'react'
import "../styles/App.css"


const Header = () => {
  return (
    <div className="header">
    <img className="header__logo" src="././images/logo.png" alt="Zutflix" />
    <nav>
        <ul className="header__menu">
            <li><a className="header__item" href="#inicio">Início</a></li>
            <li><a className="header__item" href="#series">Séries</a></li>
            <li><a className="header__item" href="#filmes">Filmes</a></li>
            <li><a className="header__item" href="#bombando">Bombando</a></li>
            <li><a className="header__item"  href="#minhalista">Minha Lista</a></li>

        </ul>
    </nav>
</div>
  )
}

export default Header