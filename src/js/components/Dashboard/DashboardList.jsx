import React, { Component } from 'react';

import DashboardListItem from './DashboardListitem';

class DashboardList extends Component {
  render() {
    return (
      <ul className="dash-list">
        {Object.keys(this.props.items).map(key => (
          <DashboardListItem key={key} index={key} details={this.props.items[key]} />
        ))}
      </ul>
    );
  }
}

export default DashboardList;
