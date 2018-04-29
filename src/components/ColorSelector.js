import React, { Component } from 'react';
import ECActions from '../actions/ECActions';
import ECStores from '../stores/ECStores';
import './Item.css';

const styles = {
  imgwrapper: {
    backgroundColor: 'gray',
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selector: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '70%',
  },
  red: {
    backgroundColor: '#d0122e',
    outlineColor: '#d0122e',
    width: 32,
    height: 32,
  },
  orange: {
    backgroundColor: '#ea5300',
    outlineColor: '#ea5300',
    width: 32,
    height: 32,
  },
  green: {
    backgroundColor: '#036f2f',
    outlineColor: '#036f2f',
    width: 32,
    height: 32,
  },
  navy: {
    backgroundColor: '#0c53bd',
    outlineColor: '#0c53bd',
    width: 32,
    height: 32,
  },
  outofstockRed: {
    backgroundColor: '#e6cccf',
    outlineColor: '#d0122e',
    border: 'none',
  },
  outofstockOrange: {
    backgroundColor: '#ead2c5',
    outlineColor: '#ea5300',
    border: 'none',
  },
  outofstockGreen: {
    backgroundColor: '#d4eadd',
    outlineColor: '#036f2f',
    border: 'none',
  },
  outofstockNavy: {
    backgroundColor: '#d9e8f5',
    outlineColor: '#0c53bd',
    border: 'none',
  },
};

class ColorSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ECStores.getColor(),
      selectedColors: ECStores.getSelectedColors(),
    };

    this._onChange = this._onChange.bind(this);
  }

  _onChange() {
    this.setState({
      selectedColors: ECStores.getSelectedColors(),
    });
  }

  componentDidMount(){
    ECStores.addChangeListener(this._onChange);
  }

  componentWillUnmount(){
    ECStores.removeChangeListener(this._onChange);
  }

  showRed() {
    this.setState({
      color: 'red',
    }, () => this.handleClick());
  }
  showOrange() {
    this.setState({
      color: 'orange',
    }, () => this.handleClick());
  }

  showGreen() {
    this.setState({
      color: 'green',
    }, () => this.handleClick());
  }

  showNavy() {
    this.setState({
      color: 'navy',
    }, () => this.handleClick());
  }

  handleClick() {
    ECActions.chooseColor(this.state.color);
  }

  render() {
    return(
      <div>
        <div className="wrapper">
          <p className="item-subtitle">顏色</p>
            <div style={styles.selector}>
              <button
                className="color-square"
                style={this.state.selectedColors.includes("red") || this.state.color === "red" ? styles.red : styles.outofstockRed}
                key="red"
                name="red"
                onClick={() => this.showRed()}></button>
              <button
                className="color-square"
                style={this.state.selectedColors.includes("orange") || this.state.color === "orange" ? styles.orange : styles.outofstockOrange}
                key="orange"
                name="orange"
                onClick={() => this.showOrange()}></button>
              <button
                className="color-square"
                style={this.state.selectedColors.includes("green") || this.state.color === "green" ? styles.green : styles.outofstockGreen}
                key="green"
                name="green"
                onClick={() => this.showGreen()}></button>
              <button
                className="color-square"
                style={this.state.selectedColors.includes("navy") || this.state.color === "navy" ? styles.navy : styles.outofstockNavy}
                key="navy"
                name="navy"
                onClick={() => this.showNavy()}></button>
            </div>
          </div>
      </div>
    );
  }
}

export default ColorSelector;
