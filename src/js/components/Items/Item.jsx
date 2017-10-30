import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <li className="item">
        <div className="card">
          <span>{this.props.details.title}</span>
          <span>{this.props.details.amount}</span>
          <span>{this.props.details.due}</span>
          <span>{this.props.details.paid}</span>
        </div>
      </li>
    );
  }
}

export default Item;
