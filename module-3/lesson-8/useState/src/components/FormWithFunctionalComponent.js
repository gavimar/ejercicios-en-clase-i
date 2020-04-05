import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Maricarmen',
      email: 'maricarment_1984@mixmail.com'
    };
    this.handleInputs = this.handleInputs.bind(this);
  }

  handleInputs(ev) {
    this.setState({
      [ev.target.id]: ev.target.value
    });
  }

  render() {
    return (
      <div>
        <h1 className="title">Componente de funcional</h1>
        <h2 className="title--small">Tarjeta:</h2>
        <div>
          <p>Nombre: {this.state.name}</p>
          <p>Email: {this.state.email}</p>
        </div>
        <h2 className="title--small mt-1">Formulario:</h2>
        <div>
          <label htmlFor="name" className="display-block">
            Nombre:
          </label>
          <input type="text" id="name" onKeyUp={this.handleInputs} />
        </div>
        <div>
          <label htmlFor="email" className="display-block">
            Email:
          </label>
          <input type="text" id="email" onKeyUp={this.handleInputs} />
        </div>
      </div>
    );
  }
}

export default App;
