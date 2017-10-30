import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AppState extends Component {
  state = {
    user: {
      id: '123',
      name: 'Moxy Max',
      email: 'moxy@mymox.com'
    },
    items: {
      bill1: {
        id: 1,
        title: 'DANJA',
        amount: 9,
        due: 'Thu May 23 1974 00:53:28 GMT-0400 (EDT)',
        paid: 'Wed Sep 17 2003 02:19:03 GMT-0400 (EDT)'
      },
      bill2: {
        id: 2,
        title: 'VIASIA',
        amount: 3,
        due: 'Sun Aug 03 2008 02:15:54 GMT-0400 (EDT)',
        paid: 'Thu Sep 24 1981 02:31:10 GMT-0400 (EDT)'
      },
      bill3: {
        id: 3,
        title: 'EBIDCO',
        amount: 6,
        due: 'Mon Apr 24 1989 22:52:42 GMT-0400 (EDT)',
        paid: 'Fri Jul 29 1983 13:11:38 GMT-0400 (EDT)'
      },
      bill4: {
        id: 4,
        title: 'UNCORP',
        amount: 2,
        due: 'Sat Apr 09 1983 20:50:14 GMT-0500 (EST)',
        paid: 'Wed May 02 1973 03:42:58 GMT-0400 (EDT)'
      },
      bill5: {
        id: 5,
        title: 'LUNCHPAD',
        amount: 1,
        due: 'Sun Feb 18 1973 06:47:42 GMT-0500 (EST)',
        paid: 'Tue Apr 25 1972 16:27:17 GMT-0500 (EST)'
      },
      bill6: {
        id: 6,
        title: 'BLURRYBUS',
        amount: 4,
        due: 'Sat Sep 18 1999 00:12:04 GMT-0400 (EDT)',
        paid: 'Fri Dec 27 2002 13:26:39 GMT-0500 (EST)'
      }
    }
  };

  setAppState = (newState, callback) => {
    this.setState(newState, callback);
  };

  render() {
    return (
      <div className="AppState">
        {React.Children.map(this.props.children, child => {
          return React.cloneElement(child, {
            appState: this.state,
            setAppState: this.setAppState
          });
        })}
      </div>
    );
  }
}

export default AppState;

AppState.propTypes = {
  children: PropTypes.node
};
