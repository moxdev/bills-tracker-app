import React from 'react';
import { Link } from 'react-router-dom';

import maidenImage from 'assets/maiden.png';

const Logo = () => (
  <Link to={'/'}>
    <img className="logo" src={maidenImage} alt="Up The Irons!" />
  </Link>
);

export default Logo;
