import React from 'react';
import Pokemon from './Pokemon';

const PokeList = (props) => {
  //accedo por destructuring a las props
  const {dataList,isEvolution} = props
  return (
      <ul className="pokelist">
         {dataList
         //hago el filtrado basádome en si las props que recibo de isEvolution son true o false,
         //como filter devuelve un array vacío tengo siempre que asegurarme devolver algo
         //para que map pueda pintarlo, en este caso dejo pasar todos los pokemons si isEvolution es false (!isEvolution)
         //en otro caso hago la comprobación de si es true y si evolution no es null (esto es así porque según mi JSON)
         //los pokemon que no son evolución tienen una propiedad evolution en null
          .filter(pokemonObject => !isEvolution || (isEvolution && pokemonObject.evolution !== null))
          .map(pokemonObject =>
            <Pokemon 
                key = {pokemonObject.id}
                pokeName = {pokemonObject.name}
                pokeUrl = {pokemonObject.url}
                pokeTypes = {pokemonObject.types}
            />
            )} 
      </ul>
    );
  }


  export default PokeList;