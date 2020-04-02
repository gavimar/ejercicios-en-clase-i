import React from 'react';
import HeaderForm from './HeaderForm';

const name = 'foo';

function Header(props) {
  return (
    <div className={'btn btn-' + props.title.toUpperCase()}>
      <hr />
      {props.title} /{name}
      <hr />
      {`btn btn-${props.title}`}
      <hr />
      <hr />
      <HeaderForm />
    </div>
  );
}

export default Header;
