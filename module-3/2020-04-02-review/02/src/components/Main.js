import React from 'react';
import '../stylesheets/App.scss';
import Card from './Card';

class Main extends React.Component {
  render() {
    debugger;
    console.log(this.props);
    return (
      <div>
        Main: {this.props.name}
        <Card cardName={this.props.name} job={this.props.job} />
      </div>
    );
  }
}

export default Main;
