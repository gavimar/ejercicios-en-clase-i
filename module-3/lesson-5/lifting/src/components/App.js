import React from 'react';
import '../stylesheets/App.css';
import Form from './Form';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Form/>
      </div>
    );
  }
}

export default App;
