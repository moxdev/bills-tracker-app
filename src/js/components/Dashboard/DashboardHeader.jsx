import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DashboardHeader extends Component {
  render() {
    return (
      <div className="dashboard-header">
        <img src="https://api.adorable.io/avatars/80/abott@adorable.png" alt="" />
        <h1>Welcome {this.props.user.name}</h1>
      </div>
    );
  }
}

export default DashboardHeader;

DashboardHeader.propTypes = {
  user: PropTypes.object,
  name: PropTypes.string
};
