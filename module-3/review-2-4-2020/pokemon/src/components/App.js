import React from 'react';
import '../stylesheets/App.css';
import pokemon from '../pokemon';
import PokeList from './PokeList';

//ENUNCIADO
//Dado un listado de pokemon que estoy importando arriba como un módulo tengo que crear 2 componentes más
//Pokelist---> se encargará de pintar el componente pokemon
//Pokemom---> será cada uno de los pokemon y será pintado por Pokelist

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        {/*Renderizo Pokelist que es la encargada de pintar los Pokemon y le paso por props el array de pokemon*/}
        <PokeList dataList={pokemon}/>
      </div>
    );
  }
}

export default App;
