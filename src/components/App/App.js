import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import LoginPopup from '../LoginPopup/LoginPopup';
import InfoPopup from '../InfoPopup/InfoPopup';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import SearchResults from '../SearchResults/SearchResults';
import About from '../About/About';
import SearchForm from '../SearchForm/SearchForm';
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import RegisterPopup from '../RegisterPopup/RegisterPopup';
import Preloader from '../Preloader/Preloader';
import * as MainApi from '../../utils/MainApi';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [mobileMenuIsClosed, setMobileMenu] = useState(true);
  const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setRegisterPopupOpen] = useState(false);
  const [isInfoPopupOpen, setInfoPopupOpen] = useState(false);
  const [infoMessage, setInfoMessage] = useState('');
  const [RegisterErrorMessage, setRegisterErrorMessage] = useState('');

  function handleMobileMenuClick() {
    setMobileMenu(!mobileMenuIsClosed);
  }

  function handleLoginClick() {
    setLoginPopupOpen(!isLoginPopupOpen);
  }

  function closeAllPopups() {
    if (document.querySelector('.popup_opened')) {
      document.querySelector('.popup_opened').classList.remove('popup_opened');
      setLoginPopupOpen(false);
      setRegisterPopupOpen(false);
      setInfoMessage('');
    }
  }

  function redirectToRegister() {
    closeAllPopups();
    setRegisterPopupOpen(!isRegisterPopupOpen);
  }

  function redirectToLogin() {
    closeAllPopups();
    setLoginPopupOpen(!isLoginPopupOpen);
  }

  function onSubmit(evt) {
    evt.preventDefault();
    closeAllPopups();
    setInfoPopupOpen(true);
    setInfoMessage('Пользователь успешно зарегистрирован!');
  }

  const onRegister = (email, password, name) => {
    return MainApi
      .register(email, password, name)
      .then((res) => {
        if (res.statusCode === 201) {
          closeAllPopups()
          setInfoMessage('Вы успешно зарегистрировались! 🔥')
          setRegisterPopupOpen(false)
          setInfoPopupOpen(true)
        }
        if (res.statusCode === 409) {
          setRegisterErrorMessage(`${res.message} 😔`)
        }
        if (!res.ok) {
          setRegisterErrorMessage(res.validation.body.message)
        }
      })
  };

  return (
    <div className='project'>
      <div className='page'>
        <InfoPopup
          text={infoMessage}
          isOpen={isInfoPopupOpen}
          onClose={closeAllPopups}
          redirect={redirectToLogin}
        />
        <RegisterPopup
          isOpen={isRegisterPopupOpen}
          title='Регистрация'
          formName='register'
          onClose={closeAllPopups}
          redirect={redirectToLogin}
          onRegister={onRegister}
          error={RegisterErrorMessage}
        />
        <LoginPopup
          isOpen={isLoginPopupOpen}
          title='Вход'
          formName='login'
          onClose={closeAllPopups}
          redirect={redirectToRegister}
          onSubmit={onSubmit}
        />

        <Header
          mobileMenuIsClosed={mobileMenuIsClosed}
          onLoginClick={handleLoginClick}
          onMenuClick={handleMobileMenuClick}
          loggedIn={loggedIn}
        />

        <Switch>
          <Route exact path='/'>
            <Main >
              <SearchForm />
              <SearchResults />
              <About />
              <Preloader />
            </Main>
          </Route>
          <Route exact path='/saved-news'>
            <Main>
              <SavedNewsHeader />
              <SearchResults />
            </Main>
          </Route>
        </Switch>

        <Footer />
      </div>
    </div>
  );
}

export default App;
