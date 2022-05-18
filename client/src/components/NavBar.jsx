import React from "react";
import { Navbar, Container, Nav, NavDropdown, Stack } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import "./NavBar.css";

const NavBar = () => {
  const { activeUser, onLogout } = useAuth();
  const navigate = useNavigate();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="wiseLogo"onClick={() => navigate("/")}>Wise Bet</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {activeUser && (
              <Link
                style={{ textDecoration: "none" }}
                className="styleNavLink navHome px-5 "
                to="/"
              >
                Profile
              </Link>
            )}
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

            {!activeUser && (
              <Link
                style={{ textDecoration: "none" }}
                className="styleNavLink navProfile px-5"
                to="/auth"
              >
                Authenticate
              </Link>
            )}

            {activeUser && (
              <Link
                to="/#"
                style={{ textDecoration: "none" }}
                className="styleNavLink navHome px-5"
              >
                Logout
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
