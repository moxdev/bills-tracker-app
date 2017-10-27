import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'containers/Home';
import Dashboard from 'components/Dashboard/Dashboard';
import FourOhFour from 'components/FourOhFour/FourOhFour';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/user/:id" component={Dashboard} />
      <Route component={FourOhFour} />
    </Switch>
  </main>
);

export default Main;
