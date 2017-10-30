import React, { Component } from 'react';

class DashboardListItem extends Component {
  render() {
    const item = this.props.details[id];
    console.log(item);
    return <li>listitem</li>;
  }
}

export default DashboardListItem;
