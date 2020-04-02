import React from 'react';

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.listenClick = this.listenClick.bind(this)
  }

  listenClick(evt){
    //ejecuto la función que me viene desde mi padre y le paso el id del li que contiene el nombre
    this.props.handleClick(evt.currentTarget.id)
  }

  render() {
    return (
      /*en el onClick ejecuto la función listenClick que será a su vez, la que ejecute la función que le envía el padre
      a través de props*/
      <li className="pokemon" id={this.props.name} onClick={this.listenClick}>
        <img src={this.props.imgUrl} alt={this.props.name}/>
        <span>{this.props.name}</span>
      </li>
    );
  }
}

export default Pokemon;
