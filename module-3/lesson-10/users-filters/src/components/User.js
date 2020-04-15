import React from 'react';

const User = (props) => {

  return(
    <div className="card">
      <img src={props.userAvatar} alt={props.userName.first} className="card__img"/>
      <h2>{props.userName.first} {props.userName.last}</h2>
      <h3>{props.userLocation}</h3>
    </div>
  )
}

export default User;
