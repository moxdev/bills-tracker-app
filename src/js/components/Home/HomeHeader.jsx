import React, { Component } from 'react';

class HomeHeader extends Component {
  render() {
    return (
      <div className="home-header-wrapper">
        <img src="https://api.adorable.io/avatars/80/abott@adorable.png" alt="" />
        <h1>Welcome 'user.name'</h1>
      </div>
    );
  }
}

export default HomeHeader;
