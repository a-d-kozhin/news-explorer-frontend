import NewsCard from '../NewsCard/NewsCard';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import { useEffect, useState } from 'react';

function SavedNews({ savedArticles, loggedIn, handleArticleDeletion, getSavedArticles }) {

  useEffect(() => {
    getSavedArticles();
  }, [savedArticles]);

  return (<>
  <div className="saved__news">

    <SavedNewsHeader savedArticles={savedArticles}/>
    <ul className='articles'>
      {savedArticles.map((article) => (
        
        <NewsCard
          image={article.image}
          date={article.date}
          title={article.title}
          text={article.text}
          source={article.source.name}
          link={article.link}
          loggedIn={loggedIn}
          article={article}
          articleId={article._id}
          handleArticleDeletion={handleArticleDeletion}
          keyword={article.keyword.trim().charAt(0).toUpperCase() + article.keyword.trim().slice(1)}
        />
      ))}
    </ul>
  </div>
  </>
  )
}
export default SavedNews;