import React from 'react';

const fr = new FileReader();

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.writeImage = this.writeImage.bind(this);
    this.fileInput = React.createRef(); // esto es un document.querySelector()
    this.state = {
      img: ''
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    // cojo el primer (y único) fichero selecciona
    const myFile = this.fileInput.current.files[0];
    // añado un escuchador / manejador para saber cuándo se ha terminado de gestionar o cargar el fichero
    fr.addEventListener('load', this.writeImage);
    // inicio la carga del fichero myFile con el lector de ficheros fr
    fr.readAsDataURL(myFile);
  }

  writeImage() {
    // cuando se termina de cargar el fichero
    // lo guardo en el estado de este componente
    this.setState({
      img: fr.result
    });
    // y lo subo por lifting
    this.props.handleImage(fr.result);
    // en fr.result está el contenido en bruto o en crudo de la imagen
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Upload file:
          <input type="file" ref={this.fileInput} />
        </label>
        <img src={this.state.img} alt="Imagen" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default FileInput;
