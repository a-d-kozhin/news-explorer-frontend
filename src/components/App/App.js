import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SavedNews from '../SavedNews/SavedNews';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import SearchResults from '../SearchResults/SearchResults';
import About from '../About/About';
import SearchForm from '../SearchForm/SearchForm';
import { useState } from 'react';
import { Route, Switch, Redirect, useHistory, BrowserRouter } from 'react-router-dom';

function App() {
  // functions
  const [mobileMenuIsClosed, setMobileMenu] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  function handleMobileMenuClick() {
    setMobileMenu(!mobileMenuIsClosed);
  }
  return (
    <div className="project">
      <div className="page">

        <Header
          mobileMenuIsClosed={mobileMenuIsClosed}
          onMenuClick={handleMobileMenuClick}
          loggedIn={loggedIn}
        />

        <Switch>
          <Route exact path='/'>
            <Main >
              <SearchForm />
              <SearchResults />
              <About />
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
