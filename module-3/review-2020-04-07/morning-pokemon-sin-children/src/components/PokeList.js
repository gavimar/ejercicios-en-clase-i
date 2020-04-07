import React from 'react';
import Pokemon from './Pokemon';

const PokeList = (props) => {
  console.log(props.pokemons);
  const htmlCode = props.pokemons.map((pokemon) => {
    return (
      <li key={pokemon.id} className="card">
        <Pokemon name={pokemon.name} types={pokemon.types} url={pokemon.url} />
      </li>
    );
  });
  return (
    <div>
      <ul className="cards">{htmlCode}</ul>
    </div>
  );
};

export default PokeList;
