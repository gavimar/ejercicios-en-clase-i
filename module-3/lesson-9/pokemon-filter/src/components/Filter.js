import React from 'react';

const Filter = (props) => {

  const updateCheckbox = () => {
    props.handleCheckbox()
  }

  return (
    <form className="filter">
      <label htmlFor="evolution">Evoluciones</label>
      <input onChange={updateCheckbox} type="checkbox" id="evolution" name="evolution" value="Evolución" checked={props.isEvolution}/>
    </form>

  )
}

export default Filter;