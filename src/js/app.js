import React, { Component } from 'react';
import { render } from 'react-dom';
import css from '../../styles/styles';

export default class Hello extends Component {
  render() {
    return <div>Hello from Monica</div>;
  }
}

render(<Hello />, document.getElementById('app'));
