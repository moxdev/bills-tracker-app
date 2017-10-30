import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Home from 'containers/Home';
import Dashboard from 'containers/Dashboard';
import FourOhFour from 'components/FourOhFour/FourOhFour';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/user/:id" render={() => <Dashboard user={this.props.user} items={this.props.items} />} />
          <Route component={FourOhFour} />
        </Switch>
      </main>
    );
  }
}

export default Main;

Main.propTypes = {
  user: PropTypes.object,
  items: PropTypes.object
};
