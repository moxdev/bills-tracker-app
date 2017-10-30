import React, { Component } from 'react';

import DashboardListItem from 'components/Dashboard/DashboardListitem';

class DashboardList extends Component {
  renderItem = key => {
    const item = this.props.items[key];

    return <li key={key}>{item.id}</li>;
  };
  render() {
    // const need = Object.keys(this.props.items).map(key => <DashboardListItem key={key} index={key} />);
    // console.log(need[0]);
    return <ul className="dash-list">{Object.keys(this.props.items).map(this.renderItem)}</ul>;
  }
}

export default DashboardList;
