import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import logoutDarkPic from '../../images/logout-dark.svg'
import logoutWhitePic from '../../images/logout-white.svg'

function Navigation({ loggedIn, onLoginClick, onLogOut }) {
  const currentUser = React.useContext(CurrentUserContext);
  return (
    <>
      <Route exact path='/'>
        <NavLink to='/' className='header__link' activeClassName='header__link-active'>Главная</NavLink>
        {loggedIn ?
          <>
            <NavLink to='/saved-news' className='header__link' activeClassName='header__link-active'>Сохраненные статьи</NavLink>
            <button className='header__button header-not-logged__button' onClick={onLogOut}>{currentUser.name}<img src={logoutWhitePic} alt=''/></button>
          </>
          :
          <button className='header__button' onClick={onLoginClick}>Авторизоваться</button>
        }
      </Route>

      <Route exact path='/saved-news'>
        <NavLink exact to='/' className='header__link header-logged__link' activeClassName='header-logged__link-active'>Главная</NavLink>
        <NavLink exact to='/saved-news' className='header__link header-logged__link' activeClassName='header-logged__link-active'>Сохраненные статьи</NavLink>
        <button className='header__button header-logged__button' onClick={onLogOut}>{currentUser.name}<img src={logoutDarkPic} alt=''/></button>
      </Route>
    </>

  );
}

export default Navigation;