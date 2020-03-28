import React from 'react';
import ShowItem from './ShowItem';

function ShowList(props) {
  if (props.items.length === 0) {
    return (
      <div>
        <h2>{props.title}</h2>
        <p>{props.emptyListMessage}</p>
      </div>
    );
  } else {
    return (
      <div>
        <h2>{props.title}</h2>
        <ol>
          {props.items.map(item => {
            return <ShowItem
              key={item.show.id}
              name={item.show.name}
            />
          })}
        </ol>
      </div>
    );
  }
}

export default ShowList;
