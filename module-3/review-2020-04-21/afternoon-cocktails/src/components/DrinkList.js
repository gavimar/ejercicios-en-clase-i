import React from 'react';
import Drink from './Drink';
import { Link } from 'react-router-dom';

const DrinkList = (props) => {
  console.log(props.inputValue)
  return (
    <ul className="drink-list">
      {props.drinks
      //aquí establecemos el filtro si inputvalue está vacío todos pasan el filtro o si se cumple la condición solo se pintan
      //aquellos que la cumplen, para poder hacer una comparación estricta paso el contenido del nombre y el contenido del inputvalue a
      //lowercase para que me admita buscar tanto en mayúscula como en minúscula
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