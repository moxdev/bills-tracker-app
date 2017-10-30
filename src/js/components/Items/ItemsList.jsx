import React, { Component } from 'react';

import Item from './Item';

class ItemsList extends Component {
  render() {
    return (
      <ul className="item-list">
        {Object.keys(this.props.items).map(key => <Item key={key} index={key} details={this.props.items[key]} />)}
      </ul>
    );
  }
}

export default ItemsList;
