import React from 'react'
import {
  Route
} from 'react-router-dom'
import About from './about.js';
import Home from './home.js';
import Chat from './chat.js';

const Routes = () => (
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/chat" component={Chat}/>
    </div>
)

export default Routes