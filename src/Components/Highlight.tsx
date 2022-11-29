import React from 'react';

const Highlight = () => {
  return (
    <section style={{ 
      backgroundImage: `url('https://www.themoviedb.org/t/p/original/b5V5rmFzFEbGiQlaKKyoj3UlSDw.jpg')`}} id="inicio" className="highlight">
      <div className="highlight__container">
         <div className='highlight__title'>
          <img className='highlight__zutflix-ico' src="./images/zut-ico.png" alt="ícone do Zutflix" />
           <h3 className="highlight__classification">F I L M E</h3>
        </div>
        <img
          className="highlight__image"
          src='https://images.fanart.tv/fanart/invasion-of-the-body-snatchers-59340431b8be1.png'
          alt="The Golden Glove"
        />
        <p className="highlight__text">Grupo de jovens decide passar o fim de semana na casa de campo do coreógrafo Lou Lou. Quando chegam, descobrem o corpo do caseiro mutilado por cães liderados por um terrível cão monstro, daí tem início um longa noite de horror!
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
