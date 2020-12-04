function InfoPopup({ isOpen, text, onClose, redirect }) {
  return (
    <>
      <section className={`popup popup-info ${isOpen ? 'popup_opened' : ''} `}>
      <div className='popup__overlay' onClick={onClose}/>
        <div className='popup__container popup-info__container'>
          <h3 className='popup__title'>{text}</h3>
          <button type='button' className='button popup__close-button' onClick={onClose} />
          <a className='popup__text popup__redirect' onClick={redirect}>Войти</a>
        </div>
      </section>
    </>
  );
}

export default InfoPopup;