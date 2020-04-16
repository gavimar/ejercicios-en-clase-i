import React from 'react';

const PokemonDetail = (props) => {
  return (
    <div className="pokemonCard">
      <li className="pokemon" id={props.pokemon.id}>
        <div className="pokemon-image">
          <img src={props.pokemon.url} alt={props.pokemon.name}/>
        </div>
        <div className="pokemon-name">
          <h2>{props.pokemon.name}</h2>
        </div>
      </li>
    </div>
  );
}

export default PokemonDetail;
