import React from 'react';

function ShowDummy(props) {
  console.log(props);
  return (
    <div>
      <h3>Soy un poco dummy</h3>
      <p>Serie: {props.name}</p>
      <p>Gender: {props.gender}</p>
    </div>
  );
}

export default ShowDummy;
