import React from "react";
import Header from "./Header";
import ShowList from "./ShowList";
import getDataFromApi from '../api/api'

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      shows: [],
      favs: [],
      searchText: ''
    };
    this.search = this.search.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  search() {
    console.log("Buscando...", this.state.searchText);
    getDataFromApi(this.state.searchText)
      .then(data => {
        this.setState({
          shows: data
        })
      });
  }

  handleSearch(searchText) {
    this.setState({ searchText: searchText });
  }

  render() {
    return (
      <div>
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
