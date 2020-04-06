import React from 'react';

const Club = (props) => {
  const lis = props.club.members.map((member, index) => {
    return <li key={index}>{member}</li>;
  });

  return (
    <>
      <span className={props.club.fa}></span>
      <h2>{props.club.name}</h2>
      <h3>Members</h3>
      <ul>{lis}</ul>
    </>
  );
};

export default Club;
