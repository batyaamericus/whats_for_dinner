import React from "react";
import { Navbar, Container, Nav, NavDropdown, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Wise Bet</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link
              style={{ textDecoration: "none" }}
              className="styleNavLink navHome px-5 "
              to="/"
            >
              Home
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              className="styleNavLink navProfile px-5"
              to="/"
            >
              Top 10
            </Link>
          </Nav>
          <Nav>
           {/*  <Link
              style={{ textDecoration: "none" }}
              className="styleNavLink navProfile px-5 "
              to="/auth"
            >
              Login
            </Link> */}

            {/*  <Link
                style={{ textDecoration: "none" }}
                className="styleNavLink navProfile px-5"
                to="/signin"
              >
                Sign in
              </Link> */}

            <Link
              to="/#"
              style={{ textDecoration: "none" }}
              className="styleNavLink navHome px-5"
            >
              Logout
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
