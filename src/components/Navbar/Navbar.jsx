import React from 'react'
import { Navbar as NavbarBootstrap, Nav, Container } from 'react-bootstrap';
import { CartWidget } from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <NavbarBootstrap expand="lg" className="navbar">
      <Container>
        <NavbarBootstrap.Brand as={Link} to="/">
          <img
            src="/logo.png"
            alt="Logo"
            width="200"
            height="30"
            className="img-fluid"
          />
        </NavbarBootstrap.Brand>
        <NavbarBootstrap.Toggle aria-controls="navbarSupportedContent" />
        <NavbarBootstrap.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link as={Link} to="/category/1">
              Malbec
            </Nav.Link>
            <Nav.Link as={Link} to="/category/2">
            Cabernet Sauvignon
            </Nav.Link>
            <Nav.Link as={Link} to="/category/3">
              Pinot Noir
            </Nav.Link>
          </Nav>
          <CartWidget />
        </NavbarBootstrap.Collapse>
      </Container>
    </NavbarBootstrap>
  )
}
