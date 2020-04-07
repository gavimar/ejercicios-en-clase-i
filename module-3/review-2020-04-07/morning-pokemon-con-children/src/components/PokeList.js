import React from 'react';

const PokeList = (props) => {
  return (
    <div>
      <section>
        <h3>Listado</h3>
        <ul className="cards">{props.children}</ul>
      </section>
    </div>
  );
};

export default PokeList;
