import React from 'react';
import InputFile from './InputFile';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      img: ''
    };
    this.handleImage = this.handleImage.bind(this);
  }

  handleImage(img) {
    this.setState({
      img: img
    });
  }

  render() {
    return (
      <div>
        <InputFile handleImage={this.handleImage} /> Card:
        <img src={this.state.img} alt="Imagen" />
      </div>
    );
  }
}

export default App;
