import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import api from '../services/api';

const App = () => {
  const [shows, setShows] = useState([]);

  // events

  const handleGetData = () => {
    api.get().then(data => {
      setShows(data);
    });
  };

  // render

  const renderShows = () => {
    return shows.map(show => {
      return (
        <li key={show.id}>
          <Link to={`/show/${show.id}`}>{show.name}</Link>
        </li>
      );
    });
  };

  const renderShow = props => {
    const showId = parseInt(props.match.params.id);
    const show = shows.find(show => show.id === showId);
    if (show) {
      return (
        <div>
          <p>{show.name}</p>
          <img src={show.image} alt={show.name} />
        </div>
      );
    } else {
      return <p>Serie no encontrada</p>;
    }
  };

  return (
    <div>
      <h1>Aprendiendo Fetch</h1>
      <button className="form__btn" onClick={handleGetData}>
        Traer datos del API
      </button>
      <h2>Series</h2>
      <div className="col2">
        <ul>{renderShows()}</ul>
        <Switch>
          <Route path="/show/:id" render={renderShow} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
