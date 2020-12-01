function SavedNewsHeader() {
  return (
    <div className='saved-news-header'>
      <p className='saved-news-header__pagename'>Сохраненные статьи</p>
      <h2 className='saved-news-header__title'>Грета, у вас 5 сохраненных статей</h2>
      <p className='saved-news-header__text'>По ключевым словам:
        <span className='saved-news-header__text saved-news-header__accent'> Природа</span>,
        <span className='saved-news-header__text saved-news-header__accent'> Тайга</span> и
        <span className='saved-news-header__text saved-news-header__accent'> 2-м другим</span>
      </p>
    </div>
  );
}

export default SavedNewsHeader;