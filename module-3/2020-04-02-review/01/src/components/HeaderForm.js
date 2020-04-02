import React from 'react';

class HeaderForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(ev) {
    //
  }

  render() {
    return (
      <div className="header-form">
        Header form
        <p onClick={this.handleClick}>Lorem</p>
      </div>
    );
  }
}

export default HeaderForm;
