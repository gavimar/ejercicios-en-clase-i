import React from 'react';
import '../stylesheets/App.css';
import fetchData from '../services/FetchData';
import DrinkList from './DrinkList';
import Filter from './Filter';
import DrinkDetails from './DrinkDetails';
import { Switch,Route } from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputValue = this.handleInputValue.bind(this);
    this.renderDrinkDetail = this.renderDrinkDetail.bind(this);
    this.state = {
      data: [],
      value:''
    }
  }

  //Como al arranque me traigo cocktails seteo el estado de data una vez he resuelto la promesa
  componentDidMount() {
    fetchData()
      .then(data => {
        this.setState({
          data: data.drinks
        })
      })
  }

  //función controladora de mi input, recibo el valor del input por lifting y actualizo el valor a través de setState
  handleInputValue(inputValue){
    this.setState({
      value: inputValue
    })
  }

//función que renderiza cada uno de los cocktails en función del id de la ruta
  renderDrinkDetail(props){
    console.log(props)
    //esto me lo pasa router son datos que nos llegan de la url
    const routeId = props.match.params.id;
    const drinks = this.state.data;
    //recorro mi estado si el id del objeto coincide con el id que me llega de la url retorno el componente DrinkDetails con la info
    //correspondiente, darse cuenta que lo que mando es el objeto entero a través de props
    for (let drink of drinks){
      if(drink.idDrink === routeId){
        return <DrinkDetails drinkObj={drink}/>
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Filter handleInputValue={this.handleInputValue} />
            <DrinkList drinks={this.state.data} inputValue={this.state.value}/>
          </Route>
          <Route path="/drink/:id" render={this.renderDrinkDetail}/>
        </Switch>
      </div>
    );
  }
}

export default App;
