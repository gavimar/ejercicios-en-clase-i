import React from 'react';
import Header from './Header';

const sendDataToLocalStorage = () => {};

const name = 'MC';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // const htmlCode = this.render();
    // divContainer.innerHTML = htmlCode;
  }

  sendDataToApi() {}

  render() {
    return (
      // const div = document.createElement('div');
      // div.classList.add('app');
      // div.addEventListener('click', this.sendDataToApi);
      <div className="app" onClick={this.sendDataToApi}>
        App:
        {name}
        <button onClick={sendDataToLocalStorage}>Foo</button>
        <Header title="Bienvenido a mi página" />
      </div>
    );
  }
}

export default App;
