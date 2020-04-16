import React from 'react';
import { Link } from 'react-router-dom';

function EmailItem(props) {
  const handleSelectEmail = () => {
    props.handleSelectEmail(props.id);
  };

  const handleDeleteEmail = ev => {
    ev.stopPropagation();
    props.handleDeleteEmail(props.id);
  };

  let deletedClass = props.deleted === true ? 'text--decoration--through' : '';
  let readClass = props.read === false ? 'text--bold' : '';
  return (
    <tr className={`cursor-pointer ${deletedClass} ${readClass}`} onClick={handleSelectEmail}>
      <td>
        <Link className="text--decoration--none" to={`email/${props.id}`}>
          {props.from}
        </Link>
      </td>
      <td>
        <Link className="text--decoration--none" to={`email/${props.id}`}>
          {props.subject}
        </Link>
      </td>
      <td>
        <Link className="text--decoration--none" to={`email/${props.id}`}>
          {props.time}
        </Link>
      </td>
      <td className="text-align-right">
        <button className="form__btn fas fa-trash" onClick={handleDeleteEmail}></button>
      </td>
    </tr>
  );
}

export default EmailItem;
