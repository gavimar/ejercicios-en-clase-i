
import React from 'react';

class InputText extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyUp = this.handleKeyUp.bind(this)
  }

  //en esta función recojo el evento para quedarme con el valor del input,
  //voy a crear un objeto que guarde esos datos con el name que le viene por props desde form
  //y el valor que detecta en el keyup del input
  handleKeyUp(evt) {
    const ObjectInfo = {
      [this.props.name]:evt.currentTarget.value
    }
    //es aquí donde tiene lugar el lifting ejecuto la función que mi padre me envía por props y le paso el objeto con
    //los datos que tengo que consolear
    this.props.handleInput(ObjectInfo)
  }

  render() {
    return (
      <div>
        <label htmlFor={this.props.id}>
          {this.props.label}
        </label>
        <input
          id={this.props.id}
          type='text'
          name={this.props.name}
          //es aquí donde escucho el evento onkeyup que ejecuta la función asociada handleKeyUp
          onKeyUp={this.handleKeyUp}
        />
      </div>
    );
  }
}

export default InputText;
