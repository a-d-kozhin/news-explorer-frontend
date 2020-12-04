import PopupWithForm from '../../components/PopupWithForm/PopupWithForm';
import { useState } from 'react';

function RegisterPopup({ isOpen, title, onClose, formName, redirect, onRegister, error }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setName('');
  };

  const handleClose = () => {
    onClose();
    resetForm();
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onRegister(email, password, name)
      .then(() => resetForm())
      .catch((err) => console.log(err));
  };

  return (
    <PopupWithForm
      isOpen={isOpen}
      title={title}
      formName={formName}
      onClose={handleClose}
      onSubmit={handleSubmit}
    >
      <label className='popup__label' htmlFor='email'>Email</label>
      <input required type='email' id='register-email' className='popup__input' placeholder='Введите почту' value={email} onChange={(evt) => setEmail(evt.target.value)} />
      <span id='email-input-error' className='popup__error'>{}</span>

      <label className='popup__label' htmlFor="password">Password</label>
      <input required type='text' id='register-password' className='popup__input' placeholder='Введите пароль' value={password} onChange={(evt) => setPassword(evt.target.value)} />
      <span id='password-input-error' className='popup__error'>{}</span>

      <label className='popup__label' htmlFor="name">Name</label>
      <input required type='text' id='register-name' className='popup__input' placeholder='Введите имя' value={name} onChange={(evt) => setName(evt.target.value)} />
      <span id='password-input-error' className='popup__error'>{}</span>

      <span id='register-form-error' className='popup__error popup__form-error'>{error}</span>
      <button
        type='submit'
        className='popup__submit-button'
      >Зарегистрироваться</button>
      <p className='popup__text'>или <a className='popup__text popup__redirect' onClick={redirect}>Войти</a></p>
    </PopupWithForm>
  );
}

export default RegisterPopup;