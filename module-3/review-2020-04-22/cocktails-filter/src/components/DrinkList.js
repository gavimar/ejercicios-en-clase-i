import React from 'react';
import Drink from './Drink';
import { Link } from 'react-router-dom';

const DrinkList = (props) => {

  // este ejercicio compara por ejemplo si un ingrediente está en un nombre, por que la api no nos devuelve los ingredientes
  //como pasaba con el ejercicio de los usuarios (si tienes este dato no necesitas esta funcion solo acceder al ingrediente que
  //que está en el objeto)

  //para ver si el nombre continene ese ingrediente y poder filtrar defino una función que reciba un string he llamado al param drinkString
  //recorro mi array de ingredientes, por cada ingrediente busco con indexOf si el nombre del ingrediente está
  // (indexOf devolverá una posición en el array) o no está (devolverá -1)
  //creo el condicional para cambiar el estado de mi variable isFound
  const hasIngredient = (drinkString) => {
    let isFound = false;
    props.ingredients.forEach(ingredient => {
      let index = drinkString.toLowerCase().indexOf(ingredient.toLowerCase())
      if(index !== -1) {
        isFound = true
      }
    })
    return isFound
  }
  
  return (
    <ul className="drink-list">
      {props.drinks
        .filter((drinkObj) => !props.ingredients.length || hasIngredient(drinkObj.strDrink)) //<---la función valdrá por true o false dependiendo del retorno, con lo cual pintará o no los cocktails que cumplen el filtro
        .filter(drinkObj => props.inputValue === '' || drinkObj.strDrink.toLowerCase().includes(props.inputValue.toLowerCase()))
        .map(drinkObj => 
          <li key={drinkObj.idDrink}>
            <Link to={`/drink/${drinkObj.idDrink}`}>
              <Drink
                img={drinkObj.strDrinkThumb}
                name={drinkObj.strDrink}
              />
            </Link>
          </li>
        )}
    </ul>
  )
}

 export default DrinkList;