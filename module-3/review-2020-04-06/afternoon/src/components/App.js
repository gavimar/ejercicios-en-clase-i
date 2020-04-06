import React from 'react';
import clubs from '../data/clubs'
import '../stylesheets/App.css';
import ClubList from './ClubList';

class App extends React.Component {
  constructor(props) {
    super(props);
    /*Guardo en el estado el array de datos original*/
    this.state = {
      data:clubs
    }
  }

  render() {
    return (
      <div className="App">
        {/*Le paso a través de props el array de datos para pintarlo al componente que pinta mi listado de componentes Club.js*/}
        <ClubList dataList={this.state.data}/>
      </div>
    );
  }
}

export default App;
