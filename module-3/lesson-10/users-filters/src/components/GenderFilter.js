import React from 'react';

const GenderFilter = (props) => {
  const updateInputValue = (evt) => {
    props.handleGender(evt.currentTarget.value);
  }

  return(
    <form className="filter">
      <div>
        <label htmlFor="female">Femenino</label>
        <input onChange={updateInputValue} type="radio" value="female" name="gender" checked={props.gender === 'female' ? true : false}/>
      </div>
      <div>
        <label htmlFor="male">Masculino</label>
        <input onChange={updateInputValue} type="radio" value="male" name="gender" checked={props.gender === 'male' ? true : false}/>
      </div>
    </form>
  )
}

export default GenderFilter;
