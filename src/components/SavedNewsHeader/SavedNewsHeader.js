import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function SavedNewsHeader({ savedArticles }) {
  const keywordsArray = savedArticles.map(article => article.keyword)

  const i = new Set(keywordsArray);

  function sortByFrequency(array) {
    const frequency = {};
    array.forEach((value) => { frequency[value] = 0; });
    const uniques = array.filter((value) => ++frequency[value] == 1);
    return uniques.sort((a, b) => frequency[b] - frequency[a]);
  }
  const sortedKeywords = sortByFrequency(keywordsArray).map((key) => (key.charAt(0).toUpperCase() + key.slice(1)));

  const currentUser = React.useContext(CurrentUserContext);

  function getPluralMessage() {
    if (!savedArticles.length) return 'пока нет cохраненных статей'
    if (savedArticles.length === 1) return '1 сохраненная статья'
    if (savedArticles.length > 1 && savedArticles.length < 5) return `${savedArticles.length} сохраненные статьи`
    if (savedArticles.length >= 5) return `${savedArticles.length} сохраненных статей`
  }

  return (
    <div className='saved-news-header'>
      <p className='saved-news-header__pagename'>Сохраненные статьи</p>
      <h2 className='saved-news-header__title'>{currentUser.name}, у вас {`${getPluralMessage()}`}</h2>
      <p className='saved-news-header__text'>{`${savedArticles.length > 0 ?
        `${sortedKeywords.length === 1 ? 'По ключевому слову' : 'По ключевым словам'}`
        :
        'В этом разделе вы сможете найти статьи, которые вы сохранили на будущее 😎'}`}
        {sortedKeywords.length > 0 &&
          <span className='saved-news-header__text saved-news-header__accent'>{` ${sortedKeywords[0]}`}</span>
        }
        {sortedKeywords.length > 1 &&
          <span className='saved-news-header__text saved-news-header__accent'>{`, ${sortedKeywords[1]}`}</span>
        }
        {sortedKeywords.length > 2 &&
          <p className='saved-news-header__text'> и
        <span className='saved-news-header__text saved-news-header__accent'>{` ${i.size - 2 === 1 ? '1 другому' : `${i.size - 2} другим`}`}</span>
          </p>}
      </p>
    </div>
  );
}

export default SavedNewsHeader;