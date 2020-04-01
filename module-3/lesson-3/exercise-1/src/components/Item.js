import React from 'react';
import PropTypes from 'prop-types';

/*Aquí defino el componente que representa cada uno de los productos que voy a pintar*/
class Item extends React.Component {
  render() {
    return (
      <li className="item">
        {/*en cada lugar donde voy a recibir un dato incluyo una prop con el nombre que le voy a dar a esa prop*/}
        <h5 className="quantity">{this.props.quantity}</h5>
        <div>
          <h5>{this.props.name}</h5>
          <h6 className="text-muted">{this.props.description}</h6>
        </div>
        <div className="badge badge-info">{this.props.category}</div>
        <h5 className="price">{this.props.price}€</h5>
      </li>
    );
  }
}

/*He incorporado proptypes para tipar las variables, así me aseguro por ejemplo que lo que me viene por
props sea de un tipo de dato específico que yo le he dicho
de la misma manera establezco que si no me viene algún dato que por defecto la cantidad sea 0 */
Item.propTypes = {
  quantity: PropTypes.number
}

Item.defaultProps = {
  quantity: 0
}

export default Item;