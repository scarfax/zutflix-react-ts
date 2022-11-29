import React from 'react'

const Footer = () => {
    return (
        <section className='footer'>
           
           <div className='footer__container'>
                    <ul className="footer__icons">
                        <li><img src="./images/icos/facebook-icon.svg" alt="Facebook" /></li>
                        <li><img src="./images/icos/instagram-icon.svg" alt="Instagram" /></li>
                        <li><img src="./images/icos/twitter-icon.svg" alt="Twitter" /></li>
                        <li><img src="./images/icos/youtube-icon.svg" alt="Youtube" /></li>
                    </ul>
                </div>
                <div>
                    <ul className="footer__texts">

                        <li className="footer__text">idioma e legendas</li>
                        <li className="footer__text">Centro de ajuda</li>
                        <li className="footer__text">Cartão Pré-pago</li>
                        <li className="footer__text">Avisos Legais</li>
                        <li className="footer__text">Imprensa</li>
                        <li className="footer__text">Privacidade</li>
                    </ul>

                </div>
            
        </section>
    )
}

export default Footer





