import React from 'react';

const Filter = (props) => {

  const updateInputValue = (evt) => {
    props.handleInputValue(evt.currentTarget.value)
  }

	return (
    <form>
      <input type="text" value={props.value} onChange={updateInputValue}/>
    </form>
	);
};

export default Filter;
