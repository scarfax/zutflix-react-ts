import React from 'react';

const Highlight = () => {
  return (
    <section id="inicio" className="highlight">
      <div className="highlight__container">
        <h3 className="highlight__classification">F I L M E</h3>
        <img
          className="highlight__image"
          src="./images/highlight/movie-logo.png"
          alt="The Golden Glove"
        />
        <p className="highlight__text">
          No bar Luva Dourada, ponto de encontro de personagens repugnantes,
          caça o serial killer Fritz Honka. Quando seus crimes começam a sair
          nos jornais, ele fica cada vez mais próximo de ser descoberto.
        </p>
        <div className="highlight__buttons">
        <a href="https://www.youtube.com/watch?v=4YYcg6VScSY" className="highlight__watchbutton">► Assistir</a>
        <a href="https://www.youtube.com/watch?v=4YYcg6VScSY" className="highlight__mylistbutton">+ Minha Lista</a>
        </div>
      </div>
    </section>
  );
};

export default Highlight;
