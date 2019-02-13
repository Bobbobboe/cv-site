import React, { Component } from 'react';
import './App.css';
import Bottom from './Bottom'
import Navbar from './Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Online cv</h1>
          <h2>Bob Van der Smissen</h2>
          <Navbar />
        </header>
        <body className="App-body">
          <Bottom />
        </body>
      </div>
    );
  }
}

export default App;
