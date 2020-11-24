import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SavedNews from '../SavedNews/SavedNews';
import SearchResults from '../SearchResults/SearchResults';
import About from '../About/About';
import SearchForm from '../SearchForm/SearchForm';
import { Route, Switch, Redirect, useHistory, BrowserRouter } from 'react-router-dom';

function App() {
  // functions

  return (
    <div className="project">
      <div className="page">

        <Header/>
        <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main>
              <SearchForm/>
              <SearchResults/>
              <About/>
            </Main>
          </Route>
          <Route exact path="saved-news">
            {/* <SavedNews/> */}
          </Route>
        </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    </div>
  );
}

export default App;
