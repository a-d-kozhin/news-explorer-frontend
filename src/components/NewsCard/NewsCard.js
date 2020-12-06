import sampleImage from '../../images/article-image-sample.png';
import { useLocation } from 'react-router-dom';
import brokenImg from '../../images/no-pic.png'

function NewsCard({ image, date, title, text, source, url, loggedIn }) {
  const path = useLocation().pathname;

  function addMarkedClass(evt) {
    evt.target.classList.toggle('article__save-btn_marked');
    evt.target.classList.toggle('article__save-btn');
  }

  return (
    <li className='article' key={url}>
      {path === '/saved-news' ? <>
        <div className='article__label'>
          <button className='article__icon article__remove-btn'></button>
        </div>
        <p className="article__label article__keyword">Природа</p>
      </>
        : <div className='article__label'>
          <button className='article__icon article__save-btn' onClick={addMarkedClass} disabled={!loggedIn}></button>
        </div>
      }
      <img className='article__image' src={image} alt='Здесь должна быть картинка статьи'/>
      <div className='article__wrapper'>
        <a className='article__link' href={url} target='blank'>
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