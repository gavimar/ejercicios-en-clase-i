import React from 'react';
import '../stylesheets/App.css';
import InfoPanel from './InfoPanel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.updateInfo = this.updateInfo.bind(this)
    this.state = {
      firstName: 'Ada',
      lastName: 'Lovelace',
        birdthDate: {
          day: 10,
          month: 'diciembre',
          year: 1815
      }
    }
  }

//Función que paso por props hasta el botón que es el que la ejecuta
//en ella seteo el estado con un nuevo valor actualizado, el nombre y el año de nacimiento
//lo hago por medio de la función callback de setState, recibe un parámetro que es el estado (se le suele llamar prevState)
//retorno un objeto que actualiza directamente la propiedad name
//llamas a la propiedad que contiene el objeto anidado birthDate y por medio de spread copias cada una de las propiedades
//que tuviera ---> ...prevState.birdthDate se transforma en --> day:10, month:diciembre, year:1815
//cojo la propiedad que quiero actualizar y piso su valor con el nuevo
  updateInfo() {
    this.setState(prevState => {
      return {
        firstName:'Mari Carmen',
        birdthDate:{
          ...prevState.birdthDate,
          year:1992
        }
      }
    })
  }
  
  render() {
    return (
      <div className="App">
        <InfoPanel
        //a trvés de las props envío el estado
          firstName = {this.state.firstName}
          lastName = {this.state.lastName}
          day = {this.state.birdthDate.day}
          month = {this.state.birdthDate.month}
          year = {this.state.birdthDate.year}
          //aquí a través de las props envío la función que ejecutará mi hijo
          updateInfo = {this.updateInfo}
        />
      </div>
    );
  }
}

export default App;
