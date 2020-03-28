import React from 'react';

function ShowDummy(props) {
  return (
    <li className="card">
      <img className="card__img" src={props.image} alt={props.name} />
      <h3 className="card__title">{props.name}</h3>
      <button className="card__btn">
        Añadir
      </button>
    </li>
  );
}

export default ShowDummy;
