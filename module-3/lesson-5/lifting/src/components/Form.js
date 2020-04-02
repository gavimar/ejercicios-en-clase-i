import React from 'react';
import InputText from './InputText';


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleFormInput = this.handleFormInput.bind(this)
  }

  //Esta función es la que hemos definido en el componente madre
  //que se encargará de pintar por consola la información que le viene a través
  //del parámetro targetInfo (es el objeto que le está enviando el hijo con el nombre del input y el valor)
  //esto se hace así porque en el hijo yo ya estoy recogiendo estos datos y enviándoselos como argumento a esta función
  handleFormInput(targetInfo) {
    console.log(targetInfo)
  }

  render() {
    return (
      <form>
        <InputText
          id='name'
          label='Escribe tu nombre'
          name='name'
          //envío por props la función definida arriba a los hijos
          handleInput={this.handleFormInput}
        />
        <InputText
          id='email'
          label='Escribe tu email'
          name='email'
          //envío por props la función definida arriba a los hijos
          handleInput={this.handleFormInput}
        />
      </form>
    );
  }
}

export default Form;
