import React from 'react';
import ItemList from './ItemList.js';
import '../stylesheets/App.scss';

const items = [
  {
    name: 'Cereales con chocolate',
    description: 'Cereales rellenos de chocolate',
    quantity: 2,
    category: 'Cereales',
    price: 5
  },
  {
    name: 'Hamburguesa con queso',
    description: 'Hamburguesa rica y saludable',
    quantity: 1,
    category: 'Fast-food',
    price: 15
  },
  {
    name: 'Agua mineral',
    description: 'Agua de un charco del Himalaya',
    quantity: 2,
    category: 'Bebida',
    price: 5
  }
];


//En este caso estamos trabajando la variable global en app js que contiene un array de productos
//necesitaré un componente ItemList que se encargue de pintar esos productos
//y un componente que represente ese producto Item
//el que se va a encargar de pintar esos productos será ItemList por eso tengo que pasarle por props el array que tengo en App.js
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="App">
        {/* Aquí le paso por props a itemlist el array de items que va a pintar*/}
        <ItemList products={items}/>
      </div>
    );
  }
}

export default App;
