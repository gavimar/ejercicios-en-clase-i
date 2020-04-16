import React from 'react';
import '../stylesheet/App.css';
import fetchPokemons from '../services/FetchData';
import PokeList from './PokeList';
import PokemonDetail from './PokemonDetail';
import Filter from './Filter';
import { Switch,Route } from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.renderPokemonDetail = this.renderPokemonDetail.bind(this);
    this.state={
      data:[],
      isEvolution:false
    }
  }

  componentDidMount(){
    fetchPokemons()
      .then(data => {
        this.setState ({
          data:data
        })
      })
  }

  handleCheckbox() {
    this.setState(prevState => {
      return {
        isEvolution: !prevState.isEvolution
      }
    })
  }

  renderPokemonDetail(props){
    console.log(props)
    const urlId = props.match.params.id;
    const pokemons = this.state.data;
    for(let pokemonObj of pokemons) {
      if(pokemonObj.id === parseInt(urlId)) {
        return <PokemonDetail pokemon={pokemonObj}/>
      }
    }
  }

  render() {
    const {data,isEvolution} = this.state;
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <h1>Mi lista de Pokemon</h1>
            <Filter handleCheckbox={this.handleCheckbox} isEvolution={isEvolution}/>
            {!data ?
            "estoy cargando..."
            :
            <PokeList isEvolution={isEvolution} dataList={data} />
            }
          </Route>
          <Route path="/pokemon/:id" render={this.renderPokemonDetail}/>
        </Switch>

      </div>
    );
  }
}

export default App;
