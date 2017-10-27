import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="main-nav">
        <Link to={'/'}>Home</Link>
        <Link to={'/'}>About</Link>
      </nav>
    );
  }
}

export default Navbar;