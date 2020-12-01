import React from 'react';
import { NavLink, Link, Route, useRouteMatch } from 'react-router-dom';

function Navigation({ loggedIn }) {
  const { path, url } = useRouteMatch();
  return (

    <>
      <Route exact path='/'>
          <NavLink to='/' className='header__link' activeClassName='header__link-active'>Главная</NavLink>
          <NavLink to='/saved-news' className='header__link' activeClassName='header__link-active'>Сохраненные статьи</NavLink>
          <button className='header__button'>Авторизоваться</button>
      </Route>

      <Route exact path='/saved-news'>
          <NavLink exact to='/' className='header__link header-logged__link' activeClassName='header-logged__link-active'>Главная</NavLink>
          <NavLink exact to='/saved-news' className='header__link header-logged__link' activeClassName='header-logged__link-active'>Сохраненные статьи</NavLink>
          <button className='header__button header-logged__button'>Грета</button>
      </Route>
    </>

  );
}

export default Navigation;