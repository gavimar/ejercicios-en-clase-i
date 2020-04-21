import React from 'react';

const DrinkDetails = (props) => {
  console.log(props)
  //aquí estoy recibiendo el objeto entero por props con lo cual para acceder a cada una de sus propiedades
  //tengo que llamar a props.elObjeto.propiedad
  return (
    <div className="drink-details">
      <img src={props.drinkObj.strDrinkThumb} alt={props.drinkObj.strDrink}/>
      <p>{props.drinkObj.strDrink}</p>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem</p>
    </div>
  )
}

export default DrinkDetails;