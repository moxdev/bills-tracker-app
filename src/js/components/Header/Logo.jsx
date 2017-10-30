import React from 'react';
import { Link } from 'react-router-dom';

import Eddie from 'assets/eddie.gif';

const Logo = () => (
  <Link to={'/'}>
    <img className="logo" src={Eddie} alt="Up The Irons!" />
  </Link>
);

export default Logo;
