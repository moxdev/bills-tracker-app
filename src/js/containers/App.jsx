import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Main from 'containers/Main';
import Header from 'components/Header/Header';

class App extends Component {
  render() {
    const state = this.props.appState;
    return (
      <div className="app-wrapper">
        <Header user={state.user} />
        <Main user={state.user} items={state.items} />
      </div>
    );
  }
}

export default App;

App.propTypes = {
  appState: PropTypes.object
};
