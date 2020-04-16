import React from 'react';
import Pokemon from './Pokemon';
import { Link } from 'react-router-dom';

const PokeList = (props) => {
  const {dataList,isEvolution} = props
  return (
      <ul className="pokelist">
         {dataList
          .filter(pokemonObject => !isEvolution || (isEvolution && pokemonObject.evolution !== null))
          .map(pokemonObject =>
            <Link to={`/pokemon/${pokemonObject.id}`}>
              <Pokemon 
                key = {pokemonObject.id}
                pokeName = {pokemonObject.name}
                pokeUrl = {pokemonObject.url}
                pokeTypes = {pokemonObject.types}
              />
            </Link>
            )} 
      </ul>
    );
  }


  export default PokeList;