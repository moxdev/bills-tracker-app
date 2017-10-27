import React, { Component } from 'react';

import Main from 'containers/Main';
import Header from 'components/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;