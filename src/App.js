import React, { Component } from 'react';
import './App.css';
import ItemContent from './components/ItemContent.js';
import Checkout from './components/Checkout.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <ItemContent />
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Yahoo EC</h1>
        </header> */}
        <Checkout />
      </div>
    );
  }
}

export default App;
