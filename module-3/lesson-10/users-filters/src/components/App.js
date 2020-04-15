import React from 'react';
import '../stylesheets/App.css';
import fetchData from '../services/FetchData'
import GenderFilter from './GenderFilter.js';
import CityFilter from './CityFilter.js';
import UserList from './UserList';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleGender = this.handleGender.bind(this);
    this.handleCityCheckbox = this.handleCityCheckbox.bind(this);
    this.state = {
      data:[],
      gender:'',
      //creo un array que será el encargado de almacenar los valores de las ciudades en las que he clickado
      cities:[]
    }
  }

//FETCH
  componentDidMount(){
    fetchData()
      .then(data => {
        this.setState({
          data: data.results
        })
      })
  }

  //MANEJADOR DE GENDERFILTER
  handleGender(inputValue){
    this.setState({
      gender:inputValue
    })
  }

  //MANEJADOR DE CITYFILTER
  handleCityCheckbox(inputValue){
    //accedo a this.state.cities por destructuring para no repetir
    const {cities} = this.state;

    //establezco la condición que valorará si mi ciudad existe o no existe en mi array de ciudades
    //tengo que guardar los valores en un array porque tengo que manejar los valores de varios checkboxes

    //si el array de mi estado NO incluye la ciudad que me entra por los argumentos (recordar que esta el valor me viene por lifting desde CityFilter)
    //entonces seteo de nuevo el valor de mi array y le añado la nueva ciudad
    if(!cities.includes(inputValue)){
      this.setState(prevState => {
        return {
          cities: [...prevState.cities, inputValue]
        }
      })
    //en caso contrario tengo que eliminar la ciudad de mi array para controlar de nuevo el estado del checkbox
    //la idea es eliminar el elemento y actualizar el array de cities con el elemento eliminado
    //para eliminar un elemento de un array uso splice (viejo amigo), recordad que splice es un método que modifica el array original
    //por eso tengo que hacerme una copia de this.state.cities antes para no machacar nada
    //luego tengo que saber el índice del elemento que quiero eliminar con findIndex
    //después elimino el elemento de mi array copiado
    //actualizo el estado para que ahora this.state.cities sea igual que mi nuevo array que ya no incluye el elemento eliminado
    } else {
      const newArr = [...cities]//<---copio this.state.cities
      const currentCity = newArr.findIndex(city => city === inputValue);//<--me quedo con el índice
      newArr.splice(currentCity,1);//<--elimino el elemento
      this.setState({cities: newArr})//<--seteo de nuevo el estado con mi nuevo array
    }
  }

  render() {
    const {data,gender,cities} = this.state
    console.log(this.state.cities)
    return (
      <div className="App">
        <aside>
          <div className="city-wrapper">
            <p>Ciudades</p>
            <CityFilter handleCityCheckbox={this.handleCityCheckbox} data={data} cities={cities}/>
          </div>
          <div className="gender-wrapper">
            <p>Género</p>
            <GenderFilter handleGender={this.handleGender} gender={gender}/>
          </div>
        </aside>
        <UserList data={data} gender={gender} cities={cities}/>
      </div>
    );
  }
}

export default App;
