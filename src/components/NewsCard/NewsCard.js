import { useState } from 'react';
import sampleImage from '../../images/article-image-sample.png';
import { useLocation } from 'react-router-dom';
import brokenImg from '../../images/no-pic.png'

function NewsCard({ image, date, title, text, source, link, loggedIn, articleId, handleArticleSave, handleArticleDeletion, keyword }) {
  const path = useLocation().pathname;

  const articleObj = {image: image || 'Изображение не доступно',
    date,
    title,
    text,
    source,
    link
  };

  const [isSaved, setSaved] = useState(false);

  function deleteArticle() {
    handleArticleDeletion(articleId);
  }

  function saveArticle() {
  handleArticleSave(articleObj);
  setSaved(!isSaved);
}

return (
  <li className='article' key={link}>
    {path === '/saved-news' ? <>
      <div className='article__label'>
        <button className='article__icon article__remove-btn' onClick={deleteArticle}></button>
      </div>
      <p className="article__label article__keyword">{keyword}</p>
    </>
      : <div className='article__label'>
        <button className={`article__icon ${isSaved ? 'article__save-btn_marked' : 'article__save-btn'}`} onClick={saveArticle} disabled={!loggedIn}></button>
      </div>
    }
    <img className='article__image' src={image} alt='Здесь должна быть картинка статьи' />
    <div className='article__wrapper'>
      <a className='article__link' href={link} target='blank'>
        <p className='article__date'>{date}</p>
        <h3 className='article__title'>{title}</h3>
        <p className='article__text'>{text}</p>
        <p className='article__source'>{source}</p>
      </a>
    </div>
  </li>
);
}

export default NewsCard;