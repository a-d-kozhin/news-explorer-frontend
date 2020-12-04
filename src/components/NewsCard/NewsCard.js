import sampleImage from '../../images/article-image-sample.png';
import { useLocation } from 'react-router-dom';

function NewsCard() {
  const path = useLocation().pathname;

  function addMarkedClass(evt) {
    evt.target.classList.toggle('article__save-btn_marked');
    evt.target.classList.toggle('article__save-btn');
  }

  return (
    <li className='article'>
      {path === '/saved-news' ? <>
        <div className='article__label'>
          <button className='article__icon article__remove-btn'></button>
        </div>
        <p className="article__label article__keyword">Природа</p>
      </>
        : <div className='article__label'>
          <button className='article__icon article__save-btn' onClick={addMarkedClass}></button>
        </div>
      }
      <img className='article__image' src={sampleImage} alt='Здесь должна быть картинка статьи'/>
      <div className='article__wrapper'>
        <a className='article__link' href='https://yandex.ru' target='blank'>
          <p className='article__date'>2 августа, 2019</p>
          <h3 className='article__title'>Национальное достояние – парки</h3>
          <p className='article__text'>В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.</p>
          <p className='article__source'>ЛЕНТА.РУ</p>
        </a>
      </div>
    </li>
  );
}

export default NewsCard;