import React from 'react';
import Form from './Form'

function Header(props) {
  console.log(props.handleSearch)
  return (
    <header>
      <h1 className="title--big">Buscador de series</h1>
      <Form
        handleSearch={props.handleSearch}
      />
    </header>
  );
}

export default Header;
