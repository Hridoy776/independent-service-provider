import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to='/home'>Parfect passion</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link as={NavLink} to ="/home" > Home</Nav.Link>
      <Nav.Link as={NavLink} to ="/blog" > Blog</Nav.Link>
      <Nav.Link as={NavLink} to ="/packages" >Packages</Nav.Link>
      <Nav.Link as={NavLink} to="/aboutme">About me</Nav.Link>
      <Nav.Link as={NavLink} to ="/login" > Login</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  );
};

export default Header;
