import { NavLink, Route, useRouteMatch } from 'react-router-dom';
import logout from '../../images/logout.svg'

function Navigation({ loggedIn, onLoginClick }) {
  return (
    <>
      <Route exact path='/'>
        <NavLink to='/' className='header__link' activeClassName='header__link-active'>Главная</NavLink>
        <NavLink to='/saved-news' className='header__link' activeClassName='header__link-active'>Сохраненные статьи</NavLink>
        <button className='header__button' onClick={onLoginClick}>Авторизоваться</button>
      </Route>

      <Route exact path='/saved-news'>
        <NavLink exact to='/' className='header__link header-logged__link' activeClassName='header-logged__link-active'>Главная</NavLink>
        <NavLink exact to='/saved-news' className='header__link header-logged__link' activeClassName='header-logged__link-active'>Сохраненные статьи</NavLink>
        <button className='header__button header-logged__button'>Грета<img src={logout}></img></button>
      </Route>
    </>

  );
}

export default Navigation;