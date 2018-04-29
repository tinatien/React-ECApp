import React, { Component } from 'react';
import ECStores from '../stores/ECStores';

const styles = {
  wrapper: {
    backgroundColor: '#250e44',
    display: 'flex',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  amounttxt: {
    color: 'white',
    marginLeft: '5%',
    letterSpacing: 2,
  },
  price: {
    color: 'white',
  },
  checkoutbtn: {
    backgroundColor: 'transparent',
    width: '15%',
    minWidth: 80,
    fontSize: 16,
    color: 'white',
    letterSpacing: 3,
    border: 'none',
    borderLeft: '1px solid white',
  }
};


class Checkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      price: ECStores.getPrice(),
    };

    this._onChange = this._onChange.bind(this);
  }

  _onChange() {
    this.setState({
      price: ECStores.getPrice(),
    });
  }

  componentDidMount(){
    ECStores.addChangeListener(this._onChange);
  }

  componentWillUnmount(){
    ECStores.removeChangeListener(this._onChange);
  }


  render() {
    return(
      <div style={styles.wrapper}>
        <p style={styles.amounttxt}>總金額</p>
        <p style={styles.price}>{this.state.price}</p>
        <button style={styles.checkoutbtn}>結帳</button>
      </div>
    );
  }
}

export default Checkout;
