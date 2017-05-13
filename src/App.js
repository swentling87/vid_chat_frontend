import React, { Component } from 'react';
import Header from './header.js';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import Routes from './routes.js';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <hr className="App-header" />
          <Routes />
        </div>
      </Router>
    );
  }
}

export default App;
