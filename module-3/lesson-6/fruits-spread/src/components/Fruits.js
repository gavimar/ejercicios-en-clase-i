import React from 'react';

const Fruits = (props) => {

  const addNewFruit = (evt) => {
    props.handleNewFruit(evt.target.value)
  }

  const updateFruits = (evt) => {
    evt.preventDefault();
    props.updatePopularFruits();
  }

  const removeFruit = (evt) => {
    props.handleRemoveFruit(evt.currentTarget.dataset.fruit)
  }


  return(
    <div>
        <ul>
          {props.fruits.map((singleFruit,index) =>
            <li key={index}>
              {singleFruit}
              <button type="button"
                      data-fruit={singleFruit}
                      onClick={removeFruit}
              >
                Eliminar
              </button>
            </li>
          )}
        </ul>
        <form>
          <input  type="text"
                  onChange={addNewFruit}
                  value={props.inputValue}
          />
          <button type="submit"
                  onClick={updateFruits}
          >
            Añadir
          </button>
        </form>
    </div>
  )
}

export default Fruits;