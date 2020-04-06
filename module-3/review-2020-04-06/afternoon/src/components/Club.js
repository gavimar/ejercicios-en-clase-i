import React from 'react';

const Club = (props) => {
  return(
    <li className="clubList__club">
      <div className="clubList__club-logo">
        <i className={props.logo}></i>
      </div>
      <div className="clubList__club-info">
        <h1>{props.clubName}</h1>
        <h2>Members</h2>
        <ul className="members">
          {/*Aquí recibo por props el array que voy a iterar que contiene los miembros del equipo*/}
          {props.clubMembers.map((singleMember,index) => 
            <li key={index}>
              {singleMember}
            </li>
          )}
        </ul>
      </div>
    </li>
  )
}

export default Club;