import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'
import logo from './logo.svg';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
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
              <NavItem eventKey={1} to="/"><Link to="/">Create A Room</Link></NavItem>
              <NavItem eventKey={2}><Link to="/about">About</Link></NavItem>
              <img src={logo} className="App-logo" alt="logo" />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default Header;
