import React from 'react';

class InfoPanel extends React.Component {
  constructor(props) {
    super(props);
    this.updateInfoYear = this.updateInfoYear.bind(this);
  }

  //ejecuto la función que viene de mi padre
  updateInfoYear(){
    this.props.updateInfo()
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <p>{this.props.firstName}{this.props.lastName}</p>
        <p>{this.props.day}{this.props.month}{this.props.year}</p>
        <button onClick = {this.updateInfoYear}>Actualizar</button>
      </div>
    );
  }
}

export default InfoPanel;
