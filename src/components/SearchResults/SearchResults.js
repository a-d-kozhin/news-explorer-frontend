import React from 'react';
import sampleImage from '../../images/article-image-sample.png';

function SearchResults() {
  return (
    <section className='search-results'>
      <h2 className='search-results__header'>Результаты поиска</h2>
      <ul className='articles'>

        <li className='article'>
          <div className='article__image' style={{ backgroundImage: `url(${sampleImage})` }} />
          <a className='article__body' href='#'>
            <p className='article__date'>2 августа, 2019</p>
            <h3 className='article__title'>Национальное достояние – парки</h3>
            <p className='article__text'>В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков...</p>
            <p className='article__source'>ЛЕНТА.РУ</p>
          </a>
        </li>

        <li className='article'>
          <div className='article__image' style={{ backgroundImage: `url(${sampleImage})` }} />
          <p className='article__date'>2 августа, 2019</p>
          <h3 className='article__title'>Национальное достояние – парки</h3>
          <p className='article__text'>В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков...</p>
          <p className='article__source'>МЕДУЗА</p>
        </li>

        <li className='article'>
          <div className='article__image' style={{ backgroundImage: `url(${sampleImage})` }} />
          <p className='article__date'>2 августа, 2019</p>
          <h3 className='article__title'>Национальное достояние – парки</h3>
          <p className='article__text'>В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков...</p>
          <p className='article__source'>РИА</p>
        </li>
      </ul>
      <button className='search-results__showmore-button'>Показать еще</button>
    </section>
  );
}

export default SearchResults;