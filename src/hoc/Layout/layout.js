import React, { Component } from 'react';
// CSS
import './layout.css';

// Components
import Header from '../../Components/Header/Header';

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
