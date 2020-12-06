import PopupWithForm from '../../components/PopupWithForm/PopupWithForm';
import { useState } from 'react';

function RegisterPopup({
  isOpen,
  title,
  onClose,
  formName,
  redirect,
  onRegister,
  submitErrorMessage,
  values,
  errors,
  onInputChange,
  isValid }) {

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onRegister(values.email, values.password, values.name)
      .then(() => onClose())
      .catch((err) => console.log(err));
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
      <span id='email-input-error' className='popup__error'>{errors.email}</span>

      <label className='popup__label' htmlFor="password">Password</label>
      <input required type='text' name='password' className='popup__input' placeholder='Введите пароль' value={values.password || ''} onChange={onInputChange} />
      <span id='password-input-error' className='popup__error'>{errors.password}</span>

      <label className='popup__label' htmlFor="name">Name</label>
      <input required type='text' name='name' className='popup__input' placeholder='Введите имя' value={values.name || ''} onChange={onInputChange} />
      <span id='password-input-error' className='popup__error'>{errors.name}</span>

      <span id='register-form-error' className='popup__error popup__form-error'>{submitErrorMessage}</span>
      <button
        type='submit'
        className={`popup__submit-button ${!isValid ? 'popup__submit-button_disabled' : ''}`}
        disabled={!isValid}
      >Зарегистрироваться</button>
      <p className='popup__text'>или <a className='popup__text popup__redirect' onClick={redirect}>Войти</a></p>
    </PopupWithForm>
  );
}

export default RegisterPopup;