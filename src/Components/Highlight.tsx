import React from 'react';

const Highlight = () => {
  return (
    <section
      className="highlight"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url('https://www.themoviedb.org/t/p/original/mYGxfMf1Nc4xmkRPawvdI3mg8l9.jpg')`,
      }}>
      <div className="highlight__vertical">
        <div className="highlight__horizontal">
          <div className='highlight__title'>
            <img className='highlight__zutflix-ico' src="./images/zut-ico.png" alt="ícone do Zutflix" />
            <h3 className="highlight__classification">F I L M E</h3>
          </div>
          <img className="highlight__image"
            src='https://images.fanart.tv/fanart/savage-streets-519e9848811c1.png'
            alt="The Golden Glove" />
          <p className="highlight__text">Uma adolescente procura se vingar de um grupo de rebeldes que violentaram sua irmã deficiente e mataram seu melhor amigo.</p>
          <div className="highlight__buttons">
        <a href="https://www.youtube.com/watch?v=4YYcg6VScSY" className="highlight__watchbutton">► Assistir</a>
        <a href="https://www.youtube.com/watch?v=4YYcg6VScSY" className="highlight__mylistbutton">+ Minha Lista</a>
        </div>
        </div>

      </div>
    </section>
  );
};

export default Highlight;
