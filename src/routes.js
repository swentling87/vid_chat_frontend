import React from 'react'
import {
  Route
} from 'react-router-dom'
import About from './about.js';
import Home from './home.js';

const Routes = () => (
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </div>
)

export default Routes