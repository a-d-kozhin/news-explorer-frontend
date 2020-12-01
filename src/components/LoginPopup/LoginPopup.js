import PopupWithForm from '../../components/PopupWithForm/PopupWithForm';

function LoginPopup({ isOpen, title, name, onClose, redirect, onSubmit }) {
  return (
    <PopupWithForm
      isOpen={isOpen}
      title={title}
      name={name}
      onClose={onClose}
      onSubmit={onSubmit}
    >
      <label className='popup__label' htmlFor='email'>Email</label>
      <input required type='text' type='email' id='email' className='popup__input' placeholder='Введите почту' />
      <span id="email-input-error" className="popup__error">Текст ошибки инпута</span>
      <label className='popup__label' htmlFor="password">Password</label>
      <input required type='text' type='text' id='password' className='popup__input' placeholder='Введите пароль' />
      <span id="password-input-error" className="popup__error">Текст ошибки инпута</span>
      <span id="login-form-error" className="popup__error popup__form-error">Текст ошибки формы</span>
      <button
        type='submit'
        className="popup__submit-button popup-confirm__button"
      >Войти</button>
      <p className='popup__text'>или <a className='popup__text popup__redirect' onClick={redirect}>Зарегистрироваться</a></p>
    </PopupWithForm>
  );
}

export default LoginPopup;