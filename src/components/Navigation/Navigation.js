import { NavLink, Route } from 'react-router-dom';
import logoutPic from '../../images/logout.svg'

function Navigation({ loggedIn, onLoginClick, onLogOut }) {
  return (
    <>
      <Route exact path='/'>
        <NavLink to='/' className='header__link' activeClassName='header__link-active'>Главная</NavLink>
        {loggedIn ?
          <>
            <NavLink to='/saved-news' className='header__link' activeClassName='header__link-active'>Сохраненные статьи</NavLink>
            <button className='header__button' onClick={onLogOut}>Выйти</button>
          </>
          :
          <button className='header__button' onClick={onLoginClick}>Авторизоваться</button>
        }
      </Route>

      <Route exact path='/saved-news'>
        <NavLink exact to='/' className='header__link header-logged__link' activeClassName='header-logged__link-active'>Главная</NavLink>
        <NavLink exact to='/saved-news' className='header__link header-logged__link' activeClassName='header-logged__link-active'>Сохраненные статьи</NavLink>
        <button className='header__button header-logged__button'>Грета<img src={logoutPic} alt=''></img></button>
      </Route>
    </>

  );
}

export default Navigation;