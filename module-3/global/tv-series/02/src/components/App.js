import React from 'react';
import Header from './Header';
import ShowList from './ShowList';
import shows from '../api/data.json';
import '../stylesheets/App.scss';

const favs = [];

function App() {
  return (
    <div className="App">
      <Header />
      <ShowList
        title="Resultados"
        emptyListMessage="No hay resultados"
        items={shows}
      />
      <ShowList
        title="Favoritos"
        emptyListMessage="No hay series favoritas"
        items={favs}
      />
    </div>
  );
}

export default App;
