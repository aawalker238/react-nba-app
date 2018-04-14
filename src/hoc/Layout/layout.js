import React, { Component } from 'react';

import './layout.css';

class Layout extends Component {
  render() {
    return (
      <div>
        <h1>Layout</h1>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
