import React from 'react';

const Drink = (props) => {

  return (
    <div className='drink'>
      <img src={props.img} alt={props.name}/>
      <p>{props.name}</p>
    </div>
  )
}

export default Drink;