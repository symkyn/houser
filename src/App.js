import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        { Routes }
      </div>
    );
  }
}

export default App;
