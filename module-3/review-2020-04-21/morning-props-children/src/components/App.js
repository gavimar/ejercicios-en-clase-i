import React, { useState } from 'react';
import Help from './Help';

const App = () => {
  const [user, setUser] = useState({
    name: '',
    email: ''
  });

  // spread de objeto

  const handleChange = ev => {
    setUser({
      ...user,
      // name: user.name,
      // email: user.email,
      [ev.target.id]: ev.target.value
    });
  };

  // spread de array

  const paint = (first, second) => {
    console.log(first);
    console.log(second);
  };

  const numbers = [1, 2, 3];
  // paint(numbers[0], numbers[1], numbers[2]);
  paint(...numbers);
  // console.log([...numbers, ...numbers]);

  // eventos

  const handleClick = () => {
    console.log('Me han clickado');
  };
  console.log(user);
  return (
    <div>
      <form>
        <label htmlFor="name">Nombre: </label>
        <input type="text" id="name" onChange={handleChange} />
        <Help type="small">
          <span>Por favor rellena tu nombre </span>
          <span onDoubleClick={handleClick}>En mayúsculas </span>
          <span>Bien escrito </span>
        </Help>
        <label htmlFor="email">Email: </label>
        <input type="text" id="email" onChange={handleChange} />
        <Help>Por favor rellena tu email</Help>
      </form>
      <div>
        <h3>Previsualización:</h3>
        <p>Nombre: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
    </div>
  );
};

export default App;
