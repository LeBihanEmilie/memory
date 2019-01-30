import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

// import WomenCards from './WomenCards';
import WomenCards from './WomenCards'


class App extends Component {
  render() {
    return (
      <div className="App">
          <WomenCards />
      </div>
    );
  }
}

export default App;
