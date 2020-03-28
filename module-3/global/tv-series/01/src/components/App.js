import React from 'react';
import Header from './Header';
import ShowDummy from './ShowDummy';
import ShowClass from './ShowClass';
import '../stylesheets/App.scss';

const api = [
  {
    name: 'Glow'
  },
  {
    name: 'Dexter'
  }
]

function App() {
  return (
    <div className="App">
      <Header />
      <ShowDummy name={api[0].name} gender="Comedy" />
      <ShowClass name="Dexter" gender="Comedy" />
    </div>
  );
}

export default App;
