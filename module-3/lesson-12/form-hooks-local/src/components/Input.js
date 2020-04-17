import React from 'react';

const Input = (props) => {

  const updateInputValue = (evt) => {
    props.handleInputValue(evt.currentTarget.name,evt.currentTarget.value);
  }

  return (
    <div className="input-wrapper">
      <label htmlFor={props.id}>{props.labelName}</label>
      <input id={props.id}
             name={props.name}
             type={props.type}
             value={props.value}
             checked={props.checked}
             onChange={updateInputValue}
             required
      />
    </div>
  )
}

export default Input;