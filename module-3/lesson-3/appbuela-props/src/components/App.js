import React from 'react';
import Mother from './Mother';

const Appbuela = () => {
  return (
    <div>
      Abuela
      <Mother name='Maricarmen' age={72} money={5} />
      <Mother name='Teresa' age={68} money={10} />
    </div>
  );
};

export default Appbuela;

// Mother({
//   name: 'Maricarmen'
// })
// Mother({
//   name: 'Teresa'
// })
