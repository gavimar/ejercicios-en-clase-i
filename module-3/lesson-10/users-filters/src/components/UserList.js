import React from 'react';
import User from './User';

const UserList = (props) => {
  const {cities,gender} = props
  return(
    <ul className="pokelist">
      {props.data
        .filter(userObj => !cities.length || cities.includes(userObj.location.city))
        .filter(userObj => gender === '' || userObj.gender === gender)
        .map(userObj => 
          <li key={userObj.login.uuid}>
            <User userName={userObj.name}
                  userAvatar={userObj.picture.medium}
                  userLocation={userObj.location.city}
            />
          </li>   
      )}
    </ul>
  )
}

export default UserList;