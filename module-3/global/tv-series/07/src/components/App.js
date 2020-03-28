import React from "react";
import Header from "./Header";
import ShowList from "./ShowList";
import Loader from "./Loader";
import getDataFromApi from "../api/api";
import localStorage from "../localStorage/";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: [],
      favs: [],
      searchText: localStorage.get("searchText", ""),
      loading: false
    };
    this.toggleFavorite = this.toggleFavorite.bind(this);
    this.search = this.search.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  toggleFavorite(favId) {
    const favShow = this.state.shows.find(show => show.id === favId);
    this.setState(function(prevState) {
      const favIndex = this.state.favs.findIndex(show => show.id === favId);
      if (favIndex === -1) {
        prevState.favs.push(favShow);
      } else {
        prevState.favs.splice(favIndex, 1);
      }
      return {
        favs: prevState.favs
      };
    });
  }

  search() {
    this.setState({
      loading: true
    });
    getDataFromApi(this.state.searchText).then(data => {
      this.setState({
        shows: data,
        loading: false
      });
    });
  }

  handleSearch(searchText) {
    this.setState({ searchText: searchText });
  }

  componentDidUpdate() {
    localStorage.set("searchText", this.state.searchText);
  }

  render() {
    return (
      <div>
        <Loader isLoading={this.state.loading} />
        <Header
          searchText={this.state.searchText}
          search={this.search}
          handleSearch={this.handleSearch}
        />
        <div className="col2">
          <ShowList
            title="Resultados"
            emptyListMessage="No hay resultados"
            items={this.state.shows}
            btnText="Añadir"
            toggleFavorite={this.toggleFavorite}
          />
          <ShowList
            title="Favoritos"
            emptyListMessage="No hay favoritas"
            items={this.state.favs}
            btnText="Quitar"
            toggleFavorite={this.toggleFavorite}
          />
        </div>
      </div>
    );
  }
}

export default App;
