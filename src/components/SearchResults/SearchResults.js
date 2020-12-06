import NewsCard from '../NewsCard/NewsCard';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function SearchResults({ articlesArray, articlesCount, setArticlesCount, loggedIn }) {

  const path = useLocation().pathname;

  return (
    <section className='search-results'>
          <h2 className='search-results__header'>Результаты поиска</h2>
          <ul className='articles'>

            {articlesArray.slice(0, articlesCount).map((article) => (
              <NewsCard
                image={article.urlToImage}
                date={article.publishedAt}
                title={article.title}
                text={article.description}
                source={article.source.name}
                url={article.url}
                loggedIn={loggedIn}
              />
            ))}
          </ul>
          <button className='search-results__showmore-button' onClick={() => { setArticlesCount(articlesCount + 3) }}>Показать еще</button>
    </section>
  );
}

export default SearchResults;