import React from 'react';
import '../stylesheets/App.scss';

const Card = props => {
  console.log(props.name);
  return <div>Card: {props.cardName}</div>;
};

export default Card;
