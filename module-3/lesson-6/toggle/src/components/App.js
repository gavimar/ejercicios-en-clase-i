import React from 'react';
import '../stylesheets/App.css';
import CollapseList from './CollapseList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleCollapse = this.handleCollapse.bind(this)
    this.state = {
      activePanel: ''
    }
  }

  handleCollapse(targetId) {
    this.setState({activePanel: targetId})
  }
  
  render() {
    return (
      <div className="App">
        <CollapseList handleCollapse={this.handleCollapse} activePanel={this.state.activePanel}/>
      </div>
    );
  }
}

export default App;
