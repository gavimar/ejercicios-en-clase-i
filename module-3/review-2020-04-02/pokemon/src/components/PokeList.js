import React from 'react';
// import Pokemon from './PokemonFunc';   si quieres ver cómo funciona el mismo componente en funcional descomenta esta línea
import Pokemon from './Pokemon';


class PokeList extends React.Component {
  constructor(props) {
    super(props);
    //bindeo siempre this a los métodos de la clase (esto es así por ser componentes de clase)
    this.handleClick = this.handleClick.bind(this)
  }

  //defino un método que pinte por consola lo que le venga desde su componente hijo por lifting (le llegará el nombre del pokemon guardado en el id)
  handleClick(pokemonName){
    console.log(pokemonName)
  }

  render() {
    return (
      <ul>
        {/*recorro el array que me llega por props (ver App.js) y pinto un componente Pokemon por cada uno de los objetos del array*/}
        {this.props.dataList.map((pokemonObject,index) =>
        //pinto un componente Pokemon por cada objeto de ese array y le paso por props el nombre, la ruta a la imagen y la función
        //que ejecutará por props para hacer el lifting (los hijos ejecutan funciones que les llegan de los padres y les pasan los datos)
          <Pokemon
            key = {index}
            name = {pokemonObject.name}
            imgUrl = {pokemonObject.img}
            handleClick={this.handleClick}//esta función la estoy pasando por props al componente Pokemon
          /> 
        )}
      </ul>
    );
  }
}

export default PokeList;
