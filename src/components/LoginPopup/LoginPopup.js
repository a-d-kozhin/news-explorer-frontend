import PopupWithForm from '../../components/PopupWithForm/PopupWithForm';
import { useState } from 'react';

function LoginPopup({ isOpen, title, formName, onClose, redirect, onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleClose = () => {
    onClose();
    resetForm();
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      title={title}
      formName={formName}
      onClose={handleClose}
      onSubmit={onSubmit}
    >
      <label className='popup__label' htmlFor='email'>Email</label>
      <input required type='email' id='email' className='popup__input' placeholder='Введите почту' value={email} onChange={(evt) => setEmail(evt.target.value)} />
      <span id="email-input-error" className="popup__error">{ }</span>
      <label className='popup__label' htmlFor="password">Password</label>
      <input required type='text' id='password' className='popup__input' placeholder='Введите пароль' value={password} onChange={(evt) => setPassword(evt.target.value)} />
      <span id="password-input-error" className="popup__error">{ }</span>
      <span id="login-form-error" className="popup__error popup__form-error">{ }</span>
      <button
        type='submit'
        className="popup__submit-button popup-confirm__button"
      >Войти</button>
      <p className='popup__text'>или <a className='popup__text popup__redirect' onClick={redirect}>Зарегистрироваться</a></p>
    </PopupWithForm>
  );
}

export default LoginPopup;