import React, { Component } from 'react';
import './Item.css';
import ECActions from '../actions/ECActions';
import ECStores from '../stores/ECStores';
import arrow from './arrow.png';

const styles = {
  selectWrapper: {
    position: 'relative',
    backgroundColor: 'transparent',
    height: 36,
    outline: 'none',
    appearance: 'none',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    border: '1px solid black',
    width: '70%',
  },
  select: {
    backgroundColor: 'transparent',
    backgroundImage: `url(${arrow})`,
    backgroundRepeat: 'no-repeat',
    backgroundPositionX: 'right',
    backgroundPositionY: 'center',
    height: 36,
    outline: 'none',
    appearance: 'none',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    border: 'none',
    fontSize: '1em',
    padding: '0 0 0 17px',
    width: '100%',
  }
};

var  shoes = ECStores.getShoes();

class SizeSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ECStores.getColor(),
      id: 1,
    };
    this._onChange = this._onChange.bind(this);
  }

  _onChange() {
    this.setState({
      color: ECStores.getColor()
    });
  }

  componentDidMount(){
    ECStores.addChangeListener(this._onChange);

  }

  componentWillUnmount(){
    ECStores.removeChangeListener(this._onChange);
  }

  handleChange(event) {
    this.setState({
      id: event.target.value,
    }, () =>  ECActions.chooseShoes(this.state.id));
  }

  render() {
    return(
      <div className="wrapper">
        <p className="item-subtitle">尺寸</p>
        <div style={styles.selectWrapper}>
          <select
            style={styles.select}
            onChange={(e) => this.handleChange(e)}>
            <option key="default" value={this.state.id}>Select Size</option>
            {shoes.map((item) => {
              if (item.color === this.state.color){
                return (
                  <option key={item.id} value={item.id}>{item.size}</option>
                );}
            })}
          </select>
        </div>
      </div>
    );
  }
}

export default SizeSelector;
