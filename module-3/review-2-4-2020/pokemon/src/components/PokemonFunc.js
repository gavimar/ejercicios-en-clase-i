import React from 'react';

//Pokemom como componente funcional, fijarse en como rcibe las props (no necesito this), y en cómo ejecuto las funciones
const Pokemon = (props) => {

  const listenClick = (evt) => this.props.handleClick(evt.currentTarget.id);
  
  return (
    <li className="pokemon" id={props.name} onClick={listenClick}>
      <img src={props.imgUrl} alt={props.name}/>
      <span>{props.name}</span>
    </li>
  );
}

export default Pokemon;
