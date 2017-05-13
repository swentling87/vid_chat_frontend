import React from 'react'
import { Jumbotron } from 'react-bootstrap';

const Home = () => (
  <div className="container">
    <Jumbotron className="home_container">
      <h1>Vid Chat!</h1>
      <p>Built on React this is a simple WebRTC based video chat application. Please note the minimum browser requirements:</p>      
        <ul className="requirements">
          <li>Microsoft Edge 12</li>
          <li>Google Chrome 28</li>
          <li>Mozilla Firefox 22</li>
          <li>Opera 18</li>
        </ul>
    </Jumbotron>
  </div>
)

export default Home