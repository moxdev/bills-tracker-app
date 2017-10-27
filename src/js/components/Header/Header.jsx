import React, { Component } from 'react';
import Logo from './Logo';
import Navbar from './Navbar';

class Header extends Component {
  render() {
    return (
      <header>
        <Logo />
        <Navbar />
      </header>
    );
  }
}

export default Header;