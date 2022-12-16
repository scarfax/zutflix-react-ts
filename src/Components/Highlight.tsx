import React, {useContext}  from 'react';
import { MovieContext } from '../contexts/MovieContext';


const Highlight = () => {


  const { title, abstract, logo, trailer, background  } = useContext(MovieContext);

  return (
    <section
      className="highlight"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url('${background}')`,
      }}>
      <div className="highlight__vertical">
        <div className="highlight__horizontal">
          <div className='highlight__title'>
            <img className='highlight__zutflix-ico' src="./images/zut-ico.png" alt="ícone do Zutflix" />
            <h3 className="highlight__classification">F I L M E</h3>
          </div>
          <img className="highlight__image"
            src={logo}
            alt={title} />
          <p className="highlight__text">{abstract}</p>
          <div className="highlight__buttons">
        <a href={trailer} className="highlight__watchbutton">► Assistir</a>
        <a href="/" className="highlight__mylistbutton">+ Minha Lista</a>
        </div>
        </div>

      </div>
    </section>
  );
};

export default Highlight;
