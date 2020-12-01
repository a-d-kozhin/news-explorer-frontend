import sampleImage from '../../images/article-image-sample.png';
import { Route, useLocation } from 'react-router-dom';

function NewsCard() {
  const path = useLocation().pathname;
  return (
    <li className='article'>
      <div className='article__label'>
        {path === '/saved-news' ? <button className='article__remove-btn'></button>
          : <button className='article__save-btn'></button>
        }
      </div>
      <div className='article__image' style={{ backgroundImage: `url(${sampleImage})` }} />
      <div className='article__wrapper'>
        <a className='article__link' href='#' target='_blank'>
          <p className='article__date'>2 августа, 2019</p>
          <h3 className='article__title'>Национальное достояние – парки</h3>
          <p className='article__text'>В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков...</p>
          <p className='article__source'>ЛЕНТА.РУ</p>
        </a>
      </div>
    </li>
  );
}

export default NewsCard;