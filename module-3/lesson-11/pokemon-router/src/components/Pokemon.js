import React from 'react';

function Pokemon(props) {
  return (
    <div className="pokemonCard">
      <li className="pokemon" id={props.pokeId}>
        <div className="pokemon-image">
          <img src={props.pokeUrl} alt={props.pokeName}></img>
        </div>

        <div className="pokemon-name">
          <h2>{props.pokeName}</h2>
        </div>

        <div className="pokemon-types">
          <ul className="type">
            {props.pokeTypes.map((pokeType,index) => (
              <li key={index}>{pokeType}</li>
            ))}
          </ul>
        </div>
      </li>
    </div>
  );
}

export default Pokemon;
