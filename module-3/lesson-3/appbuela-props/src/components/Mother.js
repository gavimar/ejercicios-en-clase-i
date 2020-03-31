import React from 'react';
import Daughter from './Daughter';

class Mother extends React.Component {
  // constructor() {
  //   this.props = {a las cosas que me pasan desde arriba}
  // }

  render() {
    console.log(this.props);
    const motherName = this.props.name;
    return (
      <div>
        Madre: {motherName} Edad: {this.props.age} Dinero: {this.props.money}
        <Daughter money={this.props.money} />
      </div>
    );
  }
}

export default Mother;

// function Mother (props) {
//   console.log(props.name)
//   Daughter({
//     money: props.money
//   })
// }
