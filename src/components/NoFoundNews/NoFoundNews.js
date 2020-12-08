import notFoundPic from '../../images/not-found.svg';

function NoFoundNews({ noNewsFound }) {

  return (
    noNewsFound ?
      <div className='no-found-news__section'>
        <img src={notFoundPic} alt="." className="no-found-news__image"/>
        <h3 className="no-found-news__title">Ничего не найдено</h3>
        <p className='no-found-news__text'>К сожалению по вашему запросу ничего не найдено.</p>
      </div>
    : null
  )
}
export default NoFoundNews;