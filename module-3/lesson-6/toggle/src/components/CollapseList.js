import React from 'react';
import CollapseItem from './CollapseItem';

class CollapseList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="collapse-list">
        <CollapseItem handleCollapse = {this.props.handleCollapse}
                      activePanel = {this.props.activePanel}
                      id = 'collapse-1'
        >
          <h1>Contenido del colapsable 1</h1>
          <p>texto 1 agfkashdfkhasdf</p>
        </CollapseItem>

        <CollapseItem handleCollapse = {this.props.handleCollapse}
                      activePanel = {this.props.activePanel}
                      id = 'collapse-2'
        >
          <h1>Contenido del colapsable 2</h1>
          <p>texto 2 agfkashdfkhasdf</p>
        </CollapseItem>

        <CollapseItem handleCollapse={this.props.handleCollapse}
                      activePanel={this.props.activePanel}
                      id = 'collapse-3'
        >
          <h1>Contenido del colapsable 3</h1>
          <p>texto 3 agfkashdfkhasdf</p>
        </CollapseItem>
      </div>
    );
  }
}

export default CollapseList;
