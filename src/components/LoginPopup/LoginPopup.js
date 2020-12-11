import PopupWithForm from '../../components/PopupWithForm/PopupWithForm';

function LoginPopup({
  isOpen,
  title,
  formName,
  onClose,
  redirect,
  onLogin,
  submitErrorMessage,
  values,
  errors,
  onInputChange,
  isValid }) {

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onLogin(values.email, values.password);
  };

  return (
    <PopupWithForm
      isOpen={isOpen}
      title={title}
      formName={formName}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className='popup__label' htmlFor='email'>Email</label>
      <input required type='email' name='email' className='popup__input' placeholder='Введите почту' value={values.email || ''} onChange={onInputChange} />
      <span id="email-input-error" className="popup__error">{errors.email}</span>
      <label className='popup__label' htmlFor="password">Password</label>
      <input required type='text' name='password' className='popup__input' placeholder='Введите пароль' value={values.password || ''} onChange={onInputChange} />
      <span id="password-input-error" className="popup__error">{errors.password}</span>
      <span id="login-form-error" className="popup__error popup__form-error">{submitErrorMessage}</span>
      <button
        type='submit'
        className={`popup__submit-button ${!isValid ? 'popup__submit-button_disabled' : ''}`}
        disabled={!isValid}
      >Войти</button>
      <p className='popup__text'>или <a className='popup__text popup__redirect' onClick={redirect}>Зарегистрироваться</a></p>
    </PopupWithForm>
  );
}

export default LoginPopup;