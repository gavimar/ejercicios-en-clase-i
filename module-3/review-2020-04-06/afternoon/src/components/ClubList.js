import React from 'react';
import Club from './Club';

const ClubList = (props) => {
  return(
    /*En este componente recibo por props el array de datos que llega de mi madre y lo itero
    lleno las props del componente con las propiedades del objeto sobre el que estoy iterado en cada caso
    añado un key al elemento de lista para solucionar el error de keys que me específica React
    */
    <ul>
      {props.dataList.map((clubObject,index) =>
        <Club key={index}
              logo={clubObject.fa}
              clubName={clubObject.name}
              clubMembers={clubObject.members}//<-------
              /*Aquí es donde a través de props voy a pasarle el array de miembros 
              para que lo renderice el componente Club */
        />
      )}
    </ul>
  )
}

export default ClubList;