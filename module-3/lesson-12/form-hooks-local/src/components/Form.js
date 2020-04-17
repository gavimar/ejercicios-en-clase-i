import React from 'react';
import Input from './Input';

const Form = (props) => {
       console.log(props)
  return (
       <form method="POST" action="">
              <div className="options">
                     <Input type="radio"
                            name="palette"
                            id="palette-1"
                            labelName="Color 1"
                            value="1"
                            handleInputValue={props.handleInputValue}
                            checked={props.checked === "1" ? true : false}
                     />
                     <Input type="radio"
                            name="palette"
                            id="palette-2"
                            labelName="Color 2"
                            value="2"
                            handleInputValue={props.handleInputValue}
                            checked={props.checked === "2" ? true : false}
                     />
              </div>

              <Input type="text"
                     name="name"
                     id="user-name"
                     labelName="Nombre completo"
                     value={props.name}
                     handleInputValue={props.handleInputValue}
              />
              <Input type="tel"
                     name="phone"
                     id="user-phone"
                     labelName="Teléfono"
                     value={props.phone}
                     handleInputValue={props.handleInputValue}
              />
       </form>
  )
}

export default Form;