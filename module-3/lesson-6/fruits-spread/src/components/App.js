import React from 'react';
import '../App.css';
import Fruits from './Fruits';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveFruit = this.handleRemoveFruit.bind(this);
    this.handleNewFruit = this.handleNewFruit.bind(this);
    this.updatePopularFruits = this.updatePopularFruits.bind(this);
    this.state = {
      popularFruits: ['kiwi', 'pinneaple', 'strawberry'],
      newFruit:''
    }
  }

  handleNewFruit(targetValue){
    this.setState({
      newFruit:targetValue
    })
  }

  updatePopularFruits(){
    this.setState(prevState => {
      return {
        popularFruits: [
          ...prevState.popularFruits, this.state.newFruit
        ],
        newFruit:''
      }
    })
  }

  handleRemoveFruit(dataFruitValue){
    this.setState(prevState => {
      const updatePopularFruits = prevState.popularFruits.filter(singleFruit => singleFruit !== dataFruitValue)
      return {
        popularFruits: [
          ...updatePopularFruits
        ]
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Fruits fruits={this.state.popularFruits}
                handleNewFruit={this.handleNewFruit}
                handleRemoveFruit={this.handleRemoveFruit}
                updatePopularFruits={this.updatePopularFruits}
                inputValue={this.state.newFruit}
        />
      </div>
    );
  }
}

export default App;
