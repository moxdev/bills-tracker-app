import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DashboardListItem extends Component {
  render() {
    return (
      <li className="list-item">
        <Link to={`/item/${this.props.details.id}`}>{this.props.index}</Link>
      </li>
    );
  }
}

export default DashboardListItem;
