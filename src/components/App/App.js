import './App.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LoginPopup from '../LoginPopup/LoginPopup';
import InfoPopup from '../InfoPopup/InfoPopup';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import SearchResults from '../SearchResults/SearchResults';
import NoFoundNews from '../NoFoundNews/NoFoundNews';
import About from '../About/About';
import SearchForm from '../SearchForm/SearchForm';
import SavedNews from '../SavedNews/SavedNews';
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import RegisterPopup from '../RegisterPopup/RegisterPopup';
import Preloader from '../Preloader/Preloader';
import * as MainApi from '../../utils/MainApi';
import { getArticles } from '../../utils/NewsApi';

function App() {
  const defaultArticlesCount = 3;
  const preloaderTimeout = 500;

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({ name: '', email: '', _id: '' });
  const [mobileMenuIsClosed, setMobileMenu] = useState(true);
  const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setRegisterPopupOpen] = useState(false);
  const [isInfoPopupOpen, setInfoPopupOpen] = useState(false);
  const [infoMessage, setInfoMessage] = useState('');
  const [submitErrorMessage, setSubmitErrorMessage] = useState('');
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [preloaderRunning, setPreloaderRunning] = useState(false);
  const [articlesArray, setArticlesArray] = useState([]);
  const [articlesCount, setArticlesCount] = useState(defaultArticlesCount);
  const [keyword, setKeyword] = useState('')
  const [savedArticles, setSavedArticles] = useState([]);
  const [noNewsFound, setNoNewsFound] = useState(false);

  function handleMobileMenuClick() {
    setMobileMenu(!mobileMenuIsClosed);
  }

  function handleLoginClick() {
    setLoginPopupOpen(!isLoginPopupOpen);
  }

  function resetForms() {
    setValues({});
    setErrors({});
    setIsValid(false);
  }

  function closeAllPopups() {
    if (document.querySelector('.popup_opened')) {
      document.querySelector('.popup_opened').classList.remove('popup_opened');
      setLoginPopupOpen(false);
      setRegisterPopupOpen(false);
      setSubmitErrorMessage('')
      setInfoMessage('');
      resetForms();
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

  function getSavedArticles() {
    const token = localStorage.getItem('jwt');
    return MainApi
      .getUserArticles(token)
      .then((articlesArray) => {
        const savedArticlesArray = articlesArray.filter(article => article.owner === currentUser._id);
        setSavedArticles(savedArticlesArray);
        localStorage.setItem('saved', JSON.stringify(savedArticlesArray));
      })
  }

  function handleArticleSave(article) {
    const token = localStorage.getItem('jwt');
    return MainApi
      .saveArticle({ ...article, keyword }, token)
      .then(() => getSavedArticles())
  }

  function handleArticleDeletion(articleID) {
    const token = localStorage.getItem('jwt');
    return MainApi
      .deleteArticle(articleID, token)
      .then(() => getSavedArticles())
  }

  function onInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValidity());
  }

  const onRegister = (email, password, name) => {
    return MainApi
      .register(email, password, name)
      .then((res) => {
        if (res.statusCode === 201) {
          setSubmitErrorMessage('');
          closeAllPopups();
          setInfoMessage('Вы успешно зарегистрировались! 🔥');
          setRegisterPopupOpen(false);
          setInfoPopupOpen(true);
        }
        if (res.message === 'Пользователь с таким email уже есть') {
          setSubmitErrorMessage(`${res.message} 😔`)
        }
        if (res.validation.body.message) {
          setSubmitErrorMessage(res.validation.body.message)
        }
      })
  };

  const onLogin = (email, password) => {
    return MainApi
      .authorize(email, password)
      .then((res) => {
        if (res.user) {
          closeAllPopups();
          tokenCheck();
        }
        else {
          setSubmitErrorMessage(`${res.message} 😔`)
        }
      })
  }

  const onLogOut = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('_id');
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('saved');
    localStorage.removeItem('keyword');
    setLoggedIn(false);
    setCurrentUser({ email: '', _id: '', name: '' });
    setSavedArticles([]);
  };

  const onSearch = (keyword) => {
    setNoNewsFound(false);
    setArticlesCount(defaultArticlesCount);
    setPreloaderRunning(true);
    localStorage.setItem('keyword', keyword);
    getArticles(keyword)
      .then(res => {
        if (res.articles.length === 0) {
          setNoNewsFound(true);
          setArticlesArray([]);
          return
        }
        else {
          localStorage.setItem('searched', JSON.stringify(res.articles));
          setArticlesArray(res.articles);
          return res.articles
        }
      })
      .then(() => setTimeout(setPreloaderRunning, preloaderTimeout, false))
  }

  const tokenCheck = () => {
    const token = localStorage.getItem('jwt');
    if (token) {
      return MainApi
        .getProfile(token)
        .then(() => {
          let name = localStorage.getItem('name');
          let email = localStorage.getItem('email');
          let _id = localStorage.getItem('_id');
          let searched = localStorage.getItem('searched');
          let keyword = localStorage.getItem('keyword');
          setCurrentUser({ name, email, _id});
          setArticlesArray(JSON.parse(searched));
          setKeyword(keyword);
          setLoggedIn(true);
          getSavedArticles(token);
        })
    }
  };

  useEffect(() => {
    tokenCheck();
  }, [loggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>

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
            submitErrorMessage={submitErrorMessage}
            values={values}
            errors={errors}
            isValid={isValid}
            onInputChange={onInputChange}
          />
          <LoginPopup
            isOpen={isLoginPopupOpen}
            title='Вход'
            formName='login'
            onClose={closeAllPopups}
            redirect={redirectToRegister}
            onLogin={onLogin}
            submitErrorMessage={submitErrorMessage}
            values={values}
            errors={errors}
            isValid={isValid}
            onInputChange={onInputChange}
          />

          <Header
            mobileMenuIsClosed={mobileMenuIsClosed}
            onLoginClick={handleLoginClick}
            onLogOut={onLogOut}
            onMenuClick={handleMobileMenuClick}
            loggedIn={loggedIn}
          />

          <Switch>
            <Route exact path='/'>
              <SearchForm
                onSearch={onSearch}
                setPreloaderRunning={setPreloaderRunning}
                keyword={keyword}
                setKeyword={setKeyword}
              />
              <Preloader preloaderRunning={preloaderRunning} />
              <NoFoundNews noNewsFound={noNewsFound} />
              {articlesArray.length > 0 &&
                <SearchResults
                  articlesArray={articlesArray}
                  articlesCount={articlesCount}
                  setArticlesCount={setArticlesCount}
                  loggedIn={loggedIn}
                  handleArticleSave={handleArticleSave}
                  handleArticleDeletion={handleArticleDeletion}
                />
              }
              <About />
            </Route>

            <Route exact path='/saved-news'>
              <ProtectedRoute
                component={SavedNews}
                loggedIn={loggedIn}
                savedArticles={savedArticles}
                handleArticleDeletion={handleArticleDeletion}
                getSavedArticles={getSavedArticles}
                keyword={keyword}
              >
              </ProtectedRoute>
            </Route>

          </Switch>

          <Footer />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
