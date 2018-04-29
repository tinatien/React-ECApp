import React, { Component } from 'react';
import ECStores from '../stores/ECStores';

const styles = {
  wrapper: {
    backgroundColor: 'white',
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgwrapper: {
    display: 'flex',
    height: 250,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
};

class ItemPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: ECStores.getImage()
    };
    this._onChange = this._onChange.bind(this);
  }

  _onChange() {
    this.setState({
      img: ECStores.getImage()
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
      <div>
        <div style={styles.wrapper}>
          <div style={styles.imgwrapper}>
            <div
              className="photo"
              style={{backgroundImage: `url(${this.state.img})`}}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemPhoto;
