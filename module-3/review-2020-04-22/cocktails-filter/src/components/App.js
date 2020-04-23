import React from 'react';
import '../stylesheets/App.css';
import fetchData from '../services/FetchData';
import DrinkList from './DrinkList';
import Filter from './Filter';
import DrinkDetails from './DrinkDetails';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.handleCheckboxes = this.handleCheckboxes.bind(this);
		this.handleInputValue = this.handleInputValue.bind(this);
		this.renderDrinkDetail = this.renderDrinkDetail.bind(this);
		this.state = {
			data: [],
			value: '',
			ingredients: []
		};
	}

	//Como al arranque me traigo cocktails seteo el estado de data una vez he resuelto la promesa
	componentDidMount() {
		fetchData().then(data => {
			this.setState({
				data: data.drinks
			});
		});
	}

	//función controladora de mi input, recibo el valor del input por lifting y actualizo el valor a través de setState
	handleInputValue(inputValue) {
		this.setState({
			value: inputValue
		});
	}

	handleCheckboxes(inputValue) {
		const { ingredients } = this.state;

		if (!ingredients.includes(inputValue)) {
			this.setState(prevState => {
				return {
					ingredients: [...prevState.ingredients, inputValue]
				};
			});
		} else {
			const newArr = [...ingredients]; //<---copio this.state.ingredients
			const currentIngredient = newArr.findIndex(ingredient => ingredient === inputValue); //<--me quedo con el índice
			newArr.splice(currentIngredient, 1); //<--elimino el elemento
			this.setState({ ingredients: newArr }); //<--seteo de nuevo el estado con mi nuevo array
		}
	}

	renderDrinkDetail(props) {
		const routeId = props.match.params.id;
		const drinks = this.state.data;

		for (let drink of drinks) {
			if (drink.idDrink === routeId) {
				return <DrinkDetails drinkObj={drink} />;
			}
		}
	}

	render() {
		const { ingredients, data, value } = this.state;
		return (
			<div className="App">
				<Switch>
					<Route exact path="/">
						<Filter
							handleInputValue={this.handleInputValue}
							handleCheckboxes={this.handleCheckboxes}
							ingredients={ingredients}
						/>
						<DrinkList
							drinks={data}
							inputValue={value}
							ingredients={ingredients}
						/>
					</Route>
					<Route path="/drink/:id" render={this.renderDrinkDetail} />
				</Switch>
			</div>
		);
	}
}

export default App;
