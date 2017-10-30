import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemList from 'components/Items/ItemsList';

class Items extends Component {
  render() {
    return (
      <div className="items-container">
        <ItemList items={this.props.items} />
      </div>
    );
  }
}

export default Items;
