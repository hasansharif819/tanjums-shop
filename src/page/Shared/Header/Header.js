import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PageTitle from '../PageTitle/PageTitle';

const Header = () => {
    return (
        <div>
          <PageTitle title='Header'></PageTitle>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
  <Container>
  <Navbar.Brand href="/">Tanjum's Shop</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/accessory">Accessory</Nav.Link>
      <Nav.Link as={Link} to="/sharee">Sharee</Nav.Link>
      <Nav.Link as={Link} to="/lehenga">Lehenga</Nav.Link>
      <Nav.Link as={Link} to="/services">Services</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      <Nav.Link as={Link} eventKey={2} to="/login">
        Login
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;