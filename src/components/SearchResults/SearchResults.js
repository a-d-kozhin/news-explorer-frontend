import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

function SearchResults() {
  return (
    <section className='search-results'>
      <h2 className='search-results__header'>Результаты поиска</h2>
      <ul className='articles'>
        <NewsCard></NewsCard>
        <NewsCard></NewsCard>
        <NewsCard></NewsCard>
        <NewsCard></NewsCard>
        <NewsCard></NewsCard>
      </ul>
      <button className='search-results__showmore-button'>Показать еще</button>
    </section>
  );
}

export default SearchResults;