import React, { Component } from 'react';
// CSS
import './layout.css';

// Components
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

class Layout extends Component {
  state = {
    showNav: false
  };

  toggleSideNav = action => {
    this.setState({
      showNav: action
    });
  };

  render() {
    return (
      <div>
        <Header
          showNav={this.state.showNav}
          onHideNav={() => this.toggleSideNav(false)}
          onOpenNav={() => this.toggleSideNav(true)}
        />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
