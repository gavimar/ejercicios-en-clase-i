import React from 'react';
import HeaderForm from './HeaderForm';

function Header() {
  const handleInboxClick = cosas => {
    console.log('Me han clickado', cosas);
  };

  return (
    <header className="col2 mb-1">
      <div>
        <h1 className="title">
          <span className="fas fa-envelope-open-text"></span>
          Gmail
        </h1>
      </div>

      <HeaderForm name="Maricarmen" handleInbox={handleInboxClick} />
    </header>
  );
}

export default Header;
