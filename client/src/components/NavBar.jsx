import React from "react";
import {Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import {Link} from "react-router-dom";

const NavBar = () => {
  return (
    <Container className="navCont center">
      <Navbar className="nav px-2" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" nav2 me-auto">
          
         
                <Link
                  style={{ textDecoration: "none" }}
                  className="styleNavLink navHome px-5"
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
           
              <Link
                style={{ textDecoration: "none" }}
                className="styleNavLink navProfile px-5"
                to="/"
              >
                Login
              </Link>
            
           
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
      </Navbar>
    </Container>
  );
};

export default NavBar;
