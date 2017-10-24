import React, { Component } from 'react';
import { render } from 'react-dom';
import css from '../../styles/styles';

import maidenImage from '../assets/maiden.png';

export default class Hello extends Component {
  render() {
    return (
      <div className="main">
        <h1>Hello from Monica</h1>
        <img src={maidenImage} alt="Iron Maiden" />;
      </div>
    );
  }
}

render(<Hello />, document.getElementById('app'));
