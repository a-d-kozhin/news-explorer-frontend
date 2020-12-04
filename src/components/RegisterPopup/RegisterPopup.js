import PopupWithForm from '../../components/PopupWithForm/PopupWithForm';

function RegisterPopup({ isOpen, title, name, onClose, redirect, onSubmit }) {
  return (
    <PopupWithForm
      isOpen={isOpen}
      title={title}
      name={name}
      onClose={onClose}
      onSubmit={onSubmit}
    >
      <label className='popup__label' htmlFor='email'>Email</label>
      <input required type='email' id='email' className='popup__input' placeholder='Введите почту' />
      <span id='email-input-error' className='popup__error'>Текст ошибки инпута</span>

      <label className='popup__label' htmlFor="password">Password</label>
      <input required type='text' id='password' className='popup__input' placeholder='Введите пароль' />
      <span id='password-input-error' className='popup__error'>Текст ошибки инпута</span>

      <label className='popup__label' htmlFor="name">Name</label>
      <input required type='text' id='name' className='popup__input' placeholder='Введите имя' />
      <span id='password-input-error' className='popup__error'>Текст ошибки инпута</span>

      <span id='register-form-error' className='popup__error popup__form-error'>Текст ошибки формы</span>
      <button
        type='submit'
        className='popup__submit-button'
      >Зарегистрироваться</button>
      <p className='popup__text'>или <a className='popup__text popup__redirect' onClick={redirect}>Войти</a></p>
    </PopupWithForm>
  );
}

export default RegisterPopup;