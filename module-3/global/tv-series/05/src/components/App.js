import React from "react";
import Header from "./Header";
import ShowList from "./ShowList";
import Loader from "./Loader";
import getDataFromApi from '../api/api'

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      shows: [],
      favs: [],
      searchText: '',
      loading: false
    };
    this.addFavorite = this.addFavorite.bind(this);
    this.search = this.search.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  addFavorite(favId) {
    const favShow = this.state.shows.find(show => show.id === favId);
    // esto que sigue: bien, cremita
    this.setState(function (prevState) {
      prevState.favs.push(favShow);
      return {
        favs: prevState.favs
      }
    })
    // esto que sigue: mal, caca
    // this.state.favs.push(favShow);
    // this.setState({
    //   favs: this.state.favs
    // });
  }

  search() {
    console.log("Buscando...", this.state.searchText);
    this.setState({
      loading: true
    });
    getDataFromApi(this.state.searchText)
      .then(data => {
        this.setState({
          shows: data,
          loading: false
        });
      });
  }

  handleSearch(searchText) {
    this.setState({ searchText: searchText });
  }

  render() {
    console.log('Renderizando', this.state.favs)
    return (
      <div>
        <Loader isLoading={this.state.loading} />
        <Header
          search={this.search}
          handleSearch={this.handleSearch}
        />
        <p>La serie buscada es: {this.state.searchText}</p>
        <div className="col2">
          <ShowList
            title="Resultados"
            emptyListMessage="No hay resultados"
            items={this.state.shows}
            addFavorite={this.addFavorite}
          />
          <ShowList
            title="Favoritos"
            emptyListMessage="No hay favoritas"
            items={this.state.favs}
          />
        </div>
      </div>
    );
  }
}

export default App;
