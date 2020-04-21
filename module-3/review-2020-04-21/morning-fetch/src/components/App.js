import React, { useState } from 'react';
import api from '../services/api';

const App = () => {
  const [shows, setShows] = useState([]);
  const [apiSuccess, setApiSuccess] = useState(true);

  const handleGetData = () => {
    api.get().then(data => {
      setShows(data);
    });
  };

  const handleSendData = () => {
    const data = {
      palette: 1,
      name: 'María García',
      job: 'Front-end developer',
      phone: '+34 666666666',
      email: 'mariagar@example.com',
      linkedin: 'mariagar',
      github: 'mariagar',
      photo: 'data:image/png;base64,2342ba...'
    };
    api.post(data).then(data => {
      setApiSuccess(data.success);
    });
  };

  return (
    <div>
      <h1>Aprendiendo Fetch</h1>
      <button className="form__btn" onClick={handleGetData}>
        Traer datos del API
      </button>
      <button className="form__btn" onClick={handleSendData}>
        Enviar datos al API
      </button>
      <p>Número de series: {shows.length}</p>
      <p>Estado del servidor: {apiSuccess ? 'ok' : 'ko'}</p>
    </div>
  );
};

export default App;
