import React from 'react';
import Club from './Club';

const ClubList = (props) => {
  const lis = props.clubs.map((club, index) => {
    return (
      <li key={index}>
        <Club club={club} />
      </li>
    );
  });

  return <ul>{lis}</ul>;
};

export default ClubList;
