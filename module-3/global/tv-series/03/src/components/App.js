import React from 'react';
import Header from './Header';
import ShowList from './ShowList';
import shows from '../api/data.json';

const favs = [];

function handleSearch(data) {
  console.log(data);
}

function App() {
  return (
    <div>
      <Header handleSearch={handleSearch} />
      <div className="col2">
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
    </div>
  );
}

export default App;
