import React, { Component } from 'react';
import Logo from './Logo';
import Navbar from './Navbar';

class Header extends Component {
  render() {
    return (
      <header>
        <Logo />
        <Navbar user={this.props.user} />
      </header>
    );
  }
}

export default Header;
