import React from 'react';

function HeaderForm(props) {
  const handleClick = ev => {
    ev.preventDefault();
    console.log(props);
    props.handleInbox(123);
  };

  return (
    <form className="text-align-right">
      <button className="form__btn" onClick={handleClick}>
        <span className="fas fa-inbox"></span>
        Recibidos
      </button>
      <button className="form__btn">
        <span className="fas fa-trash"></span>
        Papelera
      </button>
      <input className="form__input-text" type="text" placeholder="Buscar un correo" />
    </form>
  );
}

// const btn = document.querySelector('.js-form__btn-fake');

// function handleClick (ev) {
//   console.log('Me han clickado')
// }

// btn.addEventListener('click', handleClick);

export default HeaderForm;
