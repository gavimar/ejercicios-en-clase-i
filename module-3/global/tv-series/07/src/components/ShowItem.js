import React from 'react';

function ShowItem(props) {
  function handleBtn() {
    props.toggleFavorite(props.id)
  }
  return (
    <li className="card">
      <img className="card__img" src={props.image} alt={props.name} />
      <h3 className="card__title">{props.name}</h3>
      <button
        className="card__btn"
        id={props.id}
        onClick={handleBtn}
      >
        {props.btnText}
      </button>
    </li>
  );
}

export default ShowItem;
