import React from 'react';
import git from '../../images/github.svg';
import fb from '../../images/fb.svg';

function Footer() {
  return (
    <footer className='footer'>
      <p className="footer__copyright">&copy; 2020 Supersite, Powered by News API</p>
      <div className="footer__wrapper">
        <div className='footer__textlinks'>
          <a className='footer__link footer__link_type_text' href='#'>Главная</a>
          <a className='footer__link footer__link_type_text' href='https://praktikum.yandex.ru/'>Яндекс.Практикум</a>
        </div>
        <div className='footer__iconlinks'>
          <a className='footer__link' href='https://github.com/a-d-kozhin'>
            <img className='footer__link_type_icon' src={git} />
          </a>
          <a className='footer__link' href='https://facebook.com'>
            <img className='footer__link_type_icon' src={fb} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;