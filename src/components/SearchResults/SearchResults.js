import NewsCard from '../NewsCard/NewsCard';

function SearchResults({ articlesArray, articlesCount, setArticlesCount, loggedIn, handleArticleSave, handleArticleDeletion}) {

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
                link={article.url}
                loggedIn={loggedIn}
                handleArticleSave={handleArticleSave}
                handleArticleDeletion={handleArticleDeletion}
                article={article}
                articleId={article._id}
              />
            ))}
          </ul>
          <button className='search-results__showmore-button' onClick={() => { setArticlesCount(articlesCount + 3) }}>Показать еще</button>
    </section>
  );
}

export default SearchResults;