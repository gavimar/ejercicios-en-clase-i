import React from 'react';
import clubs from '../data/clubs';
import ClubList from './ClubList';

const App = () => {
  return (
    <div className="col2">
      <ClubList clubs={clubs} />
    </div>
  );
};

export default App;
