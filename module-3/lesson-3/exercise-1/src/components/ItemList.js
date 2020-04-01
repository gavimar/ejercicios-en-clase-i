import React from 'react';
import Item from './Item';

const ItemList = (props) => {
  /*Es buena idea consolear las props para ver lo que me llega, si lo miro en devtools veo que me llega el array de productos de mi padre App*/
  console.log(props)
  return(
    <ul>
      {/* aquí es donde he definido las props de mi componente (que recordemos valen por nuestro array 
      de productos que me llega desde App)
      primero filtro los productos para que se quede solamente con aquellos que cumplen la condición del filtro y después lod pinto
      (si elimino el filter pintaré todos los productos)
      */}
      {props.products.filter(object => object.price < 10).map((object,index) => 
      /* por cada object de mi array pintaré un Item con los datos que me vienen del objeto representado en cada
      iteración de ese bucle y se lo paso a su vez por props al componente Item para que lo renderize
      key es una prop especial que añado cuando estoy pintando listas a la que le tengo que pasar el index para que sepa react en cada momento que elemento tiene que repintar
      */
        <Item 
          key = {index}
          quantity = {object.quantity}
          name = {object.name}
          description = {object.description}
          category = {object.category}
          price = {object.price}
        />
        )}
    </ul>
  )
}

export default ItemList;