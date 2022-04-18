import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../firebase.init";

import "./Header.css";
const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      sticky="top"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand as={Link} to="/home">
          <span className="title">Perfect passion</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="home#services">services</Nav.Link>
            <Nav.Link href="home#packages">packages</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/home">
              {" "}
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/blog">
              {" "}
              Blog
            </Nav.Link>
            <Nav.Link as={NavLink} to="/aboutme">
              About me
            </Nav.Link>
            {user ? (
              <button className=" btn-sign-out " onClick={handleSignOut}>
                signOut
              </button>
            ) : (
              <Nav.Link as={NavLink} to="/login">
                {" "}
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
