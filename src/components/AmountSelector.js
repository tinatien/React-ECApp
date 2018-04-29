import React, { Component } from 'react';
import './Item.css';
import ECStores from '../stores/ECStores';
import ECActions from '../actions/ECActions';
import increase from '../images/add.png';
import decrease from '../images/minus.png';

const styles = {
  amountwrapper:{
    display: 'flex',
    border: '1px solid black',
    width: '70%'
  },
  increasebtn: {
    flex: 1,
    background: 'transparent',
    backgroundImage: `url(${increase})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
    border: 'none',
    outline: 'none',
    width: 40,
    height: 40
  },
  decreasebtn: {
    flex: 1,
    background: 'transparent',
    backgroundImage: `url(${decrease})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
    border: 'none',
    outline: 'none',
    width: 40,
    height: 40
  },
  stock: {
    fontSize: '0.8em',
    color: 'red',
    margin: 0,
    marginRight: '10%',
    marginBottom: -10,
    textAlign: 'right',
  },
  none: {
    display: 'none',
  },
  inputtxt: {
    width: '60%',
    fontSize: '1em',
    textAlign: 'center',
    borderLeft: '1px solid black',
    borderRight: '1px solid black',
    borderTop: 'none',
    borderBottom: 'none'
  }
};


class AmountSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: ECStores.getCount(),
      stock: ECStores.getStock(),
    };
    this._onChange = this._onChange.bind(this);
  }

  _onChange() {
    this.setState({
      count: ECStores.getCount(),
      stock: ECStores.getStock()
    });
  }

  updateValue(event){
    this.setState({
      count: event.target.value,
    }, () => ECActions.chooseAmount(this.state.count));
  }

  handleKeyDown(event){
    if (this.state.count >= this.state.stock){
      this.setState({
        count: this.state.stock,
      }, () => ECActions.chooseAmount(this.state.count));
    } else {
      this.setState({
        count: event.target.value,
      }, () => ECActions.chooseAmount(this.state.count));
    }
  }

  componentDidMount(){
    ECStores.addChangeListener(this._onChange);
  }

  componentWillUnmount(){
    ECStores.removeChangeListener(this._onChange);
  }

  increaseAmount() {
      if (this.state.count >= this.state.stock){
        this.setState({
          count: this.state.stock
        }, () => ECActions.chooseAmount(this.state.count));
      } else {
        this.setState({
          count: Number(this.state.count) + 1
        }, () => ECActions.chooseAmount(this.state.count));
      }
  }

  decreaseAmount() {
    if (this.state.count <= 0) {
        this.setState({
          count: 0,
        }, () => ECActions.chooseAmount(this.state.count));
    } else {
      this.setState({
        count: Number(this.state.count) - 1
      }, () => ECActions.chooseAmount(this.state.count));
    }
  }

  render() {
    return(
      <div>
        <p style={this.state.count >= this.state.stock ? styles.stock : styles.none}>
          目前庫存數量：{this.state.count >= this.state.stock && this.state.stock}</p>
      <div className="wrapper">
        <p className="item-subtitle">數量</p>
        <div style={styles.amountwrapper}>
          <button
            style={styles.decreasebtn}
            onClick={() => this.decreaseAmount()}></button>
            <input
              type="number"
              style={styles.inputtxt}
              onChange={(e) => this.updateValue(e)}
              max={this.state.stock}
              onKeyDown={(e) => this.handleKeyDown(e)}
              value={this.state.count} />
          <button
            style={styles.increasebtn}
            onClick={() => this.increaseAmount()}></button>
        </div>
      </div>
    </div>
    );
  }
}

export default AmountSelector;
