import React from 'react';
import git from '../../images/github\ \(1\).svg';
import fb from '../../images/fb\ \(1\).svg';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__textlinks'>
        <a className='footer__link footer__link_type_text' href='#'>Главная</a>
        <a className='footer__link footer__link_type_text' href='https://praktikum.yandex.ru/'>Яндекс.Практикум</a>
      </div>
      <div className='footer__iconlinks'>
        <a className='footer__linkfooter__link_type_icon' href='https://github.com/a-d-kozhin'>
          <img className='footer__link_type_icon' src={git} />
        </a>
        <a className='footer__link' href='https://facebook.com'>
          <img className='footer__link_type_icon' src={fb} />
        </a>
      </div>
      <p className="footer__copyright">&copy; 2020. Саша Кожин</p>
    </footer>
  );
}

export default Footer;