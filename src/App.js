import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

// import WomenCards from './WomenCards';
import WomenCards from './WomenCards'


class App extends Component {
  render() {
    return (
      <div className="App">
          <header className="">
          <img className="entete" src={process.env.PUBLIC_URL+'./img/fond.jpg'} alt="image de fond" width="98%"/>
          </header>
          <body className="">
          <WomenCards />
          </body>
      </div>
    );
  }
}

export default App;
