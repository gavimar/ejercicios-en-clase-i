import React from 'react';

const Filter = props => {
  const updateInputValue = (evt) => {
    props.handleInputValue(evt.currentTarget.value)
  }

  const updateCheckbox = (evt) => {
    props.handleCheckboxes(evt.currentTarget.value)
  }


  console.log(props)
	return (
		<form>
			<input type="text" value={props.value} onChange={updateInputValue} />
      <div className="ingredients">
        <label htmlFor='banana'>Banana</label>
        <input type="checkbox" value='banana' id='banana' onChange={updateCheckbox} name='banana' checked={props.ingredients.includes('banana') ? true : false}/>
        <label htmlFor='banana'>Apple</label>
        <input type="checkbox" value='apple' id='apple' onChange={updateCheckbox} name='apple' checked={props.ingredients.includes('apple') ? true : false}/>
      </div>
    </form>
	);
};

export default Filter;
