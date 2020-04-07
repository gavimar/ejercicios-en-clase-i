import React, { useState } from 'react';
import PokeList from './PokeList';
import pokemonsData from '../data/pokemons';

const App = () => {
  const [pokemons /*, setPokemons*/] = useState(pokemonsData);
  return (
    <div>
      <PokeList pokemons={pokemons} />
    </div>
  );
};

export default App;
