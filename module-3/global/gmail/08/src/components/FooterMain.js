import React from 'react';
import { Link } from 'react-router-dom';

const FooterMain = () => {
  return (
    <div className="col2">
      <small className="text--primary-light">
        <Link className="nav__link text--decoration--none" to="/privacy">
          Política de privacidad
        </Link>
        /
        <Link className="nav__link text--decoration--none" to="/cookies">
          Cookies
        </Link>
      </small>
      <small className="text--primary-light text-align-right">
        Ejercicio de React / Desarrollado con ❤ Adalab
      </small>
    </div>
  );
};

export default FooterMain;
