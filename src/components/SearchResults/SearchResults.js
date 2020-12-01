import NewsCard from '../NewsCard/NewsCard';
import { useLocation } from 'react-router-dom';

function SearchResults() {
  const path = useLocation().pathname;

  return (
    <section className='search-results'>
      {path === '/' ? <h2 className='search-results__header'>Результаты поиска</h2> : ''}
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