import React from 'react';
import PokeList from './PokeList';
import Pokemon from './Pokemon';
import pokemonsData from '../data/pokemons';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: pokemonsData
    };
  }

  render() {
    const htmlCode = this.state.pokemons.map((pokemon) => {
      return (
        <Pokemon key={pokemon.id} name={pokemon.name} types={pokemon.types} url={pokemon.url} />
      );
    });
    return (
      <div>
        <PokeList>{htmlCode}</PokeList>
      </div>
    );
  }
}

export default App;

// import React, { useState } from 'react';
// import PokeList from './PokeList';
// import pokemonsData from '../data/pokemons';

// const App = () => {
//   const [pokemons /*, setPokemons*/] = useState(pokemonsData);
//   return (
//     <div>
//       <PokeList pokemons={pokemons} />
//     </div>
//   );
// };

// export default App;
