import menuMobileWhite from '../../images/menu-white-mobile.svg';
import menuMobileDark from '../../images/menu-dark-mobile.svg';
import closeMenuMobileWhite from '../../images/close-white-mobile.svg';
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header({ mobileMenuIsClosed, onMenuClick, loggedIn, onLoginClick, onLogOut }) {

  const path = useLocation().pathname;

  function getMenuIcon() {
    if (!mobileMenuIsClosed) return closeMenuMobileWhite;
    if (path === '/' && mobileMenuIsClosed) return menuMobileWhite;
    if (path === '/saved-news' && mobileMenuIsClosed) return menuMobileDark;
  }

  function getLogoClassname() {
    if (path === '/saved-news' && mobileMenuIsClosed) return 'header__logo header-logged__logo';
    else return 'header__logo';
  }

  return (
    <>
      <header className={`${path === '/' ? 'header ' : 'header header-logged'}`}>
        <Link to='/' className={getLogoClassname()}>News Explorer</Link>
        <div className='header__navbar'>
        <Navigation loggedIn={loggedIn} onLoginClick={onLoginClick} onLogOut={onLogOut}></Navigation>
        </div>
        <img className='header__menu-icon' onClick={onMenuClick}
          src={getMenuIcon()} alt='Здесь должна быть иконка меню'/>
        <nav className={`${mobileMenuIsClosed ? 'navbar-mobile' : 'navbar-mobile-opened'}`}>
          <div className='navbar-mobile__container'>
            <Navigation loggedIn={loggedIn} onLoginClick={onLoginClick}></Navigation>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header;