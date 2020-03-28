import React from 'react';
import ShowItem from './ShowItem';

function ShowList(props) {
  if (props.items.length === 0) {
    return (
      <div>
        <h2 className="title--medium">{props.title}</h2>
        <p className="text">{props.emptyListMessage}</p>
      </div>
    );
  } else {
    return (
      <div>
        <h2 className="title--medium">{props.title}</h2>
        <ul className="cards">
          {props.items.map(item => {
            return <ShowItem
              key={item.show.id}
              name={item.show.name}
              image={item.show.image.medium}
            />
          })}
        </ul>
      </div>
    );
  }
}

export default ShowList;
