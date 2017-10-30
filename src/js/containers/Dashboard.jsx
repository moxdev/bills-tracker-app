import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DashboardHeader from 'components/Dashboard/DashboardHeader';
import DashboardList from 'components/Dashboard/DashboardList';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <DashboardHeader user={this.props.user} />
        <DashboardList items={this.props.items} />
      </div>
    );
  }
}

export default Dashboard;

Dashboard.propTypes = {
  user: PropTypes.object,
  items: PropTypes.object
};
