import React from 'react';
import FormWithClassComponent from './FormWithClassComponent';
import FormWithFunctionalComponent from './FormWithFunctionalComponent';

class App extends React.Component {
  render() {
    return (
      <div className="col2">
        <FormWithClassComponent />
        <FormWithFunctionalComponent />
      </div>
    );
  }
}

export default App;
