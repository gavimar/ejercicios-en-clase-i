import React from 'react';

const CityFilter = (props) => {
  const {data,cities} = props
  
//como las ciudades se pintan dinámicamente tengo que hacerle llegar por props this.state.data a mi componenete
//así podré iterarlo con map y pintar la propiedad del objeto que me interesa, en este caso las ciudades
  const updateCheckbox = (evt) => {
    props.handleCityCheckbox(evt.currentTarget.value);
  }

  return(
    <form className="filter-city">
      <ul>
        {data.map((userObj,index) => 
          <li key={index} >
            <label htmlFor={index}>{userObj.location.city}</label>
            <input onChange={updateCheckbox} 
                   id={index} 
                   type="checkbox" 
                   value={userObj.location.city} 
                   name={userObj.location.city}
                   //si el valor de mi unput está incluido en mi array de ciudades que recibo por props revuelvo true en otro caso false
                   checked={cities.includes(userObj.location.city) ? true : false} 
            />
          </li>
        )}
      </ul>
    </form>
  )
}

export default CityFilter;
