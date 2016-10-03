import React from 'react';
import {Nav, Navbar, NavItem, Image } from 'react-bootstrap';
import {IndexLinkContainer, LinkContainer} from 'react-router-bootstrap';
import './Header.css';
import logo from './../images/Twitch_Logo_White.png';

const navbarInstance = (
      <Navbar fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="//twitch.tv/" target="_blank">
            <Image src={logo} alt="twitch logo" responsive/></a>
          </Navbar.Brand>
          <Navbar.Toggle />
       </Navbar.Header>
       <Navbar.Collapse>
          <Nav className="nav-links" pullRight>
            <IndexLinkContainer to="/">
              <NavItem eventKey={1}>Home</NavItem>
            </IndexLinkContainer>
            <LinkContainer to="/about">
              <NavItem eventKey={2}>About</NavItem>
            </LinkContainer>
            <LinkContainer to="/search">
              <NavItem eventKey={3}>Search</NavItem>
            </LinkContainer>
          </Nav>
       </Navbar.Collapse>
     </Navbar>
  );

const Header = () => {
  return navbarInstance;
};

export default Header;
