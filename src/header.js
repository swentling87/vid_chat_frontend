import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'
import logo from './logo.svg';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import './css/Header.css';

class Header extends Component {
  render() {
    return (
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Vid Chat</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <li><Link to="/chat">Chat!</Link></li>
              <li><Link to="/about">About</Link></li>
              <img src={logo} className="App-logo" alt="logo" />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default Header;
