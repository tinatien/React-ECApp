import React, { Component } from 'react';
import './Item.css';
import ItemPhoto from './ItemPhoto.js';
import Price from './Price.js';
import ColorSelector from './ColorSelector.js';
import SizeSelector from './SizeSelector.js';
import AmountSelector from './AmountSelector.js';

const styles = {
  wrapper: {
    position: 'absolute',
    overflow: 'auto',
    height: '90%',
    width: '100%',
  },
};

class ItemContent extends Component {
  render() {
    return (
      <div style={styles.wrapper}>
        <ItemPhoto />
        <div>
          <h1 className="item-title">Adidas Stan Smith 休閒鞋</h1>
        </div>
        <Price />
        <ColorSelector />
        <SizeSelector />
        <AmountSelector />
      </div>
    );
  }
}

export default ItemContent;
