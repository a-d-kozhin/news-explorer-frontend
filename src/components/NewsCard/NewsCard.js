import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import 'moment/locale/ru';

const moment = require('moment');

function NewsCard({ image, date, title, text, source, link, loggedIn, articleId, handleArticleSave, handleArticleDeletion, keyword, setRegisterPopupOpen, getSavedArticles }) {
  const path = useLocation().pathname;

  const articleObj = {
    image: image || 'https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-1.jpg',
    date,
    title,
    text,
    source,
    link
  };

  const [isSaved, setSaved] = useState(false);

  function deleteArticle() {
    const myArticlesArray = JSON.parse(localStorage.getItem('saved'));
    const articleToDelete = myArticlesArray.find((item) => item.text === articleObj.text && item.title === articleObj.title);
    handleArticleDeletion(articleToDelete._id)
      .then((res) => {
        if (res.message) setSaved(!isSaved);
      })
      .catch(err => err.message);
  }

  function saveArticle() {
    if (!loggedIn) setRegisterPopupOpen(true);
    else {
      handleArticleSave(articleObj)
        .then((res) => {
          if (res._id) setSaved(!isSaved);
        })
        .catch(err => err.message)
    }
  }

  return (
    <li className='article' key={link}>
      {path === '/saved-news' ?
        <>
          <div className='article__label'>
            <button className='article__icon article__remove-btn' onClick={deleteArticle}></button>
          </div>
          <p className="article__label article__keyword">{keyword}</p>
        </>
        :
        <div className='article__label'>
          {isSaved ?
            <button className='article__icon article__save-btn_marked' onClick={deleteArticle} disabled={!loggedIn}></button>
            :
            <button className={`article__icon article__save-btn ${loggedIn ? '' : 'article__save-btn_type_not-logged'}`} onClick={saveArticle}></button>
          }
        </div>
      }
      <img className='article__image' src={image} alt='Здесь должна быть картинка статьи' />
      <div className='article__wrapper'>
        <a className='article__link' href={link} target='blank'>
          <p className='article__date'>{moment(date).format('LL').slice(0,-3)}</p>
          <h3 className='article__title'>{title}</h3>
          <p className='article__text'>{text}</p>
          <p className='article__source'>{source}</p>
        </a>
      </div>
    </li> 
  );
}

export default NewsCard;