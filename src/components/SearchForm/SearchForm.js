import React from 'react';

function SearchForm() {
  return (
    <section className='search-form'>
      <div className='search-form__textfield'>
        <h1 className='search-form__header'>Что творится в мире?</h1>
        <p className='search-form__subheader'>Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
      </div>
        <form className='search-form__form'>
      <div className="search-form__wrapper">
          <input className='search-form__input' placeholder='Политика'></input>
          <button className='search-form__submit' type='submit'>Искать</button>
      </div>
        </form>
    </section>
  );
}

export default SearchForm;