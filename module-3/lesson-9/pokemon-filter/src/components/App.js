import React from 'react';
import '../stylesheet/App.css';
import pokemons from '../data/pokemons.json';
import PokeList from './PokeList';
import Filter from './Filter';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.state={
      data:pokemons,
      //seteo isEvolution a false porque parto de que mi checkbox no está clickado
      isEvolution:false
    }
  }

  //función controladora del estado del checkbox
  //devuelvo la propiedad is Evolution negando la propiedad anterior con !
  handleCheckbox() {
    this.setState(prevState => {
      return {
        isEvolution: !prevState.isEvolution
      }
    })
  }

  render() {
    //accedo por destructuring a las propiedades de mi estado
    const {data,isEvolution} = this.state;
    return (
      <div className="App">
        <h1>Mi lista de Pokemon</h1>
        {/* pinto mi componente de filtro que recibe por props la función que tiene que ejecutar y el estado de isEvolution*/}
         <Filter handleCheckbox={this.handleCheckbox} isEvolution={isEvolution}/>
         {/*Por medio de un ternario valoro si data está lleno o no está lleno de datos
          si data estuviera vacío mostraría mi Loader, en caso contrario mostraría Pokelist
          */}
         {!data ?
          "estoy cargando..." //aquí puedes poner un componente loader
          :
          <PokeList isEvolution={isEvolution} dataList={data} />
          }
      </div>
    );
  }
}

export default App;
