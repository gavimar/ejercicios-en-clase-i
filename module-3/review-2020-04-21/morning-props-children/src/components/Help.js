import React from 'react';

const Help = props => {
  return <p className={props.type}>Ayuda: {props.children}</p>;
};

export default Help;
