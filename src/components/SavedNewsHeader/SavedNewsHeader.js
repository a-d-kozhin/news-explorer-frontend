import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function SavedNewsHeader({ savedArticles }) {

//   const sampleArray = ["природа", "природа", "море", "природа", "море", "лес"]
//   const i = new Set(sampleArray);
//   console.log(i)
//   function sortByFrequency(array) {
//     const frequency = {};

//     array.forEach((value) => { frequency[value] = 0; });

//     const uniques = array.filter((value) => ++frequency[value] == 1);

//     return uniques.sort((a, b) => frequency[b] - frequency[a]);
// }
//  const sortedKeywords = sortByFrequency(sampleArray).map((key) => (key.charAt(0).toUpperCase() + key.slice(1)));

//  console.log(sortedKeywords[0]);
//  console.log(sortedKeywords[1]);
//  console.log(sortedKeywords[2]);
//  console.log(`По ключевым словам ${sortedKeywords[0]}, ${sortedKeywords[1]} и ${i.size - 2 === 1 ?  '1 другому' : 'другим' }`)

  const currentUser = React.useContext(CurrentUserContext);
  return (
    <div className='saved-news-header'>
      <p className='saved-news-header__pagename'>Сохраненные статьи</p>
      <h2 className='saved-news-header__title'>{currentUser.name}, у вас {`${savedArticles.length}`} сохраненных статей</h2>
      <p className='saved-news-header__text'>По ключевым словам:
        <span className='saved-news-header__text saved-news-header__accent'> Природа</span>,
        <span className='saved-news-header__text saved-news-header__accent'> Тайга</span> и
        <span className='saved-news-header__text saved-news-header__accent'> 2-м другим</span>
      </p>
    </div>
  );
}

export default SavedNewsHeader;