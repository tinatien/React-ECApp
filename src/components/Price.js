import React, { Component } from 'react';
import './Item.css';

const styles = {
  price: {
    width: '70%'
  }
};

class Price extends Component {
  render() {
    return(
      <div className="wrapper">
        <p className="item-subtitle">單價</p>
        <p style={styles.price}>$2700</p>
      </div>
    );
  }
}

export default Price;
